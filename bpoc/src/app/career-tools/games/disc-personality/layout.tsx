import { Metadata } from 'next';
import { headers } from 'next/headers';

interface LayoutProps {
  children: React.ReactNode;
}

export async function generateMetadata({ 
  params 
}: { 
  params?: Promise<{ [key: string]: string | string[] }> 
}): Promise<Metadata> {
  // Get the base URL for the site - ensure it's always absolute
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://www.bpoc.io');
  
  // Ensure baseUrl is always absolute (starts with http:// or https://)
  const absoluteBaseUrl = baseUrl.startsWith('http') ? baseUrl : `https://${baseUrl}`;

  // Try to get search params from the request URL
  let userId: string | null = null;
  let type: string | null = null;
  let animal: string | null = null;

  try {
    const headersList = await headers();
    // Get the full request URL from various headers
    const host = headersList.get('host') || '';
    const protocol = headersList.get('x-forwarded-proto') || 'https';
    const pathname = headersList.get('x-pathname') || '/career-tools/games/disc-personality';
    const queryString = headersList.get('x-query-string') || '';
    
    // Try to construct the full URL
    let fullUrl = '';
    
    // First, try to get from x-url header (if set by middleware) - this is the most reliable
    const xUrl = headersList.get('x-url');
    if (xUrl) {
      fullUrl = xUrl;
    } else if (host && queryString) {
      // If we have query string from header, use it
      const path = pathname + (queryString.startsWith('?') ? queryString : `?${queryString}`);
      fullUrl = `${protocol}://${host}${path}`;
    } else if (host) {
      // Fallback: construct from host and pathname
      fullUrl = `${protocol}://${host}${pathname}`;
    }
    
    if (fullUrl) {
      try {
        const url = new URL(fullUrl);
        userId = url.searchParams.get('userId');
        type = url.searchParams.get('type');
        animal = url.searchParams.get('animal');
      } catch (urlError) {
        // If URL parsing fails, try to parse query string directly
        if (queryString) {
          const params = new URLSearchParams(queryString);
          userId = params.get('userId');
          type = params.get('type');
          animal = params.get('animal');
        }
      }
    }
    
    // Log for debugging
    if (userId && type) {
      console.log('✅ DISC Layout: Extracted params from headers:', { userId, type, animal });
    } else {
      console.log('⚠️ DISC Layout: Could not extract params from headers, using defaults');
    }
  } catch (error) {
    // If we can't get search params, use defaults
    console.log('Could not extract search params from headers:', error);
  }

  // If we have the required parameters, generate DISC-specific metadata
  if (userId && type) {
    const animalName = animal || (type === 'D' ? 'Eagle' : type === 'I' ? 'Peacock' : type === 'S' ? 'Turtle' : 'Owl');
    const personalityTitles: { [key: string]: string } = {
      'D': 'The Sky Dominator',
      'I': 'The Social Star',
      'S': 'The Steady Guardian',
      'C': 'The Wise Analyst'
    };
    const personalityTitle = personalityTitles[type] || 'BPO Professional';
    
    // Construct OG image URL - ensure it's absolute and includes all parameters
    const ogImageUrl = `${absoluteBaseUrl}/api/og/disc-results?userId=${userId}&type=${type}&animal=${encodeURIComponent(animalName)}&v=3`;
    const pageUrl = `${absoluteBaseUrl}/career-tools/games/disc-personality?userId=${userId}&type=${type}&animal=${encodeURIComponent(animalName)}`;
    const description = `Discover your BPO animal spirit! I'm a ${animalName} - ${personalityTitle}. Take the BPOC DISC Personality Assessment to find your perfect BPO role.`;

    return {
      title: `${personalityTitle} - ${animalName} Personality | BPOC DISC Assessment`,
      description,
      openGraph: {
        title: `${personalityTitle} - ${animalName} Personality`,
        description,
        url: pageUrl,
        siteName: 'BPOC.IO',
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: `${personalityTitle} - ${animalName} Personality Assessment Results`,
            type: 'image/png',
          },
        ],
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${personalityTitle} - ${animalName} Personality`,
        description,
        images: [ogImageUrl],
      },
      other: {
        'og:image:width': '1200',
        'og:image:height': '630',
        'og:image:type': 'image/png',
      },
    };
  }

  // Default metadata for the DISC personality game page
  // Always provide OG image even if query params are missing
  const defaultOgImageUrl = `${absoluteBaseUrl}/api/og/disc-results?userId=default&type=D&animal=Eagle&v=3`;
  return {
    title: 'BPOC DISC Personality Assessment | BPOC.IO',
    description: 'Discover your BPO animal spirit! Take the BPOC DISC Personality Assessment to find your perfect BPO role and understand your workplace personality.',
    openGraph: {
      title: 'BPOC DISC Personality Assessment | BPOC.IO',
      description: 'Discover your BPO animal spirit! Take the BPOC DISC Personality Assessment to find your perfect BPO role and understand your workplace personality.',
      url: `${absoluteBaseUrl}/career-tools/games/disc-personality`,
      siteName: 'BPOC.IO',
      images: [
        {
          url: defaultOgImageUrl,
          width: 1200,
          height: 630,
          alt: 'BPOC DISC Personality Assessment',
          type: 'image/png',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'BPOC DISC Personality Assessment | BPOC.IO',
      description: 'Discover your BPO animal spirit! Take the BPOC DISC Personality Assessment to find your perfect BPO role.',
      images: [defaultOgImageUrl],
    },
    other: {
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:type': 'image/png',
    },
  };
}

export default function DiscPersonalityLayout({
  children,
}: LayoutProps) {
  return <>{children}</>;
}

