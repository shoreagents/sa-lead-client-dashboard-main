import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "What is Outsourcing? Complete Guide for 2025",
  description: "Understanding outsourcing: definitions, benefits, risks, and when it makes sense. Complete guide with real costs and ROI data.",
  keywords: ["outsourcing", "virtual assistant", "BPO", "offshore staffing", "Philippines"],
  canonicalUrl: "/what-is-outsourcing",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "Stephen Atcheler",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
