import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { topic, research, postType = 'blog', tone = 'professional', targetAudience = 'general' } = body;

    // Validate required fields
    if (!topic) {
      return NextResponse.json(
        { success: false, error: 'Topic is required' },
        { status: 400 }
      );
    }

    console.log('✍️ Generating blog post for:', topic);

    // Check if Anthropic API key is configured
    const anthropicApiKey = process.env.ANTHROPIC_API_KEY;
    if (!anthropicApiKey) {
      return NextResponse.json(
        {
          success: false,
          error: 'Anthropic API key not configured. Please add ANTHROPIC_API_KEY to your environment variables.',
        },
        { status: 500 }
      );
    }

    // Initialize Anthropic client
    const anthropic = new Anthropic({
      apiKey: anthropicApiKey,
    });

    // Prepare research context if available
    let researchContext = '';
    if (research && research.mainResults && research.mainResults.length > 0) {
      researchContext = '\n\n## Research Sources:\n\n';
      research.mainResults.slice(0, 10).forEach((result: any, index: number) => {
        researchContext += `${index + 1}. **${result.title}**\n`;
        researchContext += `   ${result.snippet}\n`;
        researchContext += `   Source: ${result.link}\n\n`;
      });

      if (research.knowledgeGraph) {
        researchContext += '\n## Key Facts:\n';
        researchContext += JSON.stringify(research.knowledgeGraph, null, 2);
      }

      if (research.peopleAlsoAsk && research.peopleAlsoAsk.length > 0) {
        researchContext += '\n\n## Common Questions:\n';
        research.peopleAlsoAsk.forEach((item: any) => {
          researchContext += `- ${item.question}\n  ${item.snippet}\n\n`;
        });
      }
    }

    // Create prompt based on post type
    let promptInstructions = '';
    
    switch (postType) {
      case 'blog':
        promptInstructions = `Create a comprehensive, engaging blog post about "${topic}". The blog post should be approximately 1500-2000 words and include:
        
1. A compelling title
2. An attention-grabbing introduction
3. Well-structured sections with headings (H2 and H3)
4. Actionable insights and practical examples
5. Data and statistics where relevant
6. A strong conclusion with key takeaways
7. Call-to-action at the end

The tone should be ${tone} and tailored for ${targetAudience} audience.`;
        break;
        
      case 'article':
        promptInstructions = `Create an in-depth, authoritative article about "${topic}". The article should be approximately 2000-3000 words and include:
        
1. A professional title
2. An executive summary
3. Thoroughly researched sections with clear headings
4. Citations and references to credible sources
5. Expert insights and analysis
6. Visual suggestions (charts, diagrams, infographics)
7. Comprehensive conclusion

The tone should be ${tone} and written for ${targetAudience} audience.`;
        break;
        
      case 'pillar':
        promptInstructions = `Create a comprehensive pillar page about "${topic}". This should be an ultimate guide of 3000+ words that includes:
        
1. An SEO-optimized main title
2. A table of contents
3. Multiple major sections (H2) each with subsections (H3)
4. Detailed explanations with examples
5. Best practices and actionable frameworks
6. Common mistakes to avoid
7. FAQs section
8. Resources and next steps
9. Internal linking suggestions

The tone should be ${tone} and serve as the definitive resource for ${targetAudience} audience.`;
        break;
    }

    // Generate content using Claude
    console.log('🤖 Calling Claude API...');
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 8000,
      temperature: 0.7,
      messages: [
        {
          role: 'user',
          content: `${promptInstructions}

${researchContext}

Please create the ${postType} in a clean, professional format using Markdown. Include proper heading hierarchy, lists, and emphasis where appropriate. Make the content engaging, informative, and actionable.

IMPORTANT: Format the output as a JSON object with the following structure:
{
  "title": "The main title of the post",
  "description": "A brief 150-160 character meta description for SEO",
  "content": "The full Markdown content of the post",
  "suggestedTags": ["tag1", "tag2", "tag3"],
  "suggestedKeywords": ["keyword1", "keyword2", "keyword3"],
  "estimatedReadTime": "X min read"
}

Ensure the JSON is valid and properly formatted.`,
        },
      ],
    });

    // Extract the generated content
    const content = message.content[0];
    let generatedData;

    if (content.type === 'text') {
      try {
        // Try to parse as JSON first
        const jsonMatch = content.text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          generatedData = JSON.parse(jsonMatch[0]);
        } else {
          // Fallback: extract manually if not proper JSON
          generatedData = {
            title: topic,
            description: content.text.substring(0, 160),
            content: content.text,
            suggestedTags: [],
            suggestedKeywords: [],
            estimatedReadTime: `${Math.ceil(content.text.split(' ').length / 200)} min read`,
          };
        }
      } catch (parseError) {
        console.warn('⚠️ Could not parse JSON response, using fallback');
        generatedData = {
          title: topic,
          description: content.text.substring(0, 160),
          content: content.text,
          suggestedTags: [],
          suggestedKeywords: [],
          estimatedReadTime: `${Math.ceil(content.text.split(' ').length / 200)} min read`,
        };
      }
    }

    console.log('✅ Blog post generated successfully');
    console.log('📊 Usage:', {
      input_tokens: message.usage.input_tokens,
      output_tokens: message.usage.output_tokens,
    });

    return NextResponse.json({
      success: true,
      data: generatedData,
      usage: message.usage,
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

