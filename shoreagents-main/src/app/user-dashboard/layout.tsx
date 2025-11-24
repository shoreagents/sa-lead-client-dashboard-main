import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Dashboard - ShoreAgents",
  description: "User dashboard for ShoreAgents clients",
};

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden bg-gray-50">
      {children}
    </div>
  );
}
