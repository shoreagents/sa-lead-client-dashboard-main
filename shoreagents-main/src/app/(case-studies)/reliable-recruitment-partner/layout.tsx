import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Reliable Recruitment Partner: Professionals Schultz | Tracey Foy - Professionals Schultz",
  description: "How Professionals Schultz found a reliable recruitment partner. Consistent placements, quality candidates.",
  keywords: ["case study", "Professionals Schultz", "Tracey Foy", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/reliable-recruitment-partner",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
