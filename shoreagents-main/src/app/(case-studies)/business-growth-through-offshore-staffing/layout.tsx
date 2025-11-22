import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Business Growth Through Offshore Staffing: Arizto Real Estate | Pernell Callaghan - Arizto Real Estate",
  description: "How Arizto Real Estate achieved business growth through strategic offshore staffing. Professional Filipino support team.",
  keywords: ["case study", "Arizto Real Estate", "Pernell Callaghan", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/business-growth-through-offshore-staffing",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
