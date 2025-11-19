import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { searchKnowledge, knowledgeBase } from '@/lib/knowledge-base';
import { createClient } from '@/lib/supabase/client';
import { getSystemPrompt } from '@/lib/ai-config';
import { SIMPLIFIED_AI_CONFIG } from '@/lib/ai-config-simplified';
import { fetchBPOCUsersFromDatabase } from '@/lib/bpoc-database';

// Extract lead data from user messages
function extractLeadDataFromMessage(message: string, userData: any) {
  const extracted: any = {};
  const lowerMessage = message.toLowerCase();
  
  // Extract company name (look for "my company is", "I work at", "from X")
  if (!userData?.user?.company) {
    const companyPatterns = [
      /(?:my company is|company is|i work at|i'm from|from)\s+([A-Z][A-Za-z0-9\s&.,'-]+?)(?:\.|,|$|\s+and\s+|\s+in\s+)/i,
      /([A-Z][A-Za-z0-9\s&.,'-]+?)\s+(?:company|corp|corporation|inc|llc|ltd|limited)/i,
    ];
    
    for (const pattern of companyPatterns) {
      const match = message.match(pattern);
      if (match && match[1]) {
        const companyName = match[1].trim();
        // Filter out common false positives
        if (!['I', 'My', 'The', 'We', 'Our', 'This', 'That'].includes(companyName)) {
          extracted.company = companyName;
          console.log('📝 Extracted company:', companyName);
          break;
        }
      }
    }
  }
  
  // Extract team size (look for numbers + "people", "staff", "team members", etc.)
  if (!userData?.user?.desired_team_size) {
    const sizePatterns = [
      /(\d+)\s*(?:to|or|-)\s*(\d+)\s*(?:people|person|members?|staff|employees?|team)/i,
      /(?:about|around|roughly|approximately)\s*(\d+)\s*(?:people|person|members?|staff|employees?|team)/i,
      /(\d+)\s*(?:people|person|members?|staff|employees?|team)/i,
    ];
    
    for (const pattern of sizePatterns) {
      const match = message.match(pattern);
      if (match) {
        // If range (e.g., "2-3 people"), take the average
        if (match[2]) {
          const size = Math.round((parseInt(match[1]) + parseInt(match[2])) / 2);
          extracted.desired_team_size = size;
          console.log('📝 Extracted team size (range):', size);
        } else if (match[1]) {
          const size = parseInt(match[1]);
          // Reasonable range: 1-100
          if (size >= 1 && size <= 100) {
            extracted.desired_team_size = size;
            console.log('📝 Extracted team size:', size);
          }
        }
        break;
      }
    }
  }
  
  // Extract industry
  const industries = [
    'real estate', 'construction', 'engineering', 'marketing', 
    'technology', 'healthcare', 'finance', 'insurance', 'manufacturing',
    'retail', 'hospitality', 'education', 'legal', 'consulting',
    'telecommunications', 'transportation', 'logistics', 'accounting',
    'architecture', 'design', 'ecommerce', 'e-commerce'
  ];
  
  if (!userData?.user?.industry) {
    const foundIndustry = industries.find(ind => lowerMessage.includes(ind.toLowerCase()));
    if (foundIndustry) {
      extracted.industry = foundIndustry.charAt(0).toUpperCase() + foundIndustry.slice(1);
      console.log('📝 Extracted industry:', extracted.industry);
    }
  }
  
  // Extract first name (look for "my name is", "I'm", "call me")
  if (!userData?.user?.first_name) {
    const namePatterns = [
      /(?:my name is|i'm|im|call me)\s+([A-Z][a-z]+)/,
      /^([A-Z][a-z]+)$/,  // Single capitalized word (likely a name in response to "What's your name?")
    ];
    
    for (const pattern of namePatterns) {
      const match = message.match(pattern);
      if (match && match[1]) {
        const firstName = match[1];
        // Filter out common false positives
        if (!['The', 'This', 'That', 'Yes', 'No', 'Sure', 'Thanks', 'Hello', 'Hi'].includes(firstName)) {
          extracted.first_name = firstName;
          console.log('📝 Extracted first name:', firstName);
          break;
        }
      }
    }
  }
  
  // Extract email
  if (!userData?.user?.email) {
    const emailPattern = /[\w.+-]+@[\w-]+\.[\w.-]+/;
    const emailMatch = message.match(emailPattern);
    if (emailMatch) {
      extracted.email = emailMatch[0];
      console.log('📝 Extracted email:', extracted.email);
    }
  }
  
  // Extract business needs/notes (if message contains descriptive text about work)
  if (!userData?.leadProgress?.notes && lowerMessage.includes('need') || lowerMessage.includes('help with') || lowerMessage.includes('looking for')) {
    // If message is descriptive (more than 10 words), save as notes
    const words = message.split(/\s+/);
    if (words.length >= 10 && words.length <= 200) {
      extracted.notes = message;
      console.log('📝 Extracted business needs');
    }
  }
  
  return extracted;
}

// Conversation analysis function
function analyzeConversation(message: string, conversationHistory: Array<{ role: string; content: string }>, userData: any) {
  const messageLower = (message || '').toLowerCase();
  const fullConversation = [...conversationHistory.map(msg => msg.content), message || ''].join(' ').toLowerCase();
  
  // Analyze user intent - be more specific to avoid false positives
  let intent = 'general_inquiry';
  
  // Handle empty messages as greetings
  if (!message || message.trim() === '') {
    intent = 'greeting';
  }
  // Detect candidate analysis requests (PRIORITY - check this first)
  // Simple detection: if asking about someone by name
  else if (
    (messageLower.includes('who is') || messageLower.includes('who are') ||
     messageLower.includes('tell me about') || messageLower.includes('what about') || 
     messageLower.includes('tell me more about') || messageLower.includes('information about') ||
     messageLower.includes('ask about') || messageLower.includes('know about') ||
     messageLower.includes('analyze') || messageLower.includes('evaluate') ||
     messageLower.includes('review') || messageLower.includes('assess')) &&
    // Check if message contains any capitalized words (potential names)
    message.match(/[A-Z][a-z]+/)
  ) {
    console.log('🔍 Candidate analysis detected for message:', message);
    intent = 'candidate_analysis';
  }
  // Questions after seeing candidates
  else if (
    (messageLower.includes('can i ask') || messageLower.includes('question about') ||
     messageLower.includes('curious about') || messageLower.includes('interested in')) &&
    (messageLower.includes('candidate') || messageLower.includes('them') || messageLower.includes('this person'))
  ) {
    intent = 'candidate_analysis';
  }
  // Context-based: if user just saw candidates and is asking questions
  else if (
    fullConversation.includes('recommended candidates') &&
    (messageLower.includes('about') || messageLower.includes('ask') || 
     messageLower.includes('know') || messageLower.includes('tell'))
  ) {
    intent = 'candidate_analysis';
  }
  // Only detect specific business intents for clear requests
  else if (messageLower.includes('pricing') || messageLower.includes('cost') || messageLower.includes('price') || messageLower.includes('quote')) {
    intent = 'pricing_inquiry';
  } else if (messageLower.includes('talent') || messageLower.includes('hire') || messageLower.includes('team') || messageLower.includes('staff')) {
    // Only if it's a clear business request, not just casual mention or question about existing candidates
    if ((messageLower.includes('need') || messageLower.includes('want') || messageLower.includes('looking for') || 
        messageLower.includes('build') || messageLower.includes('find') || messageLower.includes('get')) &&
        !messageLower.includes('ask about') && !messageLower.includes('tell me about') &&
        !messageLower.includes('can i ask')) {
      intent = 'talent_inquiry';
    }
  } else if (messageLower.includes('service') || messageLower.includes('help') || messageLower.includes('support')) {
    intent = 'service_inquiry';
  } else if (messageLower.includes('contact') || messageLower.includes('reach') || messageLower.includes('call')) {
    intent = 'contact_inquiry';
  } else if (messageLower.includes('account') || messageLower.includes('signup') || messageLower.includes('register')) {
    intent = 'account_inquiry';
  }
  
  // Determine conversation stage
  let stage = 'initial';
  if (conversationHistory.length === 0 || (!message || message.trim() === '')) {
    stage = 'greeting';
  } else if (conversationHistory.length < 3) {
    stage = 'exploration';
  } else if (conversationHistory.length < 6) {
    stage = 'engagement';
  } else {
    stage = 'deep_discussion';
  }
  
  // Extract key topics
  const topics = [];
  if (fullConversation.includes('candidate') || fullConversation.includes('applicant')) topics.push('candidate_analysis');
  if (fullConversation.includes('real estate')) topics.push('real_estate');
  if (fullConversation.includes('construction')) topics.push('construction');
  if (fullConversation.includes('engineering')) topics.push('engineering');
  if (fullConversation.includes('marketing')) topics.push('marketing');
  if (fullConversation.includes('finance') || fullConversation.includes('accounting')) topics.push('finance');
  if (fullConversation.includes('virtual assistant') || fullConversation.includes('va')) topics.push('virtual_assistant');
  if (fullConversation.includes('outsourcing')) topics.push('outsourcing');
  if (fullConversation.includes('team building')) topics.push('team_building');
  
  // Determine urgency level
  let urgency = 'low';
  if (messageLower.includes('urgent') || messageLower.includes('asap') || messageLower.includes('immediately') || messageLower.includes('quickly')) {
    urgency = 'high';
  } else if (messageLower.includes('soon') || messageLower.includes('fast') || messageLower.includes('quick')) {
    urgency = 'medium';
  }
  
  // Suggest actions based on conversation analysis - only show modals for specific requests
  const suggestedActions = [];
  
  // Only suggest pricing calculator for specific pricing/quote requests
  if ((fullConversation.includes('pricing') || fullConversation.includes('cost') || fullConversation.includes('quote') || fullConversation.includes('estimate')) && 
      (fullConversation.includes('get') || fullConversation.includes('calculate') || fullConversation.includes('see') || fullConversation.includes('show'))) {
    suggestedActions.push('pricing_calculator_modal');
  }
  
  // Only suggest contact form for specific contact requests
  if ((fullConversation.includes('contact') || fullConversation.includes('reach') || fullConversation.includes('get in touch') || fullConversation.includes('speak to')) && 
      (fullConversation.includes('form') || fullConversation.includes('message') || fullConversation.includes('send'))) {
    suggestedActions.push('contact_form_modal');
  }
  
  // Only suggest quote details if user has quotes and asks to see them
  if (fullConversation.includes('my quotes') || fullConversation.includes('view quotes') || fullConversation.includes('see quotes') || 
      (fullConversation.includes('quote') && (fullConversation.includes('my') || fullConversation.includes('view') || fullConversation.includes('see')))) {
    if (userData && userData.totalQuotes > 0) {
      suggestedActions.push('quote_details_modal');
    }
  }
  
  // Only suggest urgent contact for urgent requests
  if (urgency === 'high' && (fullConversation.includes('urgent') || fullConversation.includes('asap') || fullConversation.includes('immediately'))) {
    suggestedActions.push('urgent_contact_modal');
  }
  
  // Only suggest pricing calculator for specific talent/hiring requests (not simple greetings)
  const simpleGreetings = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy', 'greetings'];
  const isSimpleGreeting = simpleGreetings.some(greeting => fullConversation.toLowerCase().trim() === greeting);
  
  // Check for team/talent/hiring requests
  const hasTeamKeywords = fullConversation.includes('team') || fullConversation.includes('staff') || fullConversation.includes('employee') || fullConversation.includes('candidate');
  const hasActionKeywords = fullConversation.includes('create') || fullConversation.includes('build') || fullConversation.includes('hire') || fullConversation.includes('find') || fullConversation.includes('recruit') || fullConversation.includes('talent');
  
  if (!isSimpleGreeting && hasTeamKeywords && hasActionKeywords) {
    suggestedActions.push('pricing_calculator_modal');
  }
  
  // Only suggest demo for specific demo requests
  if ((fullConversation.includes('demo') || fullConversation.includes('show me') || fullConversation.includes('example') || fullConversation.includes('demonstration')) && 
      (fullConversation.includes('see') || fullConversation.includes('show') || fullConversation.includes('schedule') || fullConversation.includes('book'))) {
    suggestedActions.push('demo_modal');
  }
  
  // Suggest dynamic forms for more conversational requests
  if ((fullConversation.includes('pricing') || fullConversation.includes('cost') || fullConversation.includes('budget')) && 
      (fullConversation.includes('tell me') || fullConversation.includes('help me') || fullConversation.includes('need'))) {
    suggestedActions.push('pricing_form_modal');
  }
  
  if ((fullConversation.includes('interview') || fullConversation.includes('meet') || fullConversation.includes('schedule')) && 
      (fullConversation.includes('candidate') || fullConversation.includes('person') || fullConversation.includes('someone'))) {
    suggestedActions.push('interview_form_modal');
  }
  
  if ((fullConversation.includes('demo') || fullConversation.includes('show') || fullConversation.includes('presentation')) && 
      (fullConversation.includes('request') || fullConversation.includes('schedule') || fullConversation.includes('book'))) {
    suggestedActions.push('demo_form_modal');
  }
  
  return {
    intent,
    stage,
    topics,
    urgency,
    suggestedActions
  };
}

// Simple in-memory rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10; // 10 requests per minute per IP

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const now = Date.now();
    const rateLimitKey = clientIP;
    
    const rateLimitData = rateLimitMap.get(rateLimitKey);
    if (rateLimitData) {
      if (now < rateLimitData.resetTime) {
        if (rateLimitData.count >= RATE_LIMIT_MAX_REQUESTS) {
          return NextResponse.json(
            { error: 'Rate limit exceeded. Please try again later.' },
            { status: 429 }
          );
        }
        rateLimitData.count++;
      } else {
        rateLimitMap.set(rateLimitKey, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
      }
    } else {
      rateLimitMap.set(rateLimitKey, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    }

    // Check if API key is available (without logging sensitive information)
    const hasApiKey = !!process.env.ANTHROPIC_API_KEY;
    
    // Validate request method
    if (request.method !== 'POST') {
      return NextResponse.json(
        { error: 'Method not allowed' },
        { status: 405 }
      );
    }

    // Parse and validate request body
    let requestBody;
    try {
      requestBody = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    const { message, conversationHistory, userId }: { message: string; conversationHistory: Array<{ role: string; content: string }>; userId?: string } = requestBody;

    // Validate required fields - allow empty messages for initial greetings
    if (typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message must be a string' },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length > 4000) {
      return NextResponse.json(
        { error: 'Message too long. Please keep it under 4000 characters.' },
        { status: 400 }
      );
    }

    // Validate conversation history
    if (!Array.isArray(conversationHistory)) {
      return NextResponse.json(
        { error: 'Conversation history must be an array' },
        { status: 400 }
      );
    }

    // 🔍 DEBUG: Log incoming request
    console.log('🔍 MAYA DEBUG - Incoming message:', {
      message: message.substring(0, 100),
      userId: userId,
      hasConversationHistory: conversationHistory.length > 0
    });

    // Check if API key is available
    if (!hasApiKey) {
      console.error('API key not configured');
      return NextResponse.json(
        { error: 'Service temporarily unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    // Initialize Anthropic client
    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    // Prepare conversation context for Claude
    const messages = conversationHistory.map(msg => ({
      role: (msg.role === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
      content: msg.content
    }));

    // Add the current user message (or a greeting if empty)
    messages.push({
      role: 'user' as const,
      content: message || 'hello'
    });

    // 🎯 ALWAYS FETCH REAL CANDIDATES from BPOC database (regardless of user status)
    let allCandidates = [];
    try {
      const bpocUsers = await fetchBPOCUsersFromDatabase();
      // Map BPOC database fields to match expected format - GET ALL CANDIDATES (no limit)
      allCandidates = bpocUsers
        .filter((u: any) => u.work_status_completed === true)
        .sort((a: any, b: any) => (b.overall_score || 0) - (a.overall_score || 0))
        // NO .slice() - Maya gets access to ALL candidates!
        .map((u: any) => ({
          first_name: u.first_name,
          last_name: u.last_name,
          full_name: u.full_name || `${u.first_name} ${u.last_name}`,
          position: u.position,
          current_position: u.current_position,
          location: u.location,
          skills_snapshot: u.skills_snapshot || [],
          expected_salary: u.expected_salary,
          overall_score: u.overall_score,
          user_id: u.user_id
        }));
      console.log(`🎯 MAYA HAS ACCESS TO ALL ${allCandidates.length} CANDIDATES FROM BPOC!`);
    } catch (error) {
      console.error('❌ Error fetching candidates from BPOC database:', error);
      allCandidates = []; // Fallback to empty array
    }

    // Fetch user data for personalization if userId is provided
    let userData = null;
    if (userId) {
      try {
        const supabase = createClient();
        
        // Fetch user data
        const { data: user, error: userError } = await supabase
          .from('users')
          .select('*')
          .eq('user_id', userId)
          .single();

        if (userError && userError.code !== 'PGRST116') {
          console.error('Error fetching user:', userError);
        } else if (user) {
          // Fetch user's pricing quotes WITH ROLES (for role-aware conversations)
          const { data: quotes, error: quotesError } = await supabase
            .from('pricing_quotes')
            .select(`
              *,
              pricingQuoteRoles:pricing_quote_roles(
                role_title,
                role_description,
                experience_level,
                workspace_type,
                monthly_cost,
                total_cost
              )
            `)
            .eq('user_id', userId)
            .order('quote_timestamp', { ascending: false })
            .limit(3); // Last 3 quotes for context

          if (quotesError) {
            console.error('Error fetching quotes:', quotesError);
          }

          // Fetch lead progress for funnel awareness
          const { data: leadProgress, error: progressError } = await supabase
            .from('lead_progress')
            .select('*')
            .eq('user_id', userId)
            .maybeSingle();

          if (progressError && progressError.code !== 'PGRST116') {
            console.error('Error fetching lead progress:', progressError);
          }

          // Fetch page journey for interest awareness (last 10 pages)
          const { data: pageJourney, error: journeyError } = await supabase
            .from('user_page_visits')
            .select('page_path, visit_timestamp, time_spent_seconds')
            .eq('user_id', userId)
            .order('visit_timestamp', { ascending: false })
            .limit(10);

          if (journeyError) {
            console.error('Error fetching page journey:', journeyError);
          }

          // Fetch recent page visits for activity tracking (keep for backward compat)
          const { data: pageVisits, error: visitsError } = await supabase
            .from('user_page_visits')
            .select('*')
            .eq('user_id', userId)
            .order('visit_timestamp', { ascending: false })
            .limit(5);

          if (visitsError) {
            console.error('Error fetching page visits:', visitsError);
          }

          // Fetch past conversations for memory
          const { data: pastConversations, error: convError } = await supabase
            .from('conversations')
            .select(`
              id,
              title,
              created_at,
              updated_at,
              context_data
            `)
            .eq('user_id', userId)
            .order('created_at', { ascending: false })
            .limit(5);

          if (convError && convError.code !== 'PGRST116') {
            console.error('Error fetching past conversations:', convError);
          }

          // Determine user status and interests
          const isAnonymous = user.user_type === 'Anonymous';
          const isRegular = user.user_type === 'Regular';
          const hasQuotes = quotes && quotes.length > 0;
          const hasContactInfo = !!(user.first_name || user.last_name || user.email);
          const hasCompany = !!user.company;
          const hasIndustry = !!(user.industry_name || user.industry);

          // Analyze user interests based on data
          const interests = [];
          if (user.industry) interests.push(user.industry);
          if (hasQuotes) interests.push('pricing');
          if (user.company) interests.push('business solutions');

          // Determine what the user might be looking for
          const potentialNeeds = [];
          if (isAnonymous && !hasContactInfo) {
            potentialNeeds.push('contact_information');
          }
          // Only suggest pricing calculator if user has shown interest in pricing/hiring
          // Don't automatically add it for all anonymous users
          if (hasQuotes && !isRegular) {
            potentialNeeds.push('account_creation');
          }
          if (hasCompany && !hasQuotes) {
            potentialNeeds.push('quote_creation');
          }

          userData = {
            user: {
              user_id: user.user_id,
              user_type: user.user_type,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
              company: user.company,
              industry: user.industry_name || user.industry, // Use industry_name field
              desired_team_size: user.desired_team_size, // Add team size
              created_at: user.created_at,
              updated_at: user.updated_at
            },
            quotes: quotes || [],
            totalQuotes: quotes?.length || 0,
            leadProgress: leadProgress || null, // Add lead progress
            pageJourney: pageJourney || [], // Add page journey
            pastConversations: pastConversations || [], // Add past conversations
            recentActivity: pageVisits || [],
            candidates: allCandidates || [], // 🎯 REAL CANDIDATES from database (ALWAYS available)
            leadCaptureStatus: {
              first_lead_capture: user.first_lead_capture || false,
              second_lead_capture: user.second_lead_capture || false,
              third_lead_capture: user.third_lead_capture || false
            },
            userProfile: {
              isAnonymous,
              isRegular,
              hasQuotes,
              hasContactInfo,
              hasCompany,
              hasIndustry,
              interests,
              potentialNeeds
            },
            isNewUser: false
          };

          // 🔍 DEBUG: Log comprehensive context data
          console.log('🔍 MAYA CONTEXT DEBUG:', {
            userId: user.user_id,
            userName: `${user.first_name || ''} ${user.last_name || ''}`.trim() || 'Anonymous',
            company: user.company || 'Not set',
            industry: user.industry_name || user.industry || 'Not set',
            desiredTeamSize: user.desired_team_size || 'Not set',
            email: user.email || 'Not set',
            userType: user.user_type,
            leadProgressStage: leadProgress?.status || 'No stage',
            quotesCount: quotes?.length || 0,
            quotesWithRoles: quotes?.map((q: any) => ({
              quoteId: q.id,
              rolesCount: q.pricingQuoteRoles?.length || 0,
              roles: q.pricingQuoteRoles?.map((r: any) => r.role_title) || []
            })),
            pageJourneyCount: pageJourney?.length || 0,
            pastConversationsCount: pastConversations?.length || 0,
            candidatesCount: allCandidates?.length || 0, // 🎯 NEW: Real candidates ALWAYS available
            topCandidates: allCandidates?.slice(0, 3).map((c: any) => ({
              name: c.full_name || `${c.first_name} ${c.last_name}`,
              position: c.position || c.current_position,
              score: c.overall_score
            })),
            leadCaptureFlags: {
              first: user.first_lead_capture || false,
              second: user.second_lead_capture || false,
              third: user.third_lead_capture || false
            },
            userProfile: {
              isAnonymous,
              isRegular,
              hasQuotes,
              hasContactInfo,
              hasCompany,
              hasIndustry
            }
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    // 🎯 IF NO USER DATA, STILL PROVIDE CANDIDATES (for anonymous users)
    if (!userData && allCandidates.length > 0) {
      userData = {
        user: {
          user_id: userId,
          user_type: 'Anonymous',
          first_name: null,
          last_name: null,
          email: null,
          company: null,
          industry: null,
          desired_team_size: null
        },
        quotes: [],
        totalQuotes: 0,
        leadProgress: null,
        pageJourney: [],
        pastConversations: [],
        recentActivity: [],
        candidates: allCandidates, // 🎯 CANDIDATES AVAILABLE EVEN FOR ANONYMOUS USERS!
        leadCaptureStatus: {
          first_lead_capture: false,
          second_lead_capture: false,
          third_lead_capture: false
        },
        userProfile: {
          isAnonymous: true,
          isRegular: false,
          hasQuotes: false,
          hasContactInfo: false,
          hasCompany: false,
          hasIndustry: false,
          interests: [],
          potentialNeeds: []
        },
        isNewUser: true
      };
      console.log(`🎯 ANONYMOUS USER - Maya still has access to ${allCandidates.length} candidates!`);
    }

    // Search knowledge base for relevant information (skip for simple greetings and empty messages)
    let relevantKnowledge = null;
    const messageLower = (message || '').toLowerCase().trim();
    const simpleGreetings = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy', 'greetings'];
    
    if (message && !simpleGreetings.includes(messageLower)) {
      try {
        // 🎯 TRY VECTOR SEARCH FIRST (semantic understanding)
        const { searchKnowledgeWithVector } = await import('@/lib/knowledge-base');
        const vectorResults = await searchKnowledgeWithVector(message, {
          matchThreshold: 0.75,
          matchCount: 3
        });
        
        if (vectorResults && vectorResults.length > 0) {
          console.log(`🔍 Vector search found ${vectorResults.length} relevant articles (similarity > 0.75)`);
          // Convert vector results to KnowledgeItem format
          relevantKnowledge = vectorResults.map(result => ({
            id: result.id,
            title: result.title,
            content: result.content,
            url: result.url,
            keywords: [],
            category: 'service' as const
          }));
        } else {
          console.log('🔍 Vector search found no results, using keyword search fallback');
          relevantKnowledge = searchKnowledge(message);
        }
      } catch (error) {
        // Fallback to traditional keyword search if vector search fails
        console.log('⚠️ Vector search unavailable, using keyword search:', error);
        relevantKnowledge = searchKnowledge(message);
      }
    }
    
    // Also search for specific trigger phrases that should always include links
    const triggerPhrases = [
      { phrase: 'talent pool', knowledgeId: 'talent-pool' },
      { phrase: 'team location', knowledgeId: 'team-location' },
      { phrase: 'where are you located', knowledgeId: 'team-location' },
      { phrase: 'hire team', knowledgeId: 'hire-team' },
      { phrase: 'case studies', knowledgeId: 'case-studies' },
      { phrase: 'testimonials', knowledgeId: 'testimonials' },
      { phrase: 'contact', knowledgeId: 'contact-us' },
      { phrase: 'pricing', knowledgeId: 'pricing-overview' },
      { phrase: 'how it works', knowledgeId: 'how-it-works' },
      { phrase: 'virtual assistant', knowledgeId: 'virtual-assistant' },
      { phrase: 'real estate virtual assistant', knowledgeId: 'real-estate-va' },
      { phrase: 'property management assistant', knowledgeId: 'property-management-va' },
      { phrase: 'customer service', knowledgeId: 'customer-service' },
      { phrase: 'engineering support', knowledgeId: 'engineering-support' },
      { phrase: 'marketing team', knowledgeId: 'marketing-team' },
      { phrase: 'finance', knowledgeId: 'finance-accounting' },
      { phrase: 'accounting', knowledgeId: 'finance-accounting' }
    ];
    
    // Add specific knowledge items based on trigger phrases
    const messageLowerForTriggers = message.toLowerCase();
    const triggeredKnowledge = triggerPhrases
      .filter(trigger => messageLowerForTriggers.includes(trigger.phrase))
      .map(trigger => knowledgeBase.find(item => item.id === trigger.knowledgeId))
      .filter(Boolean);
    
    // Combine search results with triggered knowledge, removing duplicates
    const allRelevantKnowledge = relevantKnowledge ? [...relevantKnowledge] : [];
    triggeredKnowledge.forEach(item => {
      if (item && !allRelevantKnowledge.find(existing => existing.id === item.id)) {
        allRelevantKnowledge.push(item);
      }
    });
    
  // Analyze conversation context and user intent
  const conversationAnalysis = analyzeConversation(message || 'greeting', conversationHistory, userData);
  console.log('🔍 Conversation Analysis:', {
    message: message || 'greeting',
    intent: conversationAnalysis.intent,
    stage: conversationAnalysis.stage,
    topics: conversationAnalysis.topics
  });
  
  // Create personalized context based on user data and conversation analysis
  let personalizedContext = '';
  const suggestedComponents = [];
  
  // Enhanced AI analysis for anonymous users
  let shouldRequestContactInfo = false;
  let contactRequestReason = '';
  let statusBasedQuestion = '';
  
  // Check for anonymous users without userData (new visitors)
  if (!userData || userData.isNewUser) {
    // For new/anonymous users, check conversation patterns
    if (conversationHistory.length >= 2) {
      shouldRequestContactInfo = true;
      contactRequestReason = 'new_user_engagement';
    }
    
    // Check if user is asking for specific services
    if (conversationAnalysis.intent === 'pricing_inquiry' || 
        conversationAnalysis.intent === 'talent_inquiry' || 
        conversationAnalysis.intent === 'service_inquiry') {
      shouldRequestContactInfo = true;
      contactRequestReason = 'service_inquiry_anonymous';
    }
  }
  
  if (userData && !userData.isNewUser) {
    const { user, quotes, leadCaptureStatus, userProfile } = userData;
    
    console.log('🔍 User Data Debug:', {
      userType: user.user_type,
      hasContactInfo: userProfile.hasContactInfo,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      shouldRequestContactInfo: shouldRequestContactInfo
    });
    
    // Don't ask for contact info immediately - only when user shows interest
    // This will be handled by the specific interest-based triggers below
    
    // Don't ask for contact info from authenticated users (Regular/Admin)
    if (user.user_type === 'Regular' || user.user_type === 'Admin') {
      shouldRequestContactInfo = false;
      contactRequestReason = 'authenticated_user_has_contact_info';
    }
    
    // Check if user has already provided contact info in current conversation
    const hasProvidedContactInConversation = conversationHistory.some(msg => 
      msg.role === 'user' && (
        msg.content.toLowerCase().includes('my name is') ||
        msg.content.toLowerCase().includes('i am') ||
        msg.content.toLowerCase().includes('email') ||
        msg.content.toLowerCase().includes('@')
      )
    );
    
    // Check if user has been engaging with business-related topics (3+ messages)
    const businessTopics = conversationHistory.some(msg => 
      msg.role === 'user' && (
        msg.content.toLowerCase().includes('hire') ||
        msg.content.toLowerCase().includes('team') ||
        msg.content.toLowerCase().includes('talent') ||
        msg.content.toLowerCase().includes('quote') ||
        msg.content.toLowerCase().includes('pricing') ||
        msg.content.toLowerCase().includes('cost') ||
        msg.content.toLowerCase().includes('service') ||
        msg.content.toLowerCase().includes('business') ||
        msg.content.toLowerCase().includes('company')
      )
    );
    
    if (conversationHistory.length >= 3 && businessTopics && !userProfile.hasContactInfo && !hasProvidedContactInConversation) {
      shouldRequestContactInfo = true;
      contactRequestReason = 'engaged_user_missing_contact';
      console.log('🎯 Triggering contact request: engaged_user_missing_contact');
    }
    
    // Check if user is asking for quotes but hasn't provided contact info
    // Now we check both database contact info AND conversation history
    if ((conversationAnalysis.intent === 'pricing_inquiry' || conversationAnalysis.intent === 'talent_inquiry') && 
        !userProfile.hasContactInfo && !hasProvidedContactInConversation) {
      shouldRequestContactInfo = true;
      contactRequestReason = 'quote_request_missing_contact';
      console.log('🎯 Triggering contact request: quote_request_missing_contact');
    }
    
    // Determine status-based question
    const hasCompany = user.company && user.company.trim() !== '';
    const hasIndustry = user.industry && user.industry.trim() !== '';
    const isReturningUser = quotes.length > 0 || (userData.recentActivity && userData.recentActivity.length > 0);
    
    if (hasCompany && hasIndustry) {
      statusBasedQuestion = "Since you're from an established company, would you like me to show you our talent pool to find the right team members for your business needs?";
    } else if (hasCompany && !hasIndustry) {
      statusBasedQuestion = "I'd love to help you find the right talent for your company. What industry does your business operate in?";
    } else if (!hasCompany && hasIndustry) {
      statusBasedQuestion = `Great! Since you're interested in our services, would you like to see our pricing calculator to get a personalized quote for your ${user.industry} needs?`;
    } else if (isReturningUser) {
      statusBasedQuestion = "Welcome back! I can see you've been here before. What would you like to explore today - our talent pool, pricing calculator, or something else?";
    } else {
      statusBasedQuestion = "Great to meet you! Let me help you discover what ShoreAgents can do for your business. Would you like to start with our talent pool or get a pricing quote?";
    }

    // Helper function to capitalize names
    const capitalizeName = (name: string): string => {
      return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
    }
    
    // Create personalized greeting context with capitalized names
    const capitalizedFirstName = user.first_name ? capitalizeName(user.first_name) : user.first_name
    const capitalizedLastName = user.last_name ? capitalizeName(user.last_name) : user.last_name
    const fullName = user.first_name ? `${capitalizedFirstName} ${capitalizedLastName || ''}`.trim() : 'Not provided';
    console.log('🔍 Personalized Context - User Name:', fullName);
    console.log('🔍 First Name:', user.first_name, 'Last Name:', user.last_name);
    
    // Add specific greeting instruction for users with names
    const greetingInstruction = user.first_name ? `\n\nGREETING INSTRUCTION: Since this user has a name (${fullName}), you MUST start your response with a personalized greeting like "Hello ${capitalizedFirstName}!" or "Hi ${capitalizedFirstName}!"` : '';
    
    personalizedContext = `\n\nPERSONALIZED USER CONTEXT:
- User Type: ${user.user_type}
- Name: ${fullName}
- Company: ${user.company || 'Not provided'}
- Industry: ${user.industry || 'Not specified'}
- Total Quotes: ${quotes.length}
- Lead Capture Status: First=${leadCaptureStatus.first_lead_capture}, Second=${leadCaptureStatus.second_lead_capture}, Third=${leadCaptureStatus.third_lead_capture}
- Has Contact Info: ${userProfile.hasContactInfo}
- Interests: ${userProfile.interests.join(', ') || 'None specified'}
- Potential Needs: ${userProfile.potentialNeeds.join(', ') || 'None identified'}
- Status-Based Question: ${statusBasedQuestion}${greetingInstruction}

CONVERSATION ANALYSIS:
- User Intent: ${conversationAnalysis.intent}
- Conversation Stage: ${conversationAnalysis.stage}
- Key Topics: ${conversationAnalysis.topics.join(', ')}
- Urgency Level: ${conversationAnalysis.urgency}
- Suggested Actions: ${conversationAnalysis.suggestedActions.join(', ')}
- Should Request Contact Info: ${shouldRequestContactInfo}
- Contact Request Reason: ${contactRequestReason}`;
  } else {
    // For new/anonymous users without userData
    personalizedContext = `\n\nANONYMOUS USER CONTEXT:
- User Type: Anonymous/New Visitor
- Has Contact Info: No
- Conversation History Length: ${conversationHistory.length}

CONVERSATION ANALYSIS:
- User Intent: ${conversationAnalysis.intent}
- Conversation Stage: ${conversationAnalysis.stage}
- Key Topics: ${conversationAnalysis.topics.join(', ')}
- Urgency Level: ${conversationAnalysis.urgency}
- Suggested Actions: ${conversationAnalysis.suggestedActions.join(', ')}
- Should Request Contact Info: ${shouldRequestContactInfo}
- Contact Request Reason: ${contactRequestReason}`;
  }

  // Suggest relevant components based on user data and conversation analysis
  if (userData && !userData.isNewUser) {
    const { userProfile, quotes } = userData;
    
    if (conversationAnalysis.suggestedActions.includes('pricing_calculator_modal') || userProfile.potentialNeeds.includes('pricing_calculator') || userProfile.potentialNeeds.includes('quote_creation')) {
      suggestedComponents.push('pricing_calculator_modal');
    }
    if (conversationAnalysis.suggestedActions.includes('signup_modal') || userProfile.potentialNeeds.includes('account_creation')) {
      suggestedComponents.push('signup_modal');
    }
    if (conversationAnalysis.suggestedActions.includes('contact_form_modal') || userProfile.potentialNeeds.includes('contact_information')) {
      suggestedComponents.push('contact_form_modal');
    }
    if (conversationAnalysis.suggestedActions.includes('quote_details_modal') || quotes.length > 0) {
      suggestedComponents.push('quote_details_modal');
    }
    if (conversationAnalysis.suggestedActions.includes('urgent_contact_modal')) {
      suggestedComponents.push('urgent_contact_modal');
    }
    if (conversationAnalysis.suggestedActions.includes('talent_search_modal')) {
      suggestedComponents.push('talent_search_modal');
    }
    if (conversationAnalysis.suggestedActions.includes('demo_modal')) {
      suggestedComponents.push('demo_modal');
    }
  } else {
    // For new users, analyze conversation to suggest components
    if (conversationAnalysis.suggestedActions.includes('pricing_calculator_modal')) {
      suggestedComponents.push('pricing_calculator_modal');
    }
    if (conversationAnalysis.suggestedActions.includes('contact_form_modal')) {
      suggestedComponents.push('contact_form_modal');
    }
    if (conversationAnalysis.suggestedActions.includes('urgent_contact_modal')) {
      suggestedComponents.push('urgent_contact_modal');
    }
    if (conversationAnalysis.suggestedActions.includes('talent_search_modal')) {
      suggestedComponents.push('talent_search_modal');
    }
    if (conversationAnalysis.suggestedActions.includes('demo_modal')) {
      suggestedComponents.push('demo_modal');
    }
  }

  // Check if this is a candidate analysis request
  let candidateAnalysis = null;
  if (conversationAnalysis.intent === 'candidate_analysis') {
    try {
      console.log('🔍 Detected candidate analysis request, fetching candidate data...');
      
      // Extract candidate name from the message - improved pattern matching
      let candidateName = null;
      
      // Try different patterns to extract names
      const patterns = [
        /(?:tell me about|what about|analyze|review|assess)\s+([^?]+)/i,
        /(?:who is|who are)\s+([^?]+)/i,
        /(?:about|regarding)\s+([^?]+)/i
      ];
      
      for (const pattern of patterns) {
        const match = message.match(pattern);
        if (match) {
          candidateName = match[1].trim();
          break;
        }
      }
      
      // If no pattern match, try to extract capitalized words (potential names)
      if (!candidateName) {
        const capitalizedWords = message.match(/[A-Z][a-z]+/g);
        if (capitalizedWords && capitalizedWords.length > 0) {
          candidateName = capitalizedWords.join(' ');
        }
      }
      
      if (candidateName) {
        console.log('🔍 Looking for candidate:', candidateName);
        
        // Call the candidate analysis API
        const analysisResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001'}/api/analyze-candidate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            candidateName: candidateName,
            question: message
          }),
        });
        
        if (analysisResponse.ok) {
          candidateAnalysis = await analysisResponse.json();
          console.log('✅ Candidate analysis retrieved:', candidateAnalysis.candidate?.name);
        } else {
          console.log('⚠️ Candidate analysis failed:', analysisResponse.status);
        }
      }
    } catch (error) {
      console.error('❌ Error fetching candidate analysis:', error);
    }
  }

  // Create system prompt using dynamic configuration
  const knowledgeContext = allRelevantKnowledge.length > 0 
    ? allRelevantKnowledge.map(item => `- ${item.title}: ${item.content}`).join('\n')
    : '';

  // Use simplified AI config to avoid hardcoded responses
  let systemPrompt = userData && userData.user 
    ? SIMPLIFIED_AI_CONFIG.systemPrompts.withPersonalization(userData)
    : SIMPLIFIED_AI_CONFIG.systemPrompts.base;

  // 🔍 DEBUG: Log AI system prompt configuration
  console.log('🔍 MAYA AI PROMPT DEBUG:', {
    hasUserData: !!userData,
    hasPersonalization: !!(userData && userData.user),
    promptLength: systemPrompt.length,
    promptPreview: systemPrompt.substring(0, 500) + '...',
    hasLeadProgress: !!userData?.leadProgress,
    hasQuotes: !!userData?.quotes && userData.quotes.length > 0
  });

  // Add candidate analysis data to system prompt if available
  if (candidateAnalysis && candidateAnalysis.success) {
    systemPrompt += `

CANDIDATE ANALYSIS DATA:
You MUST use ONLY the real candidate data provided below from the BPOC database. DO NOT make up or invent ANY information.

ACTUAL DATA FROM DATABASE:
- CANDIDATE NAME: ${candidateAnalysis.candidate.name}
- POSITION: ${candidateAnalysis.candidate.position || 'Not specified'}
- LOCATION: ${candidateAnalysis.candidate.location || 'Not specified'}
- EXPECTED SALARY: ${candidateAnalysis.candidate.expectedSalary || 'Not specified'}
- OVERALL SCORE: ${candidateAnalysis.candidate.overallScore || 0}
- SKILLS: ${candidateAnalysis.candidate.skills.length > 0 ? candidateAnalysis.candidate.skills.join(', ') : 'No skills listed'}
- EXPERIENCE COUNT: ${candidateAnalysis.candidate.experienceCount} positions

PROFESSIONAL ANALYSIS:
${candidateAnalysis.analysis}

CRITICAL INSTRUCTIONS:
1. Use ONLY the information provided above - DO NOT invent or assume any details
2. If information is missing (like skills or experience), explicitly state "This information is not available in their profile"
3. DO NOT make up years of experience, skills, or qualifications that are not listed above
4. Be honest about gaps in the candidate's profile
5. Base your assessment ONLY on the actual data provided above`;
  }

    // Log request details (without sensitive information)
    console.log('Processing chat request...');
    console.log('Message length:', message.length);
    console.log('Conversation history length:', conversationHistory.length);

    // Call Anthropic API - Using Sonnet 4.5 for better intelligence
    const anthropicResponse = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514', // Upgraded from Haiku to Sonnet 4.5
      max_tokens: 2000, // Increased for better responses
      system: systemPrompt,
      messages: messages,
    });

    console.log('API response received successfully');

    // Extract the response content
    const aiResponse = anthropicResponse.content[0];
    if (aiResponse.type !== 'text') {
      throw new Error('Unexpected response type from Anthropic API');
    }

    // Prepare related content with clickable links
    const relatedContent = allRelevantKnowledge
      .filter(item => item.url) // Only include items with URLs
      .map(item => ({
        title: item.title,
        content: item.content,
        url: item.url
      }));

    // Extract and save lead data from conversation (background)
    if (userId && message) {
      try {
        const extractedData = extractLeadDataFromMessage(message, userData);
        
        // 🔍 DEBUG: Log extraction attempt
        console.log('🔍 MAYA DATA EXTRACTION DEBUG:', {
          userId,
          messageLength: message.length,
          messagePreview: message.substring(0, 100),
          extractedData: extractedData,
          hasData: !!(extractedData && Object.keys(extractedData).length > 0)
        });
        
        if (extractedData && Object.keys(extractedData).length > 0) {
          console.log('🎯 Extracted lead data from conversation:', extractedData);
          
          // Save in background (don't await, let it run async)
          const saveUrl = new URL('/api/chat/save-lead-data', request.url).toString();
          console.log('🔍 MAYA SAVING TO:', saveUrl);
          
          fetch(saveUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              userId,
              ...extractedData
            })
          }).then(res => {
            console.log('✅ Background save response status:', res.status);
            return res.json();
          }).then(data => {
            console.log('✅ Background save result:', data);
          }).catch(err => console.error('❌ Background save error:', err));
        } else {
          console.log('📝 No data extracted from message');
        }
      } catch (extractError) {
        console.error('Data extraction error:', extractError);
        // Don't fail the request if extraction fails
      }
    }

    // Save conversation to database for memory
    if (userId && message) {
      try {
        const supabase = createClient();
        
        // Create or get conversation
        const conversationTitle = message.length > 50 ? message.substring(0, 50) + '...' : message;
        
        // Check if there's an existing conversation from today
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const { data: existingConversation } = await supabase
          .from('conversations')
          .select('id')
          .eq('user_id', userId)
          .gte('created_at', today.toISOString())
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle();
        
        let conversationId = existingConversation?.id;
        
        // Create new conversation if none exists today
        if (!conversationId) {
          const { data: newConversation } = await supabase
            .from('conversations')
            .insert({
              user_id: userId,
              title: conversationTitle,
              created_at: new Date().toISOString()
            })
            .select('id')
            .single();
          
          conversationId = newConversation?.id;
        }
        
        // Save user message
        if (conversationId) {
          await supabase
            .from('messages')
            .insert({
              conversation_id: conversationId,
              user_id: userId,
              role: 'user',
              content: message,
              created_at: new Date().toISOString()
            });
          
          // Save AI response
          await supabase
            .from('messages')
            .insert({
              conversation_id: conversationId,
              user_id: userId,
              role: 'assistant',
              content: aiResponse.text,
              created_at: new Date().toISOString()
            });
          
          console.log('💾 Conversation saved to database:', conversationId);
          
          // 🧠 SAVE CONVERSATION MEMORY (AI Agent Phase 2)
          try {
            const { storeMemory } = await import('@/lib/embedding-service');
            
            // Extract important information from conversation for memory
            const conversationContext = `User: ${message}\nMaya: ${aiResponse.text}`;
            
            // Determine importance score based on content
            let importanceScore = 5; // Default
            
            // Higher importance for conversations with user data
            if (userData && (userData.user.first_name || userData.user.company)) {
              importanceScore = 8;
            }
            
            // Higher importance for conversations about quotes or candidates
            if (messageLower.includes('quote') || messageLower.includes('candidate') || 
                messageLower.includes('hire') || messageLower.includes('team')) {
              importanceScore = Math.max(importanceScore, 7);
            }
            
            // Store as buffer memory (recent conversation context)
            await storeMemory(
              userId,
              conversationId,
              'buffer',
              {
                user_message: message,
                assistant_response: aiResponse.text,
                context: conversationAnalysis
              },
              {
                importanceScore,
                expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
              }
            );
            
            // If user provided personal info, store as entity memory (permanent)
            if (userData && (userData.user.first_name || userData.user.last_name || userData.user.company)) {
              await storeMemory(
                userId,
                conversationId,
                'entity',
                {
                  name: `${userData.user.first_name || ''} ${userData.user.last_name || ''}`.trim(),
                  company: userData.user.company,
                  industry: userData.user.industry_name,
                  has_quotes: userData.totalQuotes > 0
                },
                {
                  importanceScore: 10, // Very important - user identity
                  // No expiry - keep forever
                }
              );
            }
            
            console.log(`🧠 Memory saved: importance=${importanceScore}`);
          } catch (memoryError) {
            console.error('⚠️ Memory save failed (non-critical):', memoryError);
            // Don't fail the request if memory save fails
          }
        }
      } catch (convSaveError) {
        console.error('Error saving conversation:', convSaveError);
        // Don't fail the request if conversation save fails
      }
    }

    const nextResponse = NextResponse.json({
      content: aiResponse.text,
      components: relatedContent,
      suggestedComponents: suggestedComponents,
      userData: userData ? {
        userType: userData.user.user_type,
        hasQuotes: userData.totalQuotes > 0,
        leadCaptureStatus: userData.leadCaptureStatus
      } : null
    });

    // Add security headers
    nextResponse.headers.set('X-Content-Type-Options', 'nosniff');
    nextResponse.headers.set('X-Frame-Options', 'DENY');
    nextResponse.headers.set('X-XSS-Protection', '1; mode=block');
    nextResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    return nextResponse;

  } catch (error) {
    console.error('Chat API error occurred');
    
    // Log error details without exposing sensitive information
    if (error instanceof Error) {
      console.error('Error type:', error.constructor.name);
      // Only log error message if it doesn't contain sensitive information
      if (!error.message.toLowerCase().includes('key') && !error.message.toLowerCase().includes('token')) {
        console.error('Error message:', error.message);
      }
    }
    
    // Handle specific error types without exposing details
    if (error instanceof Error) {
      if (error.message.includes('401') || error.message.includes('unauthorized')) {
        return NextResponse.json(
          { error: 'Service temporarily unavailable. Please try again later.' },
          { status: 503 }
        );
      }
      
      if (error.message.includes('429') || error.message.includes('rate limit')) {
        return NextResponse.json(
          { error: 'Rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      }
    }
    
    // Generic error response
    return NextResponse.json(
      { error: 'Service temporarily unavailable. Please try again later.' },
      { status: 503 }
    );
  }
}
