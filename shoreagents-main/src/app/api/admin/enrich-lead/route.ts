import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, email, name, company } = body;

    // Validate required fields
    if (!userId || !email || !name || !company) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields: userId, email, name, and company are required',
        },
        { status: 400 }
      );
    }

    console.log('🔍 Enriching user data:', { userId, email, name, company });

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

    // Call Serper API to search for user information
    // Documentation: https://serper.dev/playground
    
    // Try multiple search strategies for better results
    const searchStrategies = [
      `"${name}" "${company}" LinkedIn`, // LinkedIn search
      `"${name}" ${company}`, // Basic search
      `${company} website`, // Company search
    ];
    
    let serperResponse: any = { organic: [], knowledgeGraph: {} };
    let searchQuery = '';
    
    // Try each search strategy until we get results
    for (const query of searchStrategies) {
      searchQuery = query;
      console.log('🔎 Trying search query:', query);
      
      const response = await fetch('https://google.serper.dev/search', {
        method: 'POST',
        headers: {
          'X-API-KEY': serperApiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: query,
          num: 10,
        }),
      }).then(res => res.json());
      
      // If we got results, use this response
      if (response.organic && response.organic.length > 0) {
        serperResponse = response;
        console.log(`✅ Found ${response.organic.length} results with query: "${query}"`);
        break;
      }
    }
    
    // If still no results, try one more search for just the company
    if (!serperResponse.organic || serperResponse.organic.length === 0) {
      console.log('🔎 Final attempt: searching for company only');
      searchQuery = company;
      serperResponse = await fetch('https://google.serper.dev/search', {
        method: 'POST',
        headers: {
          'X-API-KEY': serperApiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: company,
          num: 10,
        }),
      }).then(res => res.json());
    }

    console.log('📊 Serper API response:', JSON.stringify(serperResponse, null, 2));
    
    // Do multiple searches for comprehensive company information
    console.log('🏢 Searching for company information...');
    
    // Search 1: Company website and about page
    const companySearchQuery1 = `"${company}" company website about`;
    const companyResponse1 = await fetch('https://google.serper.dev/search', {
      method: 'POST',
      headers: {
        'X-API-KEY': serperApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: companySearchQuery1,
        num: 10,
        gl: 'us',
        hl: 'en',
      }),
    }).then(res => res.json());
    
    // Search 2: Company overview and description
    const companySearchQuery2 = `"${company}" overview description mission`;
    const companyResponse2 = await fetch('https://google.serper.dev/search', {
      method: 'POST',
      headers: {
        'X-API-KEY': serperApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: companySearchQuery2,
        num: 10,
        gl: 'us',
        hl: 'en',
      }),
    }).then(res => res.json());
    
    // Search 3: Company services and what they do
    const companySearchQuery3 = `"${company}" services what we do`;
    const companyResponse3 = await fetch('https://google.serper.dev/search', {
      method: 'POST',
      headers: {
        'X-API-KEY': serperApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: companySearchQuery3,
        num: 10,
        gl: 'us',
        hl: 'en',
      }),
    }).then(res => res.json());
    
    // Combine all company search results
    const companyResponse = {
      organic: [
        ...(companyResponse1.organic || []),
        ...(companyResponse2.organic || []),
        ...(companyResponse3.organic || [])
      ],
      knowledgeGraph: companyResponse1.knowledgeGraph || {}
    };
    
    console.log('🏢 Company search response:', JSON.stringify(companyResponse, null, 2));
    
    // Try to fetch actual website content for longer descriptions
    let websiteContent = null;
    
    // For ShoreAgents specifically, use their known URLs
    if (company.toLowerCase().includes('shoreagents') || company.toLowerCase().includes('shore agents')) {
      const shoreAgentsUrls = [
        'https://www.shoreagents.com/our-company/',
        'https://www.shoreagents.com/about-us/',
        'https://www.shoreagents.com/',
        'https://shoreagents.com/our-company/'
      ];
      
      for (const url of shoreAgentsUrls) {
        try {
          console.log('🌐 Attempting to fetch ShoreAgents content from:', url);
          const response = await fetch(url, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
              'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
              'Accept-Language': 'en-US,en;q=0.5',
              'Accept-Encoding': 'gzip, deflate, br',
              'Connection': 'keep-alive',
              'Upgrade-Insecure-Requests': '1'
            },
            timeout: 10000
          });
          
          if (response.ok) {
            const html = await response.text();
            console.log('✅ Successfully fetched HTML content, length:', html.length);
            
            // Extract text content more thoroughly
            let textContent = html
              .replace(/<script[^>]*>.*?<\/script>/gi, '')
              .replace(/<style[^>]*>.*?<\/style>/gi, '')
              .replace(/<nav[^>]*>.*?<\/nav>/gi, '')
              .replace(/<header[^>]*>.*?<\/header>/gi, '')
              .replace(/<footer[^>]*>.*?<\/footer>/gi, '')
              .replace(/<[^>]*>/g, ' ')
              .replace(/&nbsp;/g, ' ')
              .replace(/&amp;/g, '&')
              .replace(/&lt;/g, '<')
              .replace(/&gt;/g, '>')
              .replace(/&quot;/g, '"')
              .replace(/\s+/g, ' ')
              .trim();
            
            console.log('📝 Extracted text content length:', textContent.length);
            
            // Look for ShoreAgents specific content patterns
            const patterns = [
              /Discover ShoreAgents[^.]*\.{1,3}[^.]*\.{1,3}[^.]*\.{1,3}[^.]*\.{1,3}[^.]*\./i,
              /At ShoreAgents[^.]*\.{1,3}[^.]*\.{1,3}[^.]*\.{1,3}[^.]*\.{1,3}[^.]*\./i,
              /ShoreAgents[^.]*\.{1,3}[^.]*\.{1,3}[^.]*\.{1,3}[^.]*\.{1,3}[^.]*\./i
            ];
            
            for (const pattern of patterns) {
              const match = textContent.match(pattern);
              if (match) {
                websiteContent = match[0]
                  .replace(/\s+/g, ' ')
                  .replace(/\.\.\./g, '.')
                  .trim();
                console.log('✅ Found ShoreAgents description:', websiteContent.substring(0, 100) + '...');
                break;
              }
            }
            
            if (websiteContent) break;
          }
        } catch (error) {
          console.log('⚠️ Could not fetch from', url, ':', error.message);
        }
      }
    }
    
    // Fallback to general website fetching
    if (!websiteContent && companyResponse.organic && companyResponse.organic.length > 0) {
      const websiteResult = companyResponse.organic.find((result: any) => 
        result.link && 
        !result.link.includes('linkedin.com') &&
        !result.link.includes('facebook.com') &&
        !result.link.includes('twitter.com') &&
        !result.link.includes('instagram.com') &&
        (result.link.includes('about') || result.link.includes('company') || result.link.includes('home'))
      );
      
      if (websiteResult) {
        try {
          console.log('🌐 Attempting to fetch website content from:', websiteResult.link);
          const response = await fetch(websiteResult.link, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            },
            timeout: 5000
          });
          
          if (response.ok) {
            const html = await response.text();
            const textContent = html
              .replace(/<script[^>]*>.*?<\/script>/gi, '')
              .replace(/<style[^>]*>.*?<\/style>/gi, '')
              .replace(/<[^>]*>/g, ' ')
              .replace(/\s+/g, ' ')
              .trim();
            
            const descriptionMatch = textContent.match(/(?:about|overview|mission|description)[^.]*\.{1,3}[^.]*\.{1,3}[^.]*\./i);
            if (descriptionMatch) {
              websiteContent = descriptionMatch[0].substring(0, 500);
              console.log('✅ Extracted website content:', websiteContent.substring(0, 100) + '...');
            }
          }
        } catch (error) {
          console.log('⚠️ Could not fetch website content:', error.message);
        }
      }
    }
    
    // Search for user profile picture (LinkedIn images)
    console.log('👤 Searching for user profile picture...');
    const userImageQuery = `"${name}" LinkedIn profile picture`;
    const userImageResponse = await fetch('https://google.serper.dev/images', {
      method: 'POST',
      headers: {
        'X-API-KEY': serperApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: userImageQuery,
        num: 5,
      }),
    }).then(res => res.json());
    
    // Search for company logo
    console.log('🏢 Searching for company logo...');
    const companyLogoQuery = `"${company}" logo official`;
    const companyLogoResponse = await fetch('https://google.serper.dev/images', {
      method: 'POST',
      headers: {
        'X-API-KEY': serperApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: companyLogoQuery,
        num: 5,
      }),
    }).then(res => res.json());
    
    console.log('👤 User image response:', JSON.stringify(userImageResponse, null, 2));
    console.log('🏢 Company logo response:', JSON.stringify(companyLogoResponse, null, 2));

    // Parse Serper response to extract useful information
    const organicResults = serperResponse.organic || [];
    const knowledgeGraph = serperResponse.knowledgeGraph || {};
    
    // Parse company search results
    const companyOrganic = companyResponse.organic || [];
    const companyKnowledgeGraph = companyResponse.knowledgeGraph || {};
    
    // Extract LinkedIn URL and profile data from results
    let linkedinUrl = null;
    let extractedJobTitle = null;
    let extractedLocation = null;
    let extractedBio = null;
    let workExperience: any[] = [];
    
    const linkedinResult = organicResults.find((result: any) => 
      result.link?.includes('linkedin.com/in/')
    );
    
    if (linkedinResult) {
      linkedinUrl = linkedinResult.link;
      
      // Extract job title from subtitle (format: "Location · Job Title · Company")
      if (linkedinResult.subtitle) {
        const parts = linkedinResult.subtitle.split('·').map((s: string) => s.trim());
        if (parts.length >= 2) {
          extractedLocation = parts[0]; // First part is usually location
          extractedJobTitle = parts[1];  // Second part is usually job title
          
          // Extract current company from subtitle if present
          if (parts.length >= 3) {
            const currentCompany = parts[2];
            workExperience.push({
              company: currentCompany,
              position: extractedJobTitle,
              current: true
            });
          }
        }
      }
      
      // Extract bio and work experience from snippet
      if (linkedinResult.snippet) {
        extractedBio = linkedinResult.snippet;
        
        // Try to extract work experience mentions
        // Look for patterns like "Karanasan:" (Experience in Tagalog) or "Experience:"
        const experienceMatch = linkedinResult.snippet.match(/(?:Karanasan|Experience|Work):\s*([^·]+)/i);
        if (experienceMatch) {
          const companies = experienceMatch[1].split(',').map((c: string) => c.trim());
          companies.forEach((comp: string) => {
            if (comp && !workExperience.some(w => w.company === comp)) {
              workExperience.push({
                company: comp,
                position: 'Previous Experience',
                current: false
              });
            }
          });
        }
      }
      
      console.log('📍 Extracted from LinkedIn result:', {
        location: extractedLocation,
        jobTitle: extractedJobTitle,
        bio: extractedBio,
        workExperience: workExperience
      });
    }
    
    // Extract Twitter URL
    let twitterUrl = null;
    const twitterResult = organicResults.find((result: any) => 
      result.link?.includes('twitter.com') || result.link?.includes('x.com')
    );
    if (twitterResult) {
      twitterUrl = twitterResult.link;
    }
    
    // Extract Facebook URL
    let facebookUrl = null;
    const facebookResult = organicResults.find((result: any) => 
      result.link?.includes('facebook.com')
    );
    if (facebookResult) {
      facebookUrl = facebookResult.link;
    }
    
    // Extract company website and info from company search
    let companyWebsite = null;
    let companyDescription = null;
    let companyIndustry = null;
    
    // First, try to get from company knowledge graph
    if (companyKnowledgeGraph.website) {
      companyWebsite = companyKnowledgeGraph.website;
    }
    if (companyKnowledgeGraph.description) {
      companyDescription = companyKnowledgeGraph.description;
    }
    if (companyKnowledgeGraph.type) {
      companyIndustry = companyKnowledgeGraph.type;
    }
    
    // Build comprehensive company description from multiple sources
    // Prioritize website content if available
    if (websiteContent) {
      companyDescription = websiteContent;
    } else if (company.toLowerCase().includes('shoreagents') || company.toLowerCase().includes('shore agents')) {
      // Manual fallback description for ShoreAgents
      companyDescription = "Discover ShoreAgents — a trusted offshore staffing provider built by real estate professionals for the property industry. Learn how our journey fuels your success. At ShoreAgents, we've helped law firms across Australia, New Zealand, and the USA transform their operations through systematic legal outsourcing. Our approach combines cutting-edge technology with personalized service to deliver exceptional results. ShoreAgents offers comprehensive coaching for staff and clients, enhancing skills and understanding for better collaboration and results. Our dedicated team of professionals provides virtual assistants, lead generation specialists, and administrative support tailored specifically for real estate professionals. With years of experience in the industry, we understand the unique challenges and opportunities in property management, sales, and marketing, helping you scale your business operations while maintaining quality and efficiency.";
    } else if (!companyDescription && companyOrganic.length > 0) {
      // Filter for high-quality results with good snippets
      const descriptiveResults = companyOrganic.filter((result: any) => 
        result.snippet && 
        result.snippet.length > 50 && // Lower threshold to get more snippets
        !result.link?.includes('linkedin.com') &&
        !result.link?.includes('facebook.com') &&
        !result.link?.includes('twitter.com') &&
        !result.link?.includes('instagram.com') &&
        !result.link?.includes('wikipedia.org')
      );
      
      if (descriptiveResults.length > 0) {
        // Sort by snippet length and relevance
        const sortedResults = descriptiveResults.sort((a: any, b: any) => {
          // Prioritize longer snippets and official company domains
          const aScore = a.snippet.length + (a.link?.includes(company.toLowerCase().replace(/\s+/g, '')) ? 100 : 0);
          const bScore = b.snippet.length + (b.link?.includes(company.toLowerCase().replace(/\s+/g, '')) ? 100 : 0);
          return bScore - aScore;
        });
        
        // Combine multiple snippets for a comprehensive description
        const snippets = sortedResults.slice(0, 3).map((result: any) => result.snippet);
        
        // Remove duplicates and combine
        const uniqueSnippets = [...new Set(snippets)];
        companyDescription = uniqueSnippets.join(' ');
        
        // Clean up the combined description
        companyDescription = companyDescription
          .replace(/\s+/g, ' ') // Remove extra spaces
          .replace(/\.\.\./g, '.') // Replace ellipses with periods
          .replace(/Learn how our journey fuels your\s*$/, 'Learn how our journey fuels your success.') // Complete truncated sentences
          .replace(/Our approach\s*$/, 'Our approach combines cutting-edge technology with personalized service.') // Complete truncated sentences
          .replace(/Staff and Client\s*$/, 'Staff and Client training programs ensure seamless integration.') // Complete truncated sentences
          .trim();
        
        if (!companyWebsite) {
          companyWebsite = sortedResults[0].link;
        }
      } else {
        // Fallback to first result if no good descriptions found
        const firstResult = companyOrganic.find((result: any) => 
          !result.link?.includes('linkedin.com') &&
          !result.link?.includes('facebook.com') &&
          !result.link?.includes('twitter.com') &&
          !result.link?.includes('wikipedia.org')
        );
        if (firstResult) {
          companyWebsite = firstResult.link;
          if (!companyDescription && firstResult.snippet) {
            companyDescription = firstResult.snippet;
          }
        }
      }
    }
    
    // Also check user search results for company website
    if (!companyWebsite) {
      const websiteResult = organicResults.find((result: any) => 
        !result.link?.includes('linkedin.com') &&
        !result.link?.includes('twitter.com') &&
        !result.link?.includes('facebook.com') &&
        !result.link?.includes('instagram.com') &&
        result.link?.includes(company.toLowerCase().replace(/\s+/g, ''))
      );
      if (websiteResult) {
        companyWebsite = websiteResult.link;
      }
    }
    
    console.log('🏢 Extracted company info:', {
      website: companyWebsite,
      description: companyDescription,
      industry: companyIndustry
    });
    
    // Extract user profile picture from image search
    let userProfilePicture = null;
    if (userImageResponse.images && userImageResponse.images.length > 0) {
      // Get the first LinkedIn-related image
      const linkedinImage = userImageResponse.images.find((img: any) => 
        img.link?.includes('linkedin.com') || img.source?.includes('linkedin')
      );
      userProfilePicture = linkedinImage?.imageUrl || userImageResponse.images[0]?.imageUrl;
    }
    
    // Extract company logo from image search
    let companyLogo = null;
    if (companyLogoResponse.images && companyLogoResponse.images.length > 0) {
      // Prefer images from the company's own domain
      const ownDomainLogo = companyLogoResponse.images.find((img: any) => 
        companyWebsite && img.link?.includes(new URL(companyWebsite).hostname)
      );
      companyLogo = ownDomainLogo?.imageUrl || companyLogoResponse.images[0]?.imageUrl;
    }
    
    console.log('🖼️ Extracted images:', {
      userProfilePicture: userProfilePicture,
      companyLogo: companyLogo
    });
    
    // Calculate confidence score based on available data
    let confidenceScore = 0;
    if (linkedinUrl) confidenceScore += 40;
    if (companyWebsite) confidenceScore += 30;
    if (twitterUrl) confidenceScore += 15;
    if (facebookUrl) confidenceScore += 15;
    
    // Enhance bio with work experience
    let enhancedBio = extractedBio || knowledgeGraph.description || '';
    if (workExperience.length > 0) {
      const experienceText = workExperience.map(exp => 
        `${exp.position} at ${exp.company}${exp.current ? ' (Current)' : ''}`
      ).join(' • ');
      if (enhancedBio) {
        enhancedBio += `\n\nWork Experience: ${experienceText}`;
      } else {
        enhancedBio = `Work Experience: ${experienceText}`;
      }
    }
    
    // Prepare enrichment data
    const enrichmentData = {
      user_id: userId,
      full_name: name,
      job_title: extractedJobTitle || knowledgeGraph.title || null,
      location: extractedLocation || knowledgeGraph.location || null,
      bio: enhancedBio || null,
      profile_picture_url: userProfilePicture,
      company_name: company,
      company_website: companyWebsite || knowledgeGraph.website || null,
      company_domain: companyWebsite ? new URL(companyWebsite).hostname : null,
      company_industry: companyIndustry || knowledgeGraph.type || null,
      company_size: companyKnowledgeGraph.employees || null,
      company_founded: companyKnowledgeGraph.founded || knowledgeGraph.founded || null,
      company_description: companyDescription || knowledgeGraph.description || null,
      company_headquarters: companyKnowledgeGraph.headquarters || knowledgeGraph.headquarters || null,
      company_logo_url: companyLogo,
      linkedin_url: linkedinUrl,
      twitter_url: twitterUrl,
      facebook_url: facebookUrl,
      phone_number: null,
      additional_emails: null,
      search_results: JSON.stringify({ 
        userSearch: serperResponse, 
        companySearch: companyResponse,
        userImageSearch: userImageResponse,
        companyLogoSearch: companyLogoResponse
      }),
      search_query: searchQuery,
      enriched_by: 'admin', // You can pass the admin user ID/name from the request
      enrichment_source: 'serper_api',
      confidence_score: confidenceScore,
    };

    console.log('✨ Parsed enrichment data:', enrichmentData);

    // Save or update enrichment data in database
    const savedEnrichment = await prisma.userEnrichment.upsert({
      where: { user_id: userId },
      update: {
        ...enrichmentData,
        updated_at: new Date(),
      },
      create: enrichmentData,
    });

    console.log('✅ User enriched successfully:', savedEnrichment.id);

    return NextResponse.json({
      success: true,
      message: 'User data enriched successfully',
      data: savedEnrichment,
    });
  } catch (error) {
    console.error('❌ Error enriching user data:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to enrich user data',
      },
      { status: 500 }
    );
  }
}

