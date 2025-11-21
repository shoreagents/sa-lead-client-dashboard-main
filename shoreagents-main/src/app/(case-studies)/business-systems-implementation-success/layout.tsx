import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Business Systems Implementation: Mi Property Group | Christel Renton - Mi Property Group",
  description: "How Mi Property Group successfully implemented business systems with offshore support. Documentation and process.",
  keywords: ["case study", "Mi Property Group", "Christel Renton", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/business-systems-implementation-success",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
