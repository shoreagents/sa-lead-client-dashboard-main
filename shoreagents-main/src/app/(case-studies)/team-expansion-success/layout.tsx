import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Team Expansion Success: Ballast Real Estate Growth | Kuahiwi Kahapea - Ballast",
  description: "How Ballast Real Estate successfully expanded their team with Filipino virtual assistants. Scaling without overhead increase.",
  keywords: ["case study", "Ballast", "Kuahiwi Kahapea", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/team-expansion-success",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
