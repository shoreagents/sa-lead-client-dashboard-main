'use client';

import { SideNav } from "@/components/layout/SideNav";
import {
  HeroSection,
  OriginStory,
  FailureReality,
  SuccessRateSection,
  NightShiftSection,
  OutboundCallsSection,
  PricingSection,
  FinalCTA
} from "./components";

export default function RealEstateVirtualAssistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection />
        <OriginStory />
        <FailureReality />
        <SuccessRateSection />
        <NightShiftSection />
        <OutboundCallsSection />
        <PricingSection />
        <FinalCTA />
      </div>
    </div>
  );
}
