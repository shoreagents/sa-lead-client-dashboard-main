import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Easy Business Process Implementation: AGENT in a Box | Phil Knight - AGENT in a Box",
  description: "How AGENT in a Box made business process implementation easy. Systems thinking meets execution.",
  keywords: ["case study", "AGENT in a Box", "Phil Knight", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/easy-business-process-implementation",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
