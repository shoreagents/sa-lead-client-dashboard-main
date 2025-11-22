import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo-metadata";

export const metadata: Metadata = genMeta({
  title: "Quick Staff Onboarding: Harcourts Dapto | Michael Garside - Harcourts Dapto",
  description: "How Harcourts Dapto achieved quick staff onboarding. From interview to productive in 7 days.",
  keywords: ["case study", "Harcourts Dapto", "Michael Garside", "offshore staffing", "ShoreAgents success story"],
  canonicalUrl: "/quick-staff-onboarding",
  type: "article",
  publishedTime: "2024-01-15T00:00:00Z",
  modifiedTime: new Date().toISOString(),
  author: "ShoreAgents Team",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
