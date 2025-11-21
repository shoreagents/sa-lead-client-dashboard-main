import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Exceptional Team Performance: Century 21 Rich River | Andrew Lochhead - Century 21",
  description: "How Century 21 achieved exceptional team performance. Management's assessment: "The whole team there are legends."",
  keywords: ["case study", "Century 21", "Andrew Lochhead", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/exceptional-team-performance",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
