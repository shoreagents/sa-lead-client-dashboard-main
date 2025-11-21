import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Construction Cost Reduction: Gallery Group Success Story | Iain Neilson - Gallery Group",
  description: "How Gallery Group reduced construction costs with offshore estimating and project admin support. Real savings, real results.",
  keywords: ["case study", "Gallery Group", "Iain Neilson", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/construction-cost-reduction",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
