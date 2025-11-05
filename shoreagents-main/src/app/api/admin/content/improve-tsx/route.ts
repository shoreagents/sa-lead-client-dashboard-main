import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
})

// Helper function to get a relevant image from Unsplash
async function getUnsplashImage(keywords: string): Promise<string | null> {
  try {
    // Map of common keywords to high-quality, tested Unsplash images
    const imageMap: Record<string, string> = {
      'technology': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=900&fit=crop&q=80',
      'business': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop&q=80',
      'virtual assistant': 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1600&h=900&fit=crop&q=80',
      'ai': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop&q=80',
      'real estate': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop&q=80',
      'property': 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&h=900&fit=crop&q=80',
      'finance': 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1600&h=900&fit=crop&q=80',
      'marketing': 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=1600&h=900&fit=crop&q=80',
      'workspace': 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1600&h=900&fit=crop&q=80',
      'office': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop&q=80',
      'productivity': 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1600&h=900&fit=crop&q=80',
      'computer': 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=1600&h=900&fit=crop&q=80'
    }
    
    // Check if keywords match any predefined categories
    const lowerKeywords = keywords.toLowerCase()
    for (const [key, imageUrl] of Object.entries(imageMap)) {
      if (lowerKeywords.includes(key)) {
        console.log(`✅ Found matching image for keyword: ${key}`)
        return imageUrl
      }
    }
    
    // Unsplash API - Free with attribution
    const accessKey = process.env.UNSPLASH_ACCESS_KEY || 'your_access_key_here'
    
    // If no API key or no match, use default technology image
    if (!accessKey || accessKey === 'your_access_key_here') {
      console.warn('No Unsplash API key found and no keyword match, using default')
      return imageMap['technology']
    }

    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(keywords)}&per_page=1&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch from Unsplash')
    }

    const data = await response.json()
    
    if (data.results && data.results.length > 0) {
      return data.results[0].urls.regular
    }

    // Fallback to default
    return imageMap['technology']
  } catch (error) {
    console.error('Error fetching Unsplash image:', error)
    // Fallback to default technology image
    return 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=900&fit=crop&q=80'
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check if Anthropic API key is configured
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('❌ ANTHROPIC_API_KEY is not configured in environment variables')
      return NextResponse.json(
        { error: 'AI service not configured. Please add ANTHROPIC_API_KEY to your .env file.' },
        { status: 500 }
      )
    }

    const { tsxCode } = await request.json()

    if (!tsxCode || !tsxCode.trim()) {
      return NextResponse.json(
        { error: 'TSX code is required' },
        { status: 400 }
      )
    }

    console.log('📊 Received TSX code for improvement, length:', tsxCode.length, 'characters')

    // Step 1: Analyze the content to extract topic/keywords
    console.log('📊 Analyzing content for topic extraction...')
    const analysisMessage = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 200,
      messages: [
        {
          role: 'user',
          content: `Analyze this TSX blog/article code and extract 2-3 keywords that best describe the main topic for finding a relevant banner image.

TSX Code:
\`\`\`tsx
${tsxCode}
\`\`\`

Return ONLY the keywords separated by commas (e.g., "virtual assistant, technology, business" or "real estate, property, investment").
No explanations, just the keywords.`,
        },
      ],
    })

    const keywords = analysisMessage.content[0].type === 'text' 
      ? analysisMessage.content[0].text.trim() 
      : 'technology, business'

    console.log('✅ Extracted keywords:', keywords)

    // Step 2: Get relevant image from Unsplash
    console.log('🖼️ Fetching relevant banner image from Unsplash...')
    const bannerImageUrl = await getUnsplashImage(keywords)
    console.log('✅ Banner image URL:', bannerImageUrl)

    // Step 3: Call Claude to improve the TSX code with the banner image
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 8000,  // Increased to handle longer components
      messages: [
        {
          role: 'user',
          content: `You are an expert React/TypeScript developer specializing in creating beautiful, accessible, and SEO-friendly blog components.

Improve the following TSX/JSX code by:
1. **Add a hero banner image** - Replace any placeholder/gradient banner with this beautiful, relevant image: ${bannerImageUrl}
   - Use it as the main featured/hero image at the top of the article
   - Apply rounded corners, proper aspect ratio, and responsive sizing
   - Add alt text based on the article topic
2. **Enhancing styling** - Use modern Tailwind CSS utilities, gradients, shadows, and responsive design
3. **Improving accessibility** - Add proper ARIA labels, semantic HTML, keyboard navigation
4. **SEO optimization** - Add proper heading hierarchy (h1, h2, h3), meta descriptions, structured content, proper img alt text
5. **Better UX** - Add smooth transitions, hover effects, better spacing, and visual hierarchy
6. **Code quality** - Clean up the code, remove redundancies, add helpful comments
7. **Brand consistency** - Use lime/green accents (lime-500, lime-600) instead of blue, matching the brand colors

**IMPORTANT - Banner Image Implementation:**
- Find the featured/hero image section (usually near the top after the header)
- Replace any gradient backgrounds or icon placeholders with an actual <img> tag
- Use this EXACT URL: ${bannerImageUrl}
- Add crossOrigin="anonymous" to handle CORS properly
- Example format:
  \`\`\`tsx
  <div className="mb-12 rounded-2xl overflow-hidden h-96 relative">
    <img 
      src="${bannerImageUrl}" 
      alt="[Descriptive alt text based on article topic]"
      className="w-full h-full object-cover"
      crossOrigin="anonymous"
      loading="eager"
    />
  </div>
  \`\`\`
- Make sure the image URL is used EXACTLY as provided (do not modify it)
- The image must be inside an <img> tag, not as a background-image CSS property

**CRITICAL REQUIREMENTS:**
- Keep the EXACT same function name (e.g., if it's "VirtualAssistanceBlog", keep it exactly as "VirtualAssistanceBlog")
- Keep the "export default function ComponentName()" signature exactly as it is
- Keep the same content and structure
- Maintain all existing functionality
- Only improve styling, accessibility, and code quality
- Return ONLY the improved TSX code, no explanations
- Make sure the component is complete and can be used as-is
- DO NOT include the image URL as a comment, use it directly in an <img> tag
- DO NOT change the component name or remove the export statement
- The code MUST be a complete, valid React component that can be rendered

Here's the code to improve:

\`\`\`tsx
${tsxCode}
\`\`\`

Return the improved code:`,
        },
      ],
    })

    // Extract the improved code from Claude's response
    const improvedCode = message.content[0].type === 'text' 
      ? message.content[0].text 
      : ''

    // Remove markdown code fences if present
    let cleanedCode = improvedCode.trim()
    if (cleanedCode.startsWith('```')) {
      cleanedCode = cleanedCode
        .replace(/^```[a-z]*\n/, '')
        .replace(/\n```$/, '')
        .trim()
    }

    if (!cleanedCode) {
      return NextResponse.json(
        { error: 'Failed to generate improved code' },
        { status: 500 }
      )
    }

    // Validate the response is complete (check for common truncation indicators)
    const hasUnterminatedString = cleanedCode.match(/["'`]\s*$/);
    if (hasUnterminatedString) {
      console.warn('⚠️ AI response appears to have unterminated string')
      // Don't reject, just warn - let client-side validation handle it
    }

    // Check if the response ends properly (with closing brace)
    const endsProperlyWithBrace = cleanedCode.trim().endsWith('}');
    const endsProperlyWithParen = cleanedCode.trim().endsWith(');');
    const endsProperlyWithSemicolon = cleanedCode.trim().endsWith('};');
    
    if (!endsProperlyWithBrace && !endsProperlyWithParen && !endsProperlyWithSemicolon) {
      console.warn('⚠️ AI response may be truncated (ends with:', cleanedCode.slice(-20), ')')
      // Don't reject, just warn - let client-side validation handle it
    }

    return NextResponse.json({
      success: true,
      improvedCode: cleanedCode,
      bannerImage: bannerImageUrl,
      keywords: keywords,
    })
  } catch (error) {
    console.error('❌ Error improving TSX code:', error)
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace')
    
    // Check if it's an Anthropic API error
    if (error && typeof error === 'object' && 'status' in error) {
      console.error('Anthropic API error status:', (error as any).status)
      console.error('Anthropic API error details:', (error as any).message)
    }
    
    return NextResponse.json(
      {
        error: 'Failed to improve TSX code',
        details: error instanceof Error ? error.message : 'Unknown error',
        hint: 'Check server logs for detailed error information'
      },
      { status: 500 }
    )
  }
}

