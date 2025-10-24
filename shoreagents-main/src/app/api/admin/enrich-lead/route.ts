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
    
    // Do a separate search specifically for the company
    console.log('🏢 Searching for company information...');
    const companySearchQuery = `"${company}" company website about`;
    const companyResponse = await fetch('https://google.serper.dev/search', {
      method: 'POST',
      headers: {
        'X-API-KEY': serperApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: companySearchQuery,
        num: 5,
      }),
    }).then(res => res.json());
    
    console.log('🏢 Company search response:', JSON.stringify(companyResponse, null, 2));
    
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
    
    // If no website yet, extract from first organic result
    if (!companyWebsite && companyOrganic.length > 0) {
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

