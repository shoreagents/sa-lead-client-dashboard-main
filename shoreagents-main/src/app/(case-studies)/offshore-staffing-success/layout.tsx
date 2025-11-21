import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Offshore Staffing Success: Reside Real Estate | Brett Ayles - Reside Real Estate",
  description: "How Reside Real Estate achieved offshore staffing success. Building a sustainable remote team.",
  keywords: ["case study", "Reside Real Estate", "Brett Ayles", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/offshore-staffing-success",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
