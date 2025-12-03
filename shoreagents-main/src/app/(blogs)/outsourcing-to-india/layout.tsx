import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Outsourcing to India: 2025 Guide",
  description: "Complete guide to outsourcing to India. Costs, benefits, time zones, and why India is a leading BPO destination.",
  keywords: ["outsourcing", "virtual assistant", "BPO", "offshore staffing", "Philippines"],
  canonicalUrl: "/outsourcing-to-india",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "Stephen Atcheler",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
