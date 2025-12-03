import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Smooth Recruitment Process: JBMP Group | Jon Beaulieu - JBMP Group",
  description: "How JBMP Group experienced a smooth recruitment process. 7-day sprint from need to hire.",
  keywords: ["case study", "JBMP Group", "Jon Beaulieu", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/smooth-recruitment-process",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
