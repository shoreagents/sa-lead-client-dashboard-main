import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Gradual Team Scaling Success: Barry Plant Property Management | Marinella Sortino - Barry Plant",
  description: "How Barry Plant successfully scaled their property management team gradually. Conservative, measured growth strategy.",
  keywords: ["case study", "Barry Plant", "Marinella Sortino", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/gradual-team-scaling-success",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
