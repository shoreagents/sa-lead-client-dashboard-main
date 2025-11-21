import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { prisma } from '@/lib/prisma';

interface UserContext {
  userId: string;
  stage: string;
  industry?: string;
  companyName?: string;
  teamSize?: number;
  candidatesViewed: number;
  topCandidates: Array<{ id: string; name: string; views: number }>;
  pagesViewed: Array<{ path: string; timeSpent: number }>;
  hasQuote: boolean;
  quoteBudget?: number;
  quoteRoles?: string[];
  behaviorSummary: string;
}

interface AIRecommendation {
  cardType: 'candidate' | 'case-study' | 'blog' | 'resource' | 'cta' | 'insight';
  title: string;
  description: string;
  url?: string;
  reason: string;
  priority: number;
  metadata?: Record<string, any>;
}

// Cache recommendations for 5 minutes
const cache = new Map<string, { 
  recommendations: AIRecommendation[]; 
  insight: any;
  userStage: string;
  timestamp: number;
}>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    console.log('🤖 AI Recommendations requested for user:', userId);

    // Check cache first
    const cached = cache.get(userId);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      console.log('✅ Returning cached recommendations');
      return NextResponse.json({
        success: true,
        recommendations: cached.recommendations,
        insight: cached.insight,
        userStage: cached.userStage,
        cached: true,
        userId
      });
    }

    // Fetch user context
    const userContext = await getUserContext(userId);
    console.log('📊 User context:', JSON.stringify(userContext, null, 2));

    // Generate AI recommendations
    const recommendations = await generateAIRecommendations(userContext);
    
    // Cache the results
    cache.set(userId, {
      recommendations: recommendations.slice(1),
      insight,
      userStage: userContext.stage,
      timestamp: Date.now()
    });

    console.log('✅ AI Recommendations generated:', recommendations.length);

    // Generate insight (main hero recommendation)
    const insight = recommendations.length > 0 ? {
      type: 'insight',
      title: recommendations[0].title,
      description: recommendations[0].description,
      action: 'Take Action',
      actionUrl: recommendations[0].url || '/how-it-works',
      icon: 'Target',
      priority: 100,
      reason: recommendations[0].reason
    } : null;

    return NextResponse.json({
      success: true,
      recommendations: recommendations.slice(1), // Return remaining recommendations (skip first one used as insight)
      insight, // Main hero banner
      userStage: userContext.stage, // User journey stage
      cached: false,
      userId
    });

  } catch (error) {
    console.error('❌ Error generating AI recommendations:', error);
    return NextResponse.json(
      { 
        error: 'Failed to generate recommendations',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

async function getUserContext(userId: string): Promise<UserContext> {
  console.log('🔍 Fetching user context for:', userId);

  // Fetch all user data in parallel
  const [
    leadProgress,
    user,
    contentViews,
    pageVisits,
    candidateViews,
    pricingQuotes
  ] = await Promise.all([
    // Lead progress (stage)
    prisma.leadProgress.findFirst({
      where: { user_id: userId },
      orderBy: { created_at: 'desc' }
    }),
    
    // User profile
    prisma.user.findFirst({
      where: { user_id: userId }
    }),
    
    // Content views
    prisma.content_views.findMany({
      where: {
        user_id: userId,
        viewed_at: {
          gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // Last 30 days
        }
      },
      orderBy: { viewed_at: 'desc' },
      take: 50
    }),
    
    // Page visits
    prisma.userPageVisit.findMany({
      where: { user_id: userId },
      orderBy: { last_visit_timestamp: 'desc' },
      take: 20
    }),
    
    // Candidate views
    prisma.candidateView.findMany({
      where: { user_id: userId },
      orderBy: { updated_at: 'desc' },
      take: 10
    }),
    
    // Pricing quotes
    prisma.pricingQuote.findMany({
      where: { user_id: userId },
      orderBy: { created_at: 'desc' },
      take: 5
    })
  ]);

  // Process candidate views
  const topCandidates = candidateViews
    .map(cv => ({
      id: cv.candidate_id,
      name: cv.candidate_name || 'Unknown',
      views: cv.page_views || 1
    }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  // Process page visits
  const pagesViewed = pageVisits.map(pv => ({
    path: pv.page_path,
    timeSpent: pv.time_spent_seconds || 0
  }));

  // Create behavior summary
  const behaviorSummary = createBehaviorSummary(
    contentViews,
    pageVisits,
    candidateViews,
    pricingQuotes
  );

  // Get latest quote info
  const latestQuote = pricingQuotes[0];

  return {
    userId,
    stage: leadProgress?.status || 'new_lead',
    industry: user?.industry_name || undefined,
    companyName: user?.company || undefined,
    teamSize: latestQuote?.member_count || undefined, // Use quote member count as team size
    candidatesViewed: candidateViews.length,
    topCandidates,
    pagesViewed,
    hasQuote: pricingQuotes.length > 0,
    quoteBudget: latestQuote?.total_monthly_cost ? Number(latestQuote.total_monthly_cost) : undefined,
    quoteRoles: latestQuote ? ['Virtual Assistant'] : undefined, // Simplified
    behaviorSummary
  };
}

function createBehaviorSummary(
  contentViews: any[],
  pageVisits: any[],
  candidateViews: any[],
  pricingQuotes: any[]
): string {
  const parts: string[] = [];

  // Total engagement
  const totalTimeSpent = pageVisits.reduce((sum, pv) => sum + (pv.time_spent_seconds || 0), 0);
  parts.push(`Spent ${Math.round(totalTimeSpent / 60)} minutes on site`);

  // Page focus
  const topPages = pageVisits
    .sort((a, b) => (b.time_spent_seconds || 0) - (a.time_spent_seconds || 0))
    .slice(0, 3)
    .map(pv => pv.page_path.split('/').pop() || 'homepage');
  if (topPages.length > 0) {
    parts.push(`Most interested in: ${topPages.join(', ')}`);
  }

  // Candidate interest
  if (candidateViews.length > 0) {
    parts.push(`Viewed ${candidateViews.length} candidate profiles`);
    const repeatViews = candidateViews.filter(cv => (cv.page_views || 0) >= 2);
    if (repeatViews.length > 0) {
      parts.push(`Returned to ${repeatViews.length} profiles multiple times`);
    }
  }

  // Quote behavior
  if (pricingQuotes.length > 0) {
    parts.push(`Created ${pricingQuotes.length} pricing quote(s)`);
  }

  return parts.join('. ');
}

async function generateAIRecommendations(context: UserContext): Promise<AIRecommendation[]> {
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  const prompt = buildAIPrompt(context);
  
  console.log('🤖 Sending prompt to Claude...');

  try {
    const message = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 2048,
      temperature: 0.7,
      messages: [{
        role: "user",
        content: prompt
      }]
    });

    const responseText = message.content[0].type === 'text' 
      ? message.content[0].text 
      : '';

    console.log('✅ Claude response received');

    // Parse JSON from response
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No JSON found in Claude response');
    }

    const parsed = JSON.parse(jsonMatch[0]);
    return parsed.recommendations || [];

  } catch (error) {
    console.error('❌ Error calling Claude API:', error);
    // Fallback to rule-based recommendations
    return generateFallbackRecommendations(context);
  }
}

function buildAIPrompt(context: UserContext): string {
  return `You are an AI recommendation engine for ShoreAgents, a BPO staffing company specializing in Filipino offshore talent.

USER CONTEXT:
- User ID: ${context.userId}
- Journey Stage: ${context.stage}
- Industry: ${context.industry || 'Unknown'}
- Company: ${context.companyName || 'Unknown'}
- Team Size: ${context.teamSize || 'Unknown'}
- Behavior: ${context.behaviorSummary}
- Candidates Viewed: ${context.candidatesViewed}
- Has Quote: ${context.hasQuote ? 'Yes' : 'No'}
${context.hasQuote ? `- Quote Budget: $${context.quoteBudget}/month` : ''}

STAGE DEFINITIONS:
- new_lead: Just arrived, browsing
- stage_1: Filled 45s form (industry, company, team size)
- stage_2: Gave contact info (name, email)
- quoted: Completed pricing calculator
- meeting_booked: Scheduled consultation
- signed_up: Created account

AVAILABLE CONTENT (ShoreAgents):

CASE STUDIES (24 total):
- Real Estate: business-referral-partnerships (Ray Wood), gradual-team-scaling-success (Barry Plant), appraisal-listings-volume-increase (Levi Turner)
- Construction: construction-cost-reduction (Gallery Group), team-expansion-success (Ballast)
- Mortgage: mortgage-industry-transformation (Gelt Financial)
- Property Management: streamline-back-office (Jason Gard), quick-staff-onboarding (Harcourts Dapto)
- General Success: long-term-partnership-success, exceptional-team-performance, hiring-success-after-failures

BLOG POSTS (7 total):
- what-is-outsourcing: Complete guide for beginners
- outsourcing-philippines: Why Philippines is #1 BPO destination
- virtual-real-estate-assistant-pricing: Pricing guide 2025
- what-does-a-real-estate-virtual-assistant-do: Role breakdown
- outsourcing-vs-offshoring: Key differences explained
- outsourcing-to-india: India BPO guide
- outsourcing-to-vietnam: Vietnam BPO guide

RESOURCE PAGES (68 total, organized by industry):
- Real Estate: /real-estate-outsourcing, /real-estate-virtual-assistant
- Construction: /construction-outsourcing, /construction-virtual-assistant
- Property Management: /property-management-outsourcing, /property-management-virtual-assistant
- Mortgage: /mortgage-outsourcing, /mortgage-virtual-assistant
- Legal: /legal-outsourcing, /legal-virtual-assistant
- And more for accounting, SEO, graphic design, etc.

YOUR TASK:
Generate 6 personalized card recommendations for this user's AI drawer based on their stage and behavior.

CARD TYPES:
1. "candidate" - Featured or matched candidate profiles
2. "case-study" - Success stories relevant to their industry
3. "blog" - Educational content matching their research phase
4. "resource" - Resource pages for their industry
5. "cta" - Next step call-to-action
6. "insight" - Personalized insight about their journey

RULES:
- Match content to their industry (if known)
- Prioritize based on their stage
- Use behavior signals (pages viewed, candidates viewed)
- Always provide a clear reason for each recommendation
- Make CTAs stage-appropriate
- Be encouraging but not pushy

Return ONLY valid JSON in this exact format:
{
  "recommendations": [
    {
      "cardType": "case-study",
      "title": "Ray Wood - Bestagents",
      "description": "12+ years of professional referrals, featured on Top Agents Playbook",
      "url": "/business-referral-partnerships",
      "reason": "Matches your real estate industry and shows long-term success",
      "priority": 95,
      "metadata": {
        "industry": "Real Estate",
        "client": "Ray Wood",
        "yearsInBusiness": "12+"
      }
    }
  ]
}`;
}

function generateFallbackRecommendations(context: UserContext): AIRecommendation[] {
  console.log('⚠️ Using fallback recommendations (AI failed)');
  
  const recommendations: AIRecommendation[] = [];

  // Stage-based recommendations
  switch (context.stage) {
    case 'new_lead':
      recommendations.push(
        {
          cardType: 'blog',
          title: 'What is Outsourcing?',
          description: 'Complete guide to offshore staffing and why Philippines is the premier destination',
          url: '/what-is-outsourcing',
          reason: 'Perfect starting point for new visitors',
          priority: 90
        },
        {
          cardType: 'cta',
          title: 'See How It Works',
          description: 'Learn our proven process for hiring offshore talent',
          url: '/how-it-works',
          reason: 'Understand the process before diving in',
          priority: 85
        }
      );
      break;

    case 'stage_1':
    case 'stage_2':
      if (context.industry) {
        recommendations.push({
          cardType: 'resource',
          title: `${context.industry} Outsourcing`,
          description: `Comprehensive guide to outsourcing for ${context.industry} companies`,
          url: `/${context.industry.toLowerCase().replace(/\s+/g, '-')}-outsourcing`,
          reason: `Matched to your ${context.industry} industry`,
          priority: 95
        });
      }
      
      recommendations.push({
        cardType: 'cta',
        title: 'Get Your Custom Quote',
        description: 'See exactly how much you can save with offshore talent',
        url: '/pricing',
        reason: 'You\'ve shown interest, time to see the numbers',
        priority: 90
      });
      break;

    case 'quoted':
      recommendations.push(
        {
          cardType: 'cta',
          title: 'Schedule Your Consultation',
          description: 'Let\'s discuss your quote and find the perfect team members',
          url: '/contact?type=consultation',
          reason: 'You\'ve completed your quote - ready for next step',
          priority: 98
        },
        {
          cardType: 'insight',
          title: 'You\'re Almost There!',
          description: 'Companies like yours typically schedule a consultation within 48 hours of getting their quote.',
          reason: 'Encouraging next step based on patterns',
          priority: 95
        }
      );
      break;
  }

  // Always add a case study
  recommendations.push({
    cardType: 'case-study',
    title: 'Gallery Group Success',
    description: 'How this construction company reduced costs with offshore estimating',
    url: '/construction-cost-reduction',
    reason: 'Popular success story across all industries',
    priority: 80
  });

  return recommendations.slice(0, 6);
}

