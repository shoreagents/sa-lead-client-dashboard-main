import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Immediate Business Transformation: LockedOn | Luke Newton - LockedOn",
  description: "How LockedOn experienced immediate business transformation with offshore support. Quick wins, lasting results.",
  keywords: ["case study", "LockedOn", "Luke Newton", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/immediate-business-transformation",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
