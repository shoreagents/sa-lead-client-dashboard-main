import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Long-term Partnership Success: Professionals McDowell | Steve Lovegrove - Professionals McDowell",
  description: "Multi-year partnership with Professionals McDowell. Perfect 5/5 performance ratings. "If we could clone her we would."",
  keywords: ["case study", "Professionals McDowell", "Steve Lovegrove", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/long-term-partnership-success",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
