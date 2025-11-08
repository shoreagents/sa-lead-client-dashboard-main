import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { topic, researchData, tone = 'professional', targetAudience = 'general' } = body;

    // Validate required fields
    if (!topic) {
      return NextResponse.json(
        { success: false, error: 'Topic is required' },
        { status: 400 }
      );
    }

    // Check if API keys are configured
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          error: 'ANTHROPIC_API_KEY not configured. Please add it to your environment variables.',
        },
        { status: 500 }
      );
    }

    console.log('🤖 Generating blog post for topic:', topic);

    // Prepare research context from Serper API results
    let researchContext = '';
    if (researchData) {
      const mainResults = researchData.mainResults || [];
      const knowledgeGraph = researchData.knowledgeGraph || {};
      const relatedSearches = researchData.relatedSearches || [];
      const peopleAlsoAsk = researchData.peopleAlsoAsk || [];

      researchContext = `
## Research Data:

### Main Search Results:
${mainResults.slice(0, 10).map((result: any, idx: number) => `
${idx + 1}. **${result.title || 'No title'}**
   - URL: ${result.link || 'N/A'}
   - Snippet: ${result.snippet || 'No snippet available'}
`).join('\n')}

### Knowledge Graph:
${knowledgeGraph.description ? `Description: ${knowledgeGraph.description}` : 'No knowledge graph data available'}
${knowledgeGraph.attributes ? `\nAttributes: ${JSON.stringify(knowledgeGraph.attributes, null, 2)}` : ''}

### Related Searches:
${relatedSearches.slice(0, 5).map((search: string) => `- ${search}`).join('\n')}

### People Also Ask:
${peopleAlsoAsk.slice(0, 5).map((item: any) => `- Q: ${item.question}\n  A: ${item.snippet || 'No answer available'}`).join('\n')}
`;
    }

    // Create comprehensive system prompt for Claude
    const systemPrompt = `You are an expert blog post writer and React/TSX developer. Your task is to create a complete, well-structured blog post as a TSX React component.

CRITICAL REQUIREMENTS:
1. Return ONLY the TSX code - no explanations, no markdown, no comments outside the code
2. The code MUST start with "export default function BlogPost() {" and end with "}"
3. Use Tailwind CSS for ALL styling - no inline styles or external CSS
4. Use the lime color scheme (lime-50 through lime-900) as the primary accent color
5. Include proper semantic HTML (h1, h2, h3, p, section, article, etc.)
6. Make it visually appealing with modern design, gradients, shadows, and spacing
7. Include lucide-react icons (they will be available as global components)
8. Make it responsive with mobile-friendly classes
9. Include a hero section at the top, main content sections, and a conclusion
10. Use professional ${tone} tone suitable for ${targetAudience} audience
11. The component must be complete, valid TSX that can be rendered immediately

Component Structure Example:
export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-50 to-lime-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Title Here</h1>
          <p className="text-lg text-gray-600">Subtitle or description</p>
        </div>
      </section>
      
      {/* Main Content */}
      <article className="container mx-auto px-4 py-12">
        {/* Content sections */}
      </article>
    </div>
  );
}

Return ONLY the complete TSX code, nothing else.`;

    // Create user prompt with research context
    const userPrompt = `Write a comprehensive blog post about "${topic}" as a TSX React component.

${researchContext ? `Use the following research data to inform your content:\n${researchContext}` : 'Write based on your knowledge of the topic.'}

Requirements:
- Component name: BlogPost (export default function BlogPost())
- Tone: ${tone}
- Target audience: ${targetAudience}
- Include a compelling hero section with title
- Write engaging, informative content (at least 1000 words)
- Use proper blog post structure (introduction, body sections with h2/h3 headings, conclusion)
- Use Tailwind CSS classes for all styling
- Include lucide-react icons where appropriate (available as global components)
- Use lime color scheme (lime-50 to lime-900) for accents
- Make it visually appealing with proper spacing, shadows, and gradients

Return ONLY the complete TSX code starting with "export default function BlogPost() {" and ending with "}". No explanations, no markdown code blocks, just the raw TSX code.`;

    // Call Claude API
    console.log('📝 Calling Claude API to generate blog post...');
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 8000,
      temperature: 0.7,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: userPrompt,
        },
      ],
    });

    const aiResponse = response.content[0];
    if (aiResponse.type !== 'text') {
      throw new Error('Unexpected response type from Anthropic API');
    }

    let tsxCode = aiResponse.text.trim();

    console.log('📝 Raw Claude response length:', tsxCode.length);
    console.log('📝 First 200 chars:', tsxCode.substring(0, 200));

    // Remove markdown code blocks if present (multiple patterns)
    // Pattern 1: ```tsx ... ```
    tsxCode = tsxCode.replace(/^```(?:tsx|ts|jsx|js|typescript)?\s*\n?/i, '');
    tsxCode = tsxCode.replace(/\n?```\s*$/i, '');
    
    // Pattern 2: ``` ... ``` (anywhere in the text)
    const codeBlockMatch = tsxCode.match(/```(?:tsx|ts|jsx|js|typescript)?\s*\n([\s\S]*?)\n?```/i);
    if (codeBlockMatch && codeBlockMatch[1]) {
      tsxCode = codeBlockMatch[1].trim();
    }

    // Remove any leading/trailing whitespace
    tsxCode = tsxCode.trim();

    // Remove any explanatory text before the code
    const exportMatch = tsxCode.match(/(export\s+default\s+function[\s\S]*)/);
    if (exportMatch) {
      tsxCode = exportMatch[1].trim();
    }

    // Ensure it starts with export default function
    if (!tsxCode.includes('export default function BlogPost')) {
      // Check if it has function BlogPost but missing export
      if (tsxCode.includes('function BlogPost')) {
        tsxCode = tsxCode.replace(/^(function\s+BlogPost)/, 'export default $1');
      } else if (tsxCode.includes('function') && !tsxCode.includes('export')) {
        // Has a function but not BlogPost and no export
        tsxCode = tsxCode.replace(/^(function\s+\w+)/, 'export default function BlogPost');
      } else if (!tsxCode.includes('export') && !tsxCode.includes('function')) {
        // Just JSX, wrap it
        tsxCode = `export default function BlogPost() {
  return (
    ${tsxCode}
  );
}`;
      } else if (!tsxCode.includes('export default')) {
        // Has function but no export default
        tsxCode = `export default ${tsxCode}`;
      }
    }

    // Final validation - ensure it's a complete component
    if (!tsxCode.includes('export default function BlogPost()')) {
      console.warn('⚠️ Generated code might not have proper export structure');
      // Try to fix it
      if (tsxCode.includes('return')) {
        // Has return statement, might just need wrapper
        if (!tsxCode.includes('function BlogPost')) {
          tsxCode = `export default function BlogPost() {
  ${tsxCode}
}`;
        }
      }
    }

    // Ensure proper closing
    if (!tsxCode.trim().endsWith('}')) {
      console.warn('⚠️ Generated code might be incomplete (missing closing brace)');
    }

    console.log('✅ Processed TSX code length:', tsxCode.length);
    console.log('📝 First 300 chars of processed code:', tsxCode.substring(0, 300));

    console.log('✅ Blog post generated successfully');
    console.log('📏 Generated TSX length:', tsxCode.length);

    return NextResponse.json({
      success: true,
      tsxCode,
      topic,
      metadata: {
        tone,
        targetAudience,
        generatedAt: new Date().toISOString(),
        length: tsxCode.length,
      },
    });
  } catch (error) {
    console.error('❌ Error generating blog post:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to generate blog post',
      },
      { status: 500 }
    );
  }
}

