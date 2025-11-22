import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Appraisal & Listings Volume Increase: Bellarine Property | Levi Turner - Bellarine Property",
  description: "How Bellarine Property increased appraisal and listings volume with VA support. More deals, same hours.",
  keywords: ["case study", "Bellarine Property", "Levi Turner", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/appraisal-listings-volume-increase",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
