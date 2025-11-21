import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Outsourcing: The $76,600 Reality Check | ShoreAgents",
  description: "If you're doing under $500K in revenue, outsourcing will likely lose you money. Learn the real costs, the 90-day timeline, and what tasks actually scale.",
};

export default function RealEstateOutsourcingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}



