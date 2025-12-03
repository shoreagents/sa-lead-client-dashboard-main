import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "What Does a Real Estate Virtual Assistant Do? Complete Guide",
  description: "Everything a real estate VA can handle: transaction coordination, ISA services, CRM management, listing admin. Complete role breakdown.",
  keywords: ["outsourcing", "virtual assistant", "BPO", "offshore staffing", "Philippines"],
  canonicalUrl: "/what-does-a-real-estate-virtual-assistant-do",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "Stephen Atcheler",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
