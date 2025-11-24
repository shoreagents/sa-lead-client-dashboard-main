import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Outsourcing Philippines: Why It's the #1 BPO Destination",
  description: "Why Philippines is the premier outsourcing destination. English proficiency, cultural fit, time zones, costs, and infrastructure.",
  keywords: ["outsourcing", "virtual assistant", "BPO", "offshore staffing", "Philippines"],
  canonicalUrl: "/outsourcing-philippines",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "Stephen Atcheler",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
