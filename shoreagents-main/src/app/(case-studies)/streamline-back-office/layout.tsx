import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Streamline Back Office: Jason Gard Real Estate | Jason Gard - Gard Real Estate",
  description: "How Jason Gard streamlined back office operations. 3 years later: perfect performance reviews.",
  keywords: ["case study", "Gard Real Estate", "Jason Gard", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/streamline-back-office",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
