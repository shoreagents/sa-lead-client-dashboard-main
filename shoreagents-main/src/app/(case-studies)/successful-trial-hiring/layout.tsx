import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Successful Trial Hiring: Crowdcopia | Jonathan Curreri - Crowdcopia",
  description: "How Crowdcopia successfully trialed and hired Filipino staff. Low-risk testing before commitment.",
  keywords: ["case study", "Crowdcopia", "Jonathan Curreri", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/successful-trial-hiring",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
