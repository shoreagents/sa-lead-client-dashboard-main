import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Mobile Business Solutions: Peter Forbes | Peter Forbes - #1 Property Centre",
  description: "How Peter Forbes built mobile business solutions with remote support. Business flexibility without compromise.",
  keywords: ["case study", "#1 Property Centre", "Peter Forbes", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/mobile-business-solutions",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
