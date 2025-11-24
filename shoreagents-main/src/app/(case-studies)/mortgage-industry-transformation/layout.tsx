import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Mortgage Industry Transformation: Gelt Financial | Jack Miller - Gelt Financial",
  description: "How Gelt Financial transformed their mortgage operations with Filipino loan processing support. Faster turnarounds, better service.",
  keywords: ["case study", "Gelt Financial", "Jack Miller", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/mortgage-industry-transformation",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
