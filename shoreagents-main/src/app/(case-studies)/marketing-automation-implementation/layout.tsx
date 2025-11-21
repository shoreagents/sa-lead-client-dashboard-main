import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Marketing Automation Implementation: Mark Dwyer | Mark Dwyer - Sales Trainer",
  description: "How sales trainer Mark Dwyer implemented marketing automation with VA support. Consistent outreach at scale.",
  keywords: ["case study", "Sales Trainer", "Mark Dwyer", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/marketing-automation-implementation",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
