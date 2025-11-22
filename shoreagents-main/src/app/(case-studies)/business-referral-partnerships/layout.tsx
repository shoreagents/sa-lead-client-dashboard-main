import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "12+ Years of Professional Referrals: Featured on Top Agents Playbook | Ray Wood - Bestagents",
  description: "How Ray Wood, respected real estate coach, has referred clients to ShoreAgents for 12+ years. Featured on Top Agents Playbook podcast discussing virtual assistant readiness.",
  keywords: ["case study", "Bestagents", "Ray Wood", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/business-referral-partnerships",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
