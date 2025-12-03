import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Hands-off Business Procedures: Kevin Turner | Kevin Turner - Real Estate Talk",
  description: "How Kevin Turner created hands-off business procedures. Systematic delegation for freedom.",
  keywords: ["case study", "Real Estate Talk", "Kevin Turner", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/hands-off-business-procedures",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
