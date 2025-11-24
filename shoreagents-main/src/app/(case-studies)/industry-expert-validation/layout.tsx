import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Industry Expert Validation: Derek Gallimore Recognition | Derek Gallimore - Outsource Accelerator",
  description: "Recognition from Derek Gallimore, CEO of Outsource Accelerator. Industry expert validation of our methodology.",
  keywords: ["case study", "Outsource Accelerator", "Derek Gallimore", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/industry-expert-validation",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
