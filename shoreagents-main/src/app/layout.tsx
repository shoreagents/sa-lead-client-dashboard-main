import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { GlobalEngagementTracker } from "@/components/layout/GlobalEngagementTracker";
import { AnonymousUserInitializer } from "@/components/layout/AnonymousUserInitializer";
import { GlobalPricingModal } from "@/components/GlobalPricingModal";
import { AnonymousUserButton } from "@/components/ui/anonymous-user-button";
import { CurrencyProvider } from "@/lib/currencyContext";
import { ToastProvider } from "@/lib/toast-context";
import { AuthProvider } from "@/lib/auth-context";
import { UserAuthProvider } from "@/lib/user-auth-context";
import { AdminAuthProvider } from "@/lib/admin-auth-context";
import { FavoritesProvider } from "@/lib/favorites-context";
import { QueryProvider } from "@/lib/query-client-provider";
import { ChatProvider } from "@/lib/chat-context";
import { Toaster } from "@/components/ui/sonner";
import MayaPreGreeting from "@/components/MayaPreGreeting";

export const metadata: Metadata = {
  title: "ShoreAgents - Professional Offshore Solutions",
  description: "Leading provider of offshore talent solutions and business process outsourcing services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
      >
        <QueryProvider>
          <CurrencyProvider>
            <ToastProvider>
              <AuthProvider>
                <UserAuthProvider>
                  <AdminAuthProvider>
                    <FavoritesProvider>
                      <ChatProvider>
                      {/* <AnonymousUserInitializer /> */}
                      <MayaPreGreeting />
                      <GlobalEngagementTracker />
                      <ScrollToTop />
                      <Navbar />
                      
                      <main className="pt-16">
                        {children}
                      </main>
                      <ConditionalFooter />
                      <BottomNav />
                      {/* <GlobalPricingModal /> */}
                      <AnonymousUserButton />
                      </ChatProvider>
                    </FavoritesProvider>
                  </AdminAuthProvider>
                </UserAuthProvider>
              </AuthProvider>
            </ToastProvider>
          </CurrencyProvider>
        </QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
