import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { prisma } from '@/lib/prisma';
import { semanticContentSearch, findSimilarContent } from '@/lib/contentVectorService';

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
  quoteRoles?: Array<{
    title: string;
    experienceLevel: string;
    workspaceType: string;
    cost: number;
  }>;
  conversationTopics: string[];
  conversationSentiment: string;
  recentQuestions: string[];
  painPoints: string[];
  relevantContent: Array<{
    title: string;
    url: string;
    type: string;
    categories: string[];
    score: number;
  }>;
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
const cache = new Map<string, { data: AIRecommendation[]; timestamp: number }>();
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
        recommendations: cached.data,
        cached: true,
        userId
      });
    }

    // Fetch user context
    const userContext = await getUserContext(userId);
    console.log('📊 User context:', JSON.stringify(userContext, null, 2));

    // Generate AI recommendations
    const recommendations = await generateAIRecommendations(userContext);
    
    // Generate hero insight (the "WOW" moment)
    const heroInsight = generateHeroInsight(userContext);
    
    // Cache the results
    cache.set(userId, {
      data: recommendations,
      timestamp: Date.now()
    });

    console.log('✅ AI Recommendations generated:', recommendations.length);

    return NextResponse.json({
      success: true,
      recommendations,
      heroInsight, // 🔥 The mind-blowing insight!
      cached: false,
      userId,
      context: {
        stage: userContext.stage,
        industry: userContext.industry,
        candidatesViewed: userContext.candidatesViewed,
        hasQuote: userContext.hasQuote,
        quoteRoles: userContext.quoteRoles?.length || 0,
        conversationTopics: userContext.conversationTopics.length,
        painPoints: userContext.painPoints.length,
        relevantContentCount: userContext.relevantContent.length
      }
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
    pricingQuotes,
    conversationMemories
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
    
    // Pricing quotes WITH roles
    prisma.pricingQuote.findMany({
      where: { user_id: userId },
      orderBy: { created_at: 'desc' },
      take: 5,
      include: {
        pricingQuoteRoles: true // 🔥 GET THE ACTUAL ROLES!
      }
    }),

    // Conversation memory from Maya chat
    prisma.conversationMemory.findMany({
      where: { 
        user_id: userId,
        importance_score: { gte: 5 } // Only important memories
      },
      orderBy: { importance_score: 'desc' },
      take: 10
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

  // 🔥 EXTRACT QUOTE ROLES (the actual positions they need!)
  const latestQuote = pricingQuotes[0];
  const quoteRoles = latestQuote?.pricingQuoteRoles?.map(role => ({
    title: role.role_title,
    experienceLevel: role.experience_level,
    workspaceType: role.workspace_type,
    cost: Number(role.total_cost)
  })) || [];

  // 🔥 EXTRACT CONVERSATION INSIGHTS from Maya chat
  const conversationTopics: string[] = [];
  const painPoints: string[] = [];
  const recentQuestions: string[] = [];
  let conversationSentiment = 'neutral';

  conversationMemories.forEach(memory => {
    const content = memory.content as any;
    
    if (memory.memory_type === 'topic' && content.topic) {
      conversationTopics.push(content.topic);
    }
    
    if (memory.memory_type === 'pain_point' && content.pain_point) {
      painPoints.push(content.pain_point);
    }
    
    if (memory.memory_type === 'question' && content.question) {
      recentQuestions.push(content.question);
    }
    
    if (memory.memory_type === 'sentiment' && content.sentiment) {
      conversationSentiment = content.sentiment;
    }
  });

  // 🔥 GET RELEVANT CONTENT FROM VECTOR DATABASE
  const relevantContent = await findSimilarContent(
    userId,
    {
      industry: user?.industry_name,
      userStage: leadProgress?.status || 'new_lead',
      limit: 20
    }
  );

  // Create enhanced behavior summary
  const behaviorSummary = createBehaviorSummary(
    contentViews,
    pageVisits,
    candidateViews,
    pricingQuotes,
    conversationTopics,
    painPoints
  );

  return {
    userId,
    stage: leadProgress?.status || 'new_lead',
    industry: user?.industry_name || undefined,
    companyName: user?.company || undefined,
    teamSize: latestQuote?.member_count || undefined,
    candidatesViewed: candidateViews.length,
    topCandidates,
    pagesViewed,
    hasQuote: pricingQuotes.length > 0,
    quoteBudget: latestQuote?.total_monthly_cost ? Number(latestQuote.total_monthly_cost) : undefined,
    quoteRoles, // 🔥 REAL roles with details!
    conversationTopics,
    conversationSentiment,
    recentQuestions,
    painPoints,
    relevantContent, // 🔥 From vector database!
    behaviorSummary
  };
}

function createBehaviorSummary(
  contentViews: any[],
  pageVisits: any[],
  candidateViews: any[],
  pricingQuotes: any[],
  conversationTopics: string[],
  painPoints: string[]
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

  // Conversation insights
  if (conversationTopics.length > 0) {
    parts.push(`Discussed: ${conversationTopics.slice(0, 3).join(', ')}`);
  }

  if (painPoints.length > 0) {
    parts.push(`Pain points: ${painPoints.slice(0, 2).join(', ')}`);
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
  // Format quote roles for display
  const rolesText = context.quoteRoles && context.quoteRoles.length > 0
    ? context.quoteRoles.map(r => 
        `${r.title} (${r.experienceLevel}, ${r.workspaceType}) - $${r.cost}/month`
      ).join('\n  ')
    : 'None yet';

  // Format relevant content from vector database
  const contentText = context.relevantContent
    .map(c => `- ${c.title} (${c.type}) - ${c.url} [Score: ${c.score.toFixed(2)}]`)
    .join('\n');

  return `You are Claude, the AI recommendation engine for ShoreAgents - a premium BPO staffing company.

Your mission: Generate 6 MIND-BLOWINGLY personalized recommendations that make users think "Holy shit, they GET ME!"

═══════════════════════════════════════════════════════════════════════════
🧠 USER INTELLIGENCE FILE
═══════════════════════════════════════════════════════════════════════════

USER ID: ${context.userId}
JOURNEY STAGE: ${context.stage}
INDUSTRY: ${context.industry || 'Unknown'}
COMPANY: ${context.companyName || 'Unknown'}
TEAM SIZE: ${context.teamSize || 'Unknown'}

───────────────────────────────────────────────────────────────────────────
📊 BEHAVIORAL ANALYSIS
───────────────────────────────────────────────────────────────────────────
${context.behaviorSummary}

CANDIDATES VIEWED: ${context.candidatesViewed} profiles
${context.topCandidates.length > 0 ? `TOP CANDIDATES:\n${context.topCandidates.map(c => `  - ${c.name} (${c.views} views)`).join('\n')}` : ''}

───────────────────────────────────────────────────────────────────────────
💰 PRICING INTELLIGENCE
───────────────────────────────────────────────────────────────────────────
HAS QUOTE: ${context.hasQuote ? 'YES' : 'NO'}
${context.hasQuote ? `BUDGET: $${context.quoteBudget}/month` : ''}
${context.hasQuote ? `ROLES QUOTED:\n  ${rolesText}` : ''}

───────────────────────────────────────────────────────────────────────────
💬 CONVERSATION INSIGHTS (from Maya AI Chat)
───────────────────────────────────────────────────────────────────────────
SENTIMENT: ${context.conversationSentiment}
${context.conversationTopics.length > 0 ? `TOPICS DISCUSSED:\n${context.conversationTopics.map(t => `  - ${t}`).join('\n')}` : 'No chat history yet'}
${context.painPoints.length > 0 ? `PAIN POINTS:\n${context.painPoints.map(p => `  - ${p}`).join('\n')}` : ''}
${context.recentQuestions.length > 0 ? `RECENT QUESTIONS:\n${context.recentQuestions.map(q => `  - ${q}`).join('\n')}` : ''}

───────────────────────────────────────────────────────────────────────────
📚 RELEVANT CONTENT (Vector Database - Semantic Match)
───────────────────────────────────────────────────────────────────────────
These are REAL pages that exist, ranked by relevance to this user:

${contentText}

═══════════════════════════════════════════════════════════════════════════
🎯 YOUR MISSION
═══════════════════════════════════════════════════════════════════════════

Generate 6 cards that are SO on-point the user thinks you're reading their mind.

STAGE GUIDE:
- new_lead: Educate, build trust, show value
- stage_1: They gave industry/company - show industry-specific wins
- stage_2: They gave contact info - they're serious, push to quote
- quoted: They HAVE a quote - push to book consultation NOW
- meeting_booked: Keep momentum, share similar success stories
- signed_up: Welcome them, set expectations, onboarding content

CARD TYPES:
1. "case-study" - Client success stories (use EXACT URLs from content list)
2. "blog" - Educational content (use EXACT URLs from content list)
3. "resource" - Service pages (use EXACT URLs from content list)
4. "candidate" - Recommend candidates they viewed or similar ones
5. "cta" - Action prompts (quote, consultation, contact)
6. "insight" - Personal insights about their journey

CRITICAL RULES:
✅ ONLY use URLs from the "RELEVANT CONTENT" list above - NO HALLUCINATIONS!
✅ Match content to their INDUSTRY (Real Estate, Construction, etc.)
✅ Reference their PAIN POINTS from conversations
✅ Acknowledge their QUOTE ROLES if they have any
✅ Use BEHAVIORAL data to be hyper-specific
✅ Make CTAs stage-appropriate (don't rush new leads)
✅ Be confident, not pushy - like a trusted advisor
✅ Use their conversation topics to show continuity

ADVANCED TACTICS:
- If they viewed candidates multiple times → "You've been eyeing X, here's why they're perfect for your ${context.industry} team"
- If they have a quote for "Transaction Coordinator" → Recommend case studies about TC success
- If they discussed pain points → Address those DIRECTLY in insights
- If sentiment is negative/frustrated → Empathize and show solutions
- If they spent time on pricing pages → Show ROI case studies

Return ONLY valid JSON (no markdown, no commentary):

{
  "recommendations": [
    {
      "cardType": "case-study",
      "title": "EXACT title from content list",
      "description": "Compelling 1-2 sentence description that connects to THEIR situation",
      "url": "EXACT URL from content list above",
      "reason": "Ultra-specific reason based on their behavior/context",
      "priority": 95,
      "metadata": {
        "industry": "Their industry",
        "relevanceScore": 0.95
      }
    }
  ]
}`;
}

function generateFallbackRecommendations(context: UserContext): AIRecommendation[] {
  console.log('⚠️ Using fallback recommendations (AI failed)');
  
  const recommendations: AIRecommendation[] = [];

  // Use vector database content instead of hardcoded URLs
  const blogContent = context.relevantContent.filter(c => c.type === 'blog').slice(0, 2);
  const caseStudies = context.relevantContent.filter(c => c.type === 'case-study').slice(0, 2);
  const resources = context.relevantContent.filter(c => c.type === 'sub-pillar' || c.type === 'pillar').slice(0, 2);

  // Stage-based recommendations using REAL content
  switch (context.stage) {
    case 'new_lead':
      if (blogContent[0]) {
        recommendations.push({
          cardType: 'blog',
          title: blogContent[0].title,
          description: 'Essential reading for understanding offshore staffing',
          url: blogContent[0].url,
          reason: 'Perfect starting point for new visitors',
          priority: 90
        });
      }
      
      recommendations.push({
        cardType: 'cta',
        title: 'See How It Works',
        description: 'Learn our proven process for hiring offshore talent',
        url: '/how-it-works',
        reason: 'Understand the process before diving in',
        priority: 85
      });
      break;

    case 'stage_1':
    case 'stage_2':
      if (context.industry && resources[0]) {
        recommendations.push({
          cardType: 'resource',
          title: resources[0].title,
          description: 'Comprehensive guide for your industry',
          url: resources[0].url,
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

  // Add case study if available
  if (caseStudies[0]) {
    recommendations.push({
      cardType: 'case-study',
      title: caseStudies[0].title,
      description: 'See how we helped a company like yours',
      url: caseStudies[0].url,
      reason: 'Relevant success story',
      priority: 80
    });
  }

  return recommendations.slice(0, 6);
}

/**
 * Generate a "Holy Shit" Hero Insight
 * This is the big personalized message that makes users feel SEEN
 */
function generateHeroInsight(context: UserContext): string {
  const insights: string[] = [];

  // Build contextual insight based on behavior
  if (context.hasQuote && context.quoteRoles && context.quoteRoles.length > 0) {
    const roles = context.quoteRoles.map(r => r.title).join(', ');
    const budget = context.quoteBudget;
    
    if (context.conversationTopics.length > 0) {
      insights.push(
        `You've been researching ${context.conversationTopics[0]}, got a quote for ${roles} (${context.quoteRoles.length} ${context.quoteRoles.length === 1 ? 'role' : 'roles'}), and spent time reviewing candidates. You're ${context.stage === 'quoted' ? 'ONE conversation away' : 'getting close'} from building your offshore dream team at $${budget}/month. Let's make it happen.`
      );
    } else {
      insights.push(
        `You've quoted ${context.quoteRoles.length} ${context.quoteRoles.length === 1 ? 'position' : 'positions'} (${roles}) and ${context.candidatesViewed > 0 ? `already checked out ${context.candidatesViewed} candidates` : 'are ready to see some talent'}. Companies at your stage typically save $${Math.round((budget || 0) * 2.5)}/month vs. local hiring. Ready to lock this in?`
      );
    }
  } else if (context.painPoints.length > 0) {
    const mainPain = context.painPoints[0];
    insights.push(
      `I noticed you mentioned "${mainPain}" in your chat with Maya. ${context.industry ? `For ${context.industry} companies, this is exactly why` : 'This is exactly why'} our clients bring on offshore talent. ${context.candidatesViewed > 0 ? `You've already viewed ${context.candidatesViewed} candidates - let's find THE one who solves this.` : `Want to see candidates who've solved this exact problem?`}`
    );
  } else if (context.candidatesViewed >= 3) {
    const topCandidate = context.topCandidates[0];
    insights.push(
      `You've viewed ${context.candidatesViewed} candidates${topCandidate ? `, with ${topCandidate.views} visits to ${topCandidate.name}'s profile` : ''}. When clients return to a candidate profile ${topCandidate && topCandidate.views >= 3 ? 'that many times' : 'multiple times'}, it usually means they've found "the one." ${context.hasQuote ? `You have a quote ready - want to move forward?` : `Ready to get a quote and see what this would cost?`}`
    );
  } else if (context.conversationTopics.length > 0) {
    insights.push(
      `Based on your conversations about ${context.conversationTopics.slice(0, 2).join(' and ')}, ${context.industry ? `and your ${context.industry} industry` : 'I can tell'} you're doing your homework. ${context.stage === 'new_lead' ? `Most people at your stage spend 3-5 days researching before getting a quote. Skip ahead?` : `You're further along than 80% of people who visit. Let's get you matched with the right talent.`}`
    );
  } else if (context.pagesViewed.length > 5) {
    const totalTime = context.pagesViewed.reduce((sum, p) => sum + p.timeSpent, 0);
    const minutes = Math.round(totalTime / 60);
    insights.push(
      `You've spent ${minutes} minutes across ${context.pagesViewed.length} pages. ${context.industry ? `For ${context.industry}` : 'For most'} companies, the next logical step is ${context.hasQuote ? 'booking a consultation to discuss your quote' : 'getting a custom quote to see real numbers'}. ${context.stage === 'stage_2' ? `You're already in our system - let's finish this.` : `Want to see what this would actually cost?`}`
    );
  } else if (context.stage === 'new_lead') {
    insights.push(
      `Welcome! ${context.industry ? `As a ${context.industry} company,` : 'Most of our clients'} typically start by exploring case studies and pricing. I've curated exactly what you need to see below. No pressure - just the right info at the right time.`
    );
  } else {
    insights.push(
      `You're ${context.stage === 'stage_1' ? 'making progress' : context.stage === 'stage_2' ? 'almost there' : 'on your journey'}. ${context.industry ? `Other ${context.industry} companies` : 'Companies'} at your stage usually ${context.hasQuote ? 'book a quick call within 48 hours' : 'get a quote to see real numbers'}. I've lined up some ${context.candidatesViewed > 0 ? 'more' : ''} personalized recommendations below.`
    );
  }

  return insights[0] || "Let's find you the perfect offshore team.";
}

