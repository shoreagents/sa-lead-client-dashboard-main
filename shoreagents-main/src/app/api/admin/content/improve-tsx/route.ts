import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
})

export async function POST(request: NextRequest) {
  try {
    const { tsxCode } = await request.json()

    if (!tsxCode || !tsxCode.trim()) {
      return NextResponse.json(
        { error: 'TSX code is required' },
        { status: 400 }
      )
    }

    // Call Claude to improve the TSX code
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      messages: [
        {
          role: 'user',
          content: `You are an expert React/TypeScript developer specializing in creating beautiful, accessible, and SEO-friendly blog components.

Improve the following TSX/JSX code by:
1. **Enhancing styling** - Use modern Tailwind CSS utilities, gradients, shadows, and responsive design
2. **Improving accessibility** - Add proper ARIA labels, semantic HTML, keyboard navigation
3. **SEO optimization** - Add proper heading hierarchy (h1, h2, h3), meta descriptions, structured content
4. **Better UX** - Add smooth transitions, hover effects, better spacing, and visual hierarchy
5. **Code quality** - Clean up the code, remove redundancies, add helpful comments
6. **Brand consistency** - Use lime/green accents (lime-500, lime-600) instead of blue, matching the brand colors

Important:
- Keep the same content and structure
- Maintain all existing functionality
- Only improve styling, accessibility, and code quality
- Return ONLY the improved TSX code, no explanations
- Make sure the component is complete and can be used as-is

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

    return NextResponse.json({
      success: true,
      improvedCode: cleanedCode,
    })
  } catch (error) {
    console.error('Error improving TSX code:', error)
    return NextResponse.json(
      {
        error: 'Failed to improve TSX code',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

