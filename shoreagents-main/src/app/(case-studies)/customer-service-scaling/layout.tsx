import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Customer Service Scaling: BoxBrownie Success Story | Tash Poole - BoxBrownie",
  description: "How BoxBrownie scaled customer service operations with Filipino support staff. 24/7 coverage without burnout.",
  keywords: ["case study", "BoxBrownie", "Tash Poole", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/customer-service-scaling",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
