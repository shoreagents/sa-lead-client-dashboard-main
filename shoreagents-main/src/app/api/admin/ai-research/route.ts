import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { topic, numResults = 10 } = body;

    // Validate required fields
    if (!topic) {
      return NextResponse.json(
        { success: false, error: 'Topic is required' },
        { status: 400 }
      );
    }

    console.log('🔍 Researching topic:', topic);

    // Check if Serper API key is configured
    const serperApiKey = process.env.SERPER_API_KEY;
    if (!serperApiKey) {
      return NextResponse.json(
        {
          success: false,
          error: 'Serper API key not configured. Please add SERPER_API_KEY to your environment variables.',
        },
        { status: 500 }
      );
    }

    // Perform comprehensive research on the topic
    const searchQueries = [
      topic, // Main topic
      `${topic} guide`,
      `${topic} best practices`,
      `${topic} examples`,
      `${topic} statistics`,
    ];

    const researchResults = [];

    // Execute searches in parallel
    const searchPromises = searchQueries.map(async (query) => {
      try {
        console.log('🔎 Searching:', query);
        const response = await fetch('https://google.serper.dev/search', {
          method: 'POST',
          headers: {
            'X-API-KEY': serperApiKey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: query,
            num: numResults,
            gl: 'us',
            hl: 'en',
          }),
        });

        if (!response.ok) {
          throw new Error(`Serper API error: ${response.statusText}`);
        }

        const data = await response.json();
        return {
          query,
          results: data.organic || [],
          knowledgeGraph: data.knowledgeGraph || null,
          relatedSearches: data.relatedSearches || [],
          peopleAlsoAsk: data.peopleAlsoAsk || [],
        };
      } catch (error) {
        console.error(`❌ Error searching "${query}":`, error);
        return { query, results: [], error: error.message };
      }
    });

    const searches = await Promise.all(searchPromises);
    
    // Compile comprehensive research data
    const compiledResearch = {
      topic,
      mainResults: searches[0].results.slice(0, 10),
      knowledgeGraph: searches[0].knowledgeGraph,
      relatedSearches: searches[0].relatedSearches,
      peopleAlsoAsk: searches[0].peopleAlsoAsk,
      additionalSources: {
        guides: searches[1].results.slice(0, 5),
        bestPractices: searches[2].results.slice(0, 5),
        examples: searches[3].results.slice(0, 5),
        statistics: searches[4].results.slice(0, 5),
      },
    };

    console.log('✅ Research completed. Found', 
      compiledResearch.mainResults.length, 'main results');

    return NextResponse.json({
      success: true,
      data: compiledResearch,
    });
  } catch (error) {
    console.error('❌ Error performing research:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to perform research',
      },
      { status: 500 }
    );
  }
}

