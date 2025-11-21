import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Virtual Real Estate Assistant Pricing: Complete 2025 Guide",
  description: "Real estate VA pricing guide. Hourly rates, hidden costs, real ROI calculations. What you actually pay vs what you get.",
  keywords: ["outsourcing", "virtual assistant", "BPO", "offshore staffing", "Philippines"],
  canonicalUrl: "/virtual-real-estate-assistant-pricing",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "Stephen Atcheler",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
