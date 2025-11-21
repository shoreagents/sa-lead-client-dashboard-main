import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Real Estate Outsourcing: The $76,600 Reality Nobody Tells You",
  description: "The truth about real estate outsourcing costs. If you're under $500K revenue, you'll lose money. Learn the 90-day timeline, real costs ($76,600 year 1), and what actually works. 500+ successful placements.",
  keywords: [
    "real estate outsourcing",
    "real estate virtual assistant cost",
    "offshore real estate staff",
    "real estate BPO",
    "transaction coordinator outsourcing",
    "ISA outsourcing",
    "real estate admin outsourcing",
    "Philippines real estate VA"
  ],
  canonicalUrl: "/real-estate-outsourcing",
  ogImage: "/og-images/real-estate-outsourcing.jpg",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
});

export default function RealEstateOutsourcingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}



