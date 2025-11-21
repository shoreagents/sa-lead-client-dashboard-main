'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/seo-metadata';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  // Always include Home as first item
  const allItems = [
    { name: 'Home', url: 'https://www.shoreagents.com' },
    ...items
  ];

  // Generate schema for SEO
  const schema = generateBreadcrumbSchema(allItems);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Visual Breadcrumb */}
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center space-x-2 text-sm ${className}`}
      >
        <Link 
          href="/" 
          className="flex items-center text-slate-500 hover:text-lime-600 transition-colors"
          aria-label="Home"
        >
          <Home className="w-4 h-4" />
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <div key={item.url} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-slate-300" />
              {isLast ? (
                <span className="text-slate-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url.replace('https://www.shoreagents.com', '')}
                  className="text-slate-500 hover:text-lime-600 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}

// Pre-defined breadcrumb paths for common pages
export const BREADCRUMB_PATHS = {
  // Outsourcing pages
  outsourcing: [
    { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' }
  ],
  'real-estate-outsourcing': [
    { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
    { name: 'Real Estate Outsourcing', url: 'https://www.shoreagents.com/real-estate-outsourcing' }
  ],
  'property-management-outsourcing': [
    { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
    { name: 'Property Management Outsourcing', url: 'https://www.shoreagents.com/property-management-outsourcing' }
  ],
  'construction-outsourcing': [
    { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
    { name: 'Construction Outsourcing', url: 'https://www.shoreagents.com/construction-outsourcing' }
  ],
  'insurance-outsourcing': [
    { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
    { name: 'Insurance Outsourcing', url: 'https://www.shoreagents.com/insurance-outsourcing' }
  ],
  'mortgage-outsourcing': [
    { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
    { name: 'Mortgage Outsourcing', url: 'https://www.shoreagents.com/mortgage-outsourcing' }
  ],
  'legal-outsourcing': [
    { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
    { name: 'Legal Outsourcing', url: 'https://www.shoreagents.com/legal-outsourcing' }
  ],
  'architectural-outsourcing': [
    { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
    { name: 'Architectural Outsourcing', url: 'https://www.shoreagents.com/architectural-outsourcing' }
  ],
  'drafting-outsourcing': [
    { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
    { name: 'Drafting Outsourcing', url: 'https://www.shoreagents.com/drafting-outsourcing' }
  ],
  'engineering-outsourcing': [
    { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
    { name: 'Engineering Outsourcing', url: 'https://www.shoreagents.com/engineering-outsourcing' }
  ],
  'estimating-outsourcing': [
    { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
    { name: 'Estimating Outsourcing', url: 'https://www.shoreagents.com/estimating-outsourcing' }
  ],
  'seo-outsourcing': [
    { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
    { name: 'SEO Outsourcing', url: 'https://www.shoreagents.com/seo-outsourcing' }
  ],
  'graphic-design-outsourcing': [
    { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
    { name: 'Graphic Design Outsourcing', url: 'https://www.shoreagents.com/graphic-design-outsourcing' }
  ],
  'accounting-outsourcing': [
    { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
    { name: 'Accounting Outsourcing', url: 'https://www.shoreagents.com/accounting-outsourcing' }
  ],
  'bookkeeping-outsourcing': [
    { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
    { name: 'Bookkeeping Outsourcing', url: 'https://www.shoreagents.com/bookkeeping-outsourcing' }
  ],
  'website-outsourcing': [
    { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
    { name: 'Website Outsourcing', url: 'https://www.shoreagents.com/website-outsourcing' }
  ],
  'content-writing-outsourcing': [
    { name: 'Outsourcing', url: 'https://www.shoreagents.com/outsourcing' },
    { name: 'Content Writing Outsourcing', url: 'https://www.shoreagents.com/content-writing-outsourcing' }
  ],

  // Virtual Assistant pages
  'virtual-assistant': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' }
  ],
  'real-estate-virtual-assistant': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
    { name: 'Real Estate Virtual Assistant', url: 'https://www.shoreagents.com/real-estate-virtual-assistant' }
  ],
  'property-management-virtual-assistant': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
    { name: 'Property Management Virtual Assistant', url: 'https://www.shoreagents.com/property-management-virtual-assistant' }
  ],
  'architect-virtual-assistant': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
    { name: 'Architect Virtual Assistant', url: 'https://www.shoreagents.com/architect-virtual-assistant' }
  ],
  'construction-virtual-assistant': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
    { name: 'Construction Virtual Assistant', url: 'https://www.shoreagents.com/construction-virtual-assistant' }
  ],
  'engineering-virtual-assistant': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
    { name: 'Engineering Virtual Assistant', url: 'https://www.shoreagents.com/engineering-virtual-assistant' }
  ],
  'mortgage-virtual-assistant': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
    { name: 'Mortgage Virtual Assistant', url: 'https://www.shoreagents.com/mortgage-virtual-assistant' }
  ],
  'insurance-virtual-assistant': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
    { name: 'Insurance Virtual Assistant', url: 'https://www.shoreagents.com/insurance-virtual-assistant' }
  ],
  'legal-virtual-assistant': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
    { name: 'Legal Virtual Assistant', url: 'https://www.shoreagents.com/legal-virtual-assistant' }
  ],
  'drafting-virtual-assistant': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
    { name: 'Drafting Virtual Assistant', url: 'https://www.shoreagents.com/drafting-virtual-assistant' }
  ],
  'estimating-virtual-assistant': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
    { name: 'Estimating Virtual Assistant', url: 'https://www.shoreagents.com/estimating-virtual-assistant' }
  ],
  'ai-virtual-assistants': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
    { name: 'AI Virtual Assistant', url: 'https://www.shoreagents.com/ai-virtual-assistants' }
  ],
  'seo-virtual-assistant': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
    { name: 'SEO Virtual Assistant', url: 'https://www.shoreagents.com/seo-virtual-assistant' }
  ],
  'marketing-virtual-assistant': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
    { name: 'Marketing Virtual Assistant', url: 'https://www.shoreagents.com/marketing-virtual-assistant' }
  ],
  'bookkeeping-virtual-assistant': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
    { name: 'Bookkeeping Virtual Assistant', url: 'https://www.shoreagents.com/bookkeeping-virtual-assistant' }
  ],
  'graphic-design-virtual-assistant': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
    { name: 'Graphic Design Virtual Assistant', url: 'https://www.shoreagents.com/graphic-design-virtual-assistant' }
  ],
  'social-media-virtual-assistant': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
    { name: 'Social Media Virtual Assistant', url: 'https://www.shoreagents.com/social-media-virtual-assistant' }
  ],
  'content-writing-virtual-assistant': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
    { name: 'Content Writing Virtual Assistant', url: 'https://www.shoreagents.com/content-writing-virtual-assistant' }
  ],
  'administrative-virtual-assistant': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
    { name: 'Administrative Virtual Assistant', url: 'https://www.shoreagents.com/administrative-virtual-assistant' }
  ],
  'accounting-virtual-assistant': [
    { name: 'Virtual Assistants', url: 'https://www.shoreagents.com/virtual-assistant' },
    { name: 'Accounting Virtual Assistant', url: 'https://www.shoreagents.com/accounting-virtual-assistant' }
  ],
} as const;
