import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
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
import { Stage2CaptureButton } from "@/components/ui/stage-2-capture-button";
import { CurrencyProvider } from "@/lib/currencyContext";
import { ToastProvider } from "@/lib/toast-context";
import { AuthProvider } from "@/lib/auth-context";
import { UserAuthProvider } from "@/lib/user-auth-context";
import { AdminAuthProvider } from "@/lib/admin-auth-context";
import { FavoritesProvider } from "@/lib/favorites-context";
import { QueryProvider } from "@/lib/query-client-provider";
import { ChatProvider } from "@/lib/chat-context";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shoreagents.com'),
  title: {
    default: "ShoreAgents - Professional Filipino Staff Leasing & BPO Services",
    template: "%s | ShoreAgents"
  },
  description: "Professional offshore staffing for Real Estate, Construction, Accounting & more. 500+ successful placements. $8-15/hr university-educated Filipino professionals. Enterprise-grade BPO infrastructure.",
  keywords: ["offshore staffing", "BPO services", "virtual assistant", "Filipino staff", "real estate outsourcing", "construction outsourcing", "ShoreAgents"],
  authors: [{ name: "Stephen Atcheler" }],
  creator: "ShoreAgents",
  publisher: "ShoreAgents",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.shoreagents.com",
    siteName: "ShoreAgents",
    title: "ShoreAgents - Professional Filipino Staff Leasing & BPO Services",
    description: "Professional offshore staffing for Real Estate, Construction, Accounting & more. 500+ successful placements.",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "ShoreAgents - Professional Offshore Staffing"
    }]
  },
  
  twitter: {
    card: "summary_large_image",
    title: "ShoreAgents - Professional Filipino Staff Leasing",
    description: "Professional offshore staffing. 500+ successful placements. Enterprise-grade BPO infrastructure.",
    images: ["/twitter-image.jpg"],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization Schema for LLMs and Search Engines
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ShoreAgents",
    "url": "https://www.shoreagents.com",
    "logo": "https://www.shoreagents.com/ShoreAgents-Logo.png",
    "description": "Professional offshore staffing and BPO services. 500+ successful placements across real estate, construction, accounting, and more.",
    "foundingDate": "2010",
    "founder": {
      "@type": "Person",
      "name": "Stephen Atcheler",
      "jobTitle": "Founder & CEO"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cebu",
      "addressCountry": "Philippines"
    },
    "areaServed": ["United States", "Australia", "New Zealand", "Canada"],
    "sameAs": [
      "https://www.linkedin.com/company/shoreagents",
      "https://www.facebook.com/shoreagents"
    ],
    "serviceType": ["Offshore Staffing", "BPO Services", "Virtual Assistant Services", "Staff Leasing"],
    "knowsAbout": ["Real Estate Outsourcing", "Construction Outsourcing", "Accounting Outsourcing", "Virtual Assistants"]
  };

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${roboto.variable} font-sans antialiased`}
      >
        <QueryProvider>
          <CurrencyProvider>
            <ToastProvider>
              <AuthProvider>
                <UserAuthProvider>
                  <AdminAuthProvider>
                    <FavoritesProvider>
                      <ChatProvider>
                      <AnonymousUserInitializer />
                      <GlobalEngagementTracker />
                      <ScrollToTop />
                      <Navbar />
                      
                      <main>
                        {children}
                      </main>
                      <ConditionalFooter />
                      <BottomNav />
                      {/* <GlobalPricingModal /> */}
                      <AnonymousUserButton />
                      <Stage2CaptureButton />
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
