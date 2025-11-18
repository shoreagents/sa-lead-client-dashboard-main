import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})
const MAX_SUGGESTIONS = 5;

export async function POST(request: NextRequest) {
  let query = '';
  let type = 'role';
  let industry = '';
  let roleTitle = '';
  let currency = 'USD'; // Default to USD
  
  try {
    // Check if API key is available
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('ANTHROPIC_API_KEY is not set')
      return NextResponse.json({ 
        error: 'AI autocomplete requires ANTHROPIC_API_KEY to be configured'
      }, { status: 500 })
    }

    const requestData = await request.json()
    query = requestData.query || '';
    type = requestData.type || 'role';
    industry = requestData.industry || '';
    roleTitle = requestData.roleTitle || '';
    currency = requestData.currency || 'USD';

    console.log('🔍 Autocomplete API called:', { query, type, industry, roleTitle, currency });

    if (!query || query.length < 2) {
      console.log('📝 Query too short, returning empty array');
      return NextResponse.json([])
    }

    // Handle different types of autocomplete requests
    let prompt = '';
    
    if (type === 'industry') {
      // Determine location-specific context and terminology based on currency
      const locationContext = currency === 'AUD'
        ? `🇦🇺 AUSTRALIAN MARKET - USE AUSTRALIAN TERMINOLOGY ONLY:

CRITICAL: Use Australian business terms, NOT American terms!

Real Estate:
- ✅ "Real Estate Agency" (NOT "Real Estate Brokerage")
- ✅ "Property Management"
- ✅ "Strata Management"
- ✅ "Commercial Property"

Construction:
- ✅ "Building & Construction"
- ✅ "Trades & Services"
- ✅ "Project Management"

Other AU-specific industries:
- Mining & Resources
- Agriculture & Farming
- Hospitality & Tourism
- Retail & Shopping Centres
- Manufacturing & Warehousing
- Financial Services & Superannuation
- Healthcare & Aged Care`
        : currency === 'GBP'
        ? `🇬🇧 BRITISH/UK MARKET - USE BRITISH TERMINOLOGY ONLY:

CRITICAL: Use British business terms, NOT American terms!

Real Estate:
- ✅ "Estate Agency" (NOT "Real Estate Brokerage")
- ✅ "Property Management"
- ✅ "Lettings Agency"
- ✅ "Commercial Property"

Construction:
- ✅ "Building Services"
- ✅ "Construction & Engineering"

Other UK-specific industries:
- Financial Services (Banking, Insurance)
- Retail & High Street
- Manufacturing & Engineering
- Healthcare & NHS Services
- Hospitality & Tourism
- Legal Services & Solicitors`
        : currency === 'NZD'
        ? `🇳🇿 NEW ZEALAND MARKET - USE NZ TERMINOLOGY:

Real Estate:
- ✅ "Real Estate Agency"
- ✅ "Property Management"

Other NZ-specific industries:
- Agriculture & Primary Industries
- Tourism & Hospitality
- Technology & Innovation
- Dairy & Farming
- Forestry & Horticulture`
        : currency === 'PHP'
        ? `🇵🇭 PHILIPPINES MARKET - USE FILIPINO BUSINESS TERMS:

Industries:
- Business Process Outsourcing (BPO)
- Call Centers & Customer Service
- Real Estate Development
- Retail & Shopping Malls
- Banking & Finance
- Information Technology
- Manufacturing & Export`
        : `🌍 INTERNATIONAL/US MARKET - USE STANDARD TERMINOLOGY:

Real Estate:
- ✅ "Real Estate Brokerage"
- ✅ "Property Management"
- ✅ "Commercial Real Estate"

Other industries:
- Technology & Software
- Healthcare & Medical
- Finance & Banking
- Marketing & Advertising
- Manufacturing & Logistics`;

      prompt = `You are an AI assistant helping users specify their business industry for OFFSHORE STAFFING.

${locationContext}

USER INPUT: "${query}"
USER CURRENCY: ${currency}

CRITICAL INSTRUCTIONS:
1. **ONLY use terminology from the ${currency} market context above**
2. **NEVER mix American terms into non-US markets**
3. If user types "Real Estate" or similar:
   - AUD/NZD: Suggest "Real Estate Agency", "Property Management"
   - GBP: Suggest "Estate Agency", "Lettings Agency"  
   - USD: Suggest "Real Estate Brokerage"
   - NEVER suggest "Brokerage" to AU/UK/NZ users!

4. Match the user's likely industry based on their input
5. Use professional, commonly-used business terms for that region
6. Suggest ${MAX_SUGGESTIONS} specific, relevant industries

Format your response as a JSON array of objects with "title", "description", and "level" fields:
[
  {"title": "Real Estate Agency", "description": "Facilitating property sales, leasing, and management", "level": "Industry"},
  {"title": "Property Management", "description": "Managing residential and commercial properties", "level": "Industry"}
]

Only return the JSON array, no other text.`;
    } else if (type === 'role') {
      prompt = `You are an AI assistant helping users find REMOTE/VIRTUAL job roles for offshore Filipino team members.

CRITICAL REQUIREMENTS:
- ONLY suggest roles that can be done 100% REMOTELY/VIRTUALLY
- NO physical trades (plumber, electrician, mechanic, etc.)
- NO roles requiring on-site presence (security guard, delivery driver, etc.)
- NO roles requiring physical labor or equipment operation
- These are VIRTUAL offshore staff working from the Philippines

Based on the user's input "${query}"${industry ? ` in the ${industry} industry` : ''}, suggest ${MAX_SUGGESTIONS} VIRTUAL job roles.

Examples of GOOD virtual roles:
- Software Developer, Frontend Developer, Backend Developer
- Marketing Manager, Content Writer, Social Media Specialist
- Customer Service Representative, Sales Representative (phone/email/chat)
- Accountant, Bookkeeper, Financial Analyst
- Virtual Assistant, Administrative Assistant, Executive Assistant
- Project Manager, Operations Manager, Business Analyst
- Graphic Designer, UI/UX Designer, Web Designer
- Data Analyst, Research Analyst, Data Entry Specialist
- HR Specialist, Recruiter, Talent Acquisition Specialist
- Property Manager (virtual), Leasing Agent (virtual)

Examples of BAD roles (DO NOT SUGGEST):
- Maintenance Technician, Electrician, Plumber
- Security Guard, Warehouse Worker, Delivery Driver
- Chef, Barista, Retail Assistant
- Construction Worker, Tradesman

Based on the input "${query}"${industry ? ` in the ${industry} industry` : ''}, suggest ${MAX_SUGGESTIONS} VIRTUAL/REMOTE roles only. Make the suggestions:
1. Specific and professional
2. Can be done 100% remotely/virtually
3. Suitable for offshore Filipino staff working from home
4. Relevant to the input provided
5. Different from each other but related

Format your response as a JSON array of objects with "title", "description", and "level" fields:
[
  {"title": "Virtual Assistant", "description": "Provides remote administrative support via email, phone, and online tools", "level": "mid"},
  {"title": "Customer Service Representative", "description": "Handles customer inquiries remotely via phone, email, and chat", "level": "mid"}
]

Only return the JSON array, no other text.`;
    } else if (type === 'description') {
      // Determine language style based on currency
      const languageStyle = currency === 'AUD' 
        ? 'Australian English (use Australian terminology and spelling: e.g., "organisation" not "organization", "centre" not "center", "analyse" not "analyze")'
        : currency === 'GBP'
        ? 'British English (use British terminology and spelling: e.g., "organisation" not "organization", "centre" not "center", "analyse" not "analyze")'
        : 'American English (use American terminology and spelling)';
      
      prompt = `You are an AI assistant helping users generate job descriptions for REMOTE/VIRTUAL offshore Filipino team members.

CRITICAL CONTEXT:
- This is a REMOTE/VIRTUAL role for offshore staff working from the Philippines
- The staff member will work from home in the Philippines
- All work is done via computer, phone, email, and online collaboration tools
- NO physical presence required
- NO on-site work

Language: Use ${languageStyle}

Based on the role "${roleTitle}"${industry ? ` in the ${industry} industry` : ''}, generate a comprehensive job description for a VIRTUAL/REMOTE position.

The job description should include:
1. A brief overview emphasizing this is a remote/virtual role
2. Key responsibilities (all done virtually/remotely)
3. Required skills (must include remote work skills: communication, self-management, tech-savvy)
4. Qualifications and experience expectations
5. Remote work requirements (stable internet, quiet workspace, computer equipment)
6. Any industry-specific requirements that can be fulfilled remotely

Make the description:
- Professional and detailed
- Emphasize virtual/remote nature of the work
- Specific to the role and industry
- Clear about remote work expectations
- Use ${languageStyle}
- Appropriate for offshore Filipino staff working from home

Return only the job description text, no other formatting or titles.`;
    } else {
      // Default to role suggestions
      prompt = `You are an AI assistant helping users specify job roles and positions. Based on the user's input "${query}", suggest ${MAX_SUGGESTIONS} relevant job roles or positions.

Format your response as a JSON array of objects with "title", "description", and "level" fields:
[
  {"title": "Software Developer", "description": "Develops software applications and systems", "level": "mid"}
]

Only return the JSON array, no other text.`;
    }

    const response = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: type === 'description' ? 1000 : 500,
      temperature: 0.3,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    })

    if (!response || !response.content || response.content.length === 0) {
      throw new Error('Empty response from Anthropic API')
    }

    const content = response.content[0]
    if (content.type !== 'text') {
      throw new Error('Unexpected response type from Anthropic')
    }

    // Handle different response types
    if (type === 'description') {
      // For descriptions, return the text directly
      console.log('📝 Returning description:', content.text);
      return NextResponse.json(content.text)
    } else {
      // For suggestions, parse the JSON response
      let suggestions
      try {
        console.log('🤖 Raw AI response:', content.text);
        suggestions = JSON.parse(content.text)
        console.log('✅ Parsed AI suggestions:', suggestions);
      } catch (parseError) {
        console.error('❌ Failed to parse AI suggestions:', parseError)
        console.error('❌ Raw response that failed to parse:', content.text);
        
        // Try to extract JSON from the response if it's wrapped in text
        try {
          const jsonMatch = content.text.match(/\[[\s\S]*\]/);
          if (jsonMatch) {
            suggestions = JSON.parse(jsonMatch[0]);
            console.log('✅ Extracted JSON from wrapped response:', suggestions);
          } else {
            throw new Error('No JSON found in response');
          }
        } catch (extractError) {
          console.error('❌ Failed to extract JSON from response:', extractError);
          return NextResponse.json({ 
            error: 'Failed to parse AI response',
            details: extractError instanceof Error ? extractError.message : 'Unknown parsing error'
          }, { status: 500 })
        }
      }

      // Ensure we always return an array
      if (!Array.isArray(suggestions)) {
        console.log('⚠️ Suggestions not an array');
        return NextResponse.json({ 
          error: 'AI returned invalid response format',
          details: 'Expected array but got: ' + typeof suggestions 
        }, { status: 500 })
      }

      console.log('📤 Returning suggestions:', suggestions);
      return NextResponse.json(suggestions)
    }

  } catch (error) {
    console.error('❌ Autocomplete API error:', error)
    
    return NextResponse.json({ 
      error: 'AI autocomplete failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
