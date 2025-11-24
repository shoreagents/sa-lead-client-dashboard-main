import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";
import { PAGE_METADATA } from "@/lib/page-metadata-config";

const pageKey = 'estimating-virtual-assistant';
const config = PAGE_METADATA[pageKey];

export const metadata: Metadata = genMeta({
  title: config.title,
  description: config.description,
  keywords: config.keywords,
  canonicalUrl: config.canonicalUrl,
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
