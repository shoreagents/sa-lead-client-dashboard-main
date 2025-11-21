import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Hiring Success After Failures: Better Homes and Gardens | Cindy Armour Helm - Better Homes and Gardens",
  description: "How Cindy Armour Helm found hiring success with ShoreAgents after previous freelancer failures. Reliable, consistent support.",
  keywords: ["case study", "Better Homes and Gardens", "Cindy Armour Helm", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/hiring-success-after-failures",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
