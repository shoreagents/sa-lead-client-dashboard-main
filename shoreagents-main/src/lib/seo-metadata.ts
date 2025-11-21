import { Metadata } from 'next';

interface SEOMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl: string;
  ogImage?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = '/og-image.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Stephen Atcheler',
}: SEOMetadataProps): Metadata {
  const baseUrl = 'https://www.shoreagents.com';
  const fullUrl = `${baseUrl}${canonicalUrl}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: author }],
    
    openGraph: {
      type,
      title,
      description,
      url: fullUrl,
      siteName: 'ShoreAgents',
      images: [{
        url: fullOgImage,
        width: 1200,
        height: 630,
        alt: title,
      }],
      ...(type === 'article' && publishedTime && {
        publishedTime,
        modifiedTime: modifiedTime || publishedTime,
        authors: [author],
      }),
    },
    
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullOgImage],
    },
    
    alternates: {
      canonical: fullUrl,
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Schema generation utilities
export function generateArticleSchema({
  headline,
  description,
  image,
  author = 'Stephen Atcheler',
  datePublished,
  dateModified,
  url,
}: {
  headline: string;
  description: string;
  image: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ShoreAgents',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.shoreagents.com/ShoreAgents-Logo.png',
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

export function generateServiceSchema({
  name,
  description,
  priceRange,
  areaServed = ['US', 'AU', 'NZ', 'CA'],
}: {
  name: string;
  description: string;
  priceRange?: string;
  areaServed?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'ShoreAgents',
      url: 'https://www.shoreagents.com',
    },
    areaServed: areaServed.map(area => ({
      '@type': 'Country',
      name: area,
    })),
    ...(priceRange && {
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: priceRange,
          priceCurrency: 'USD',
          unitText: 'per hour',
        },
      },
    }),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateReviewSchema({
  author,
  reviewBody,
  ratingValue = 5,
  reviewDate,
}: {
  author: string;
  reviewBody: string;
  ratingValue?: number;
  reviewDate?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Service',
      name: 'ShoreAgents Offshore Staffing',
    },
    author: {
      '@type': 'Person',
      name: author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue,
      bestRating: 5,
    },
    reviewBody,
    ...(reviewDate && { datePublished: reviewDate }),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

