"use client";

import { Button } from "@/components/ui/button";
import { Zap, Phone, DollarSign } from "lucide-react";
import Link from "next/link";

export function FinalCTA() {
  const handleViewPricing = () => {
    // Scroll to pricing section
    const pricingSection = document.querySelector('[data-section="pricing"]');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-xl p-12 text-center text-white mb-16">
      <h2 className="text-4xl font-bold mb-6">
        The Bottom Line
      </h2>
      <div className="space-y-4 text-lg mb-8 max-w-4xl mx-auto">
        <p className="font-semibold">
          90% fail. Client messes up or staff messes up. We're the middle man.
        </p>
        <p>
          This is hiring. This is HR. It's a challenging game in ANY country.
        </p>
        <p>
          <strong>The advantage:</strong> Lower costs because of economics (living expenses are different).
        </p>
        <p>
          <strong>The disadvantage:</strong> They have options. Some don't show up. Some take better offers. Some aren't reliable.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">What makes the 10% succeed:</h3>
        <ul className="space-y-2 text-left">
          <li className="flex items-start">
            <Zap className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-0.5" />
            <span>They have their processes together FIRST (documentation, systems)</span>
          </li>
          <li className="flex items-start">
            <Zap className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-0.5" />
            <span>They're patient (60-90 days to productivity)</span>
          </li>
          <li className="flex items-start">
            <Zap className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-0.5" />
            <span>They manage actively (5-10 hrs/week first 90 days)</span>
          </li>
          <li className="flex items-start">
            <Zap className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-0.5" />
            <span>They're ready to hire multiple until they find reliable ones</span>
          </li>
          <li className="flex items-start">
            <Zap className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-0.5" />
            <span>They use our tools (AI matching, tracking software, real candidates)</span>
          </li>
          <li className="flex items-start">
            <Zap className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-0.5" />
            <span>They don't quit during the frustration phase</span>
          </li>
        </ul>
      </div>

      <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Will it work out?</h3>
        <p className="text-xl mb-4">That's up to you and them.</p>
        <p className="text-lg">
          We give you the tools. You do the work.
        </p>
      </div>

      <div className="text-3xl font-bold mb-6">
        If you get your shit together: 100% success rate.
      </div>
      <div className="text-3xl font-bold mb-8">
        If you don't: Part of the 90% that fail.
      </div>
      <p className="text-xl mb-8">Simple as that.</p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/we-got-talent" target="_blank" rel="noopener noreferrer">
          <Button 
            size="lg" 
            className="bg-white text-lime-700 hover:bg-gray-100 px-8 py-4 text-lg font-bold shadow-lg transition-all w-full"
          >
            <Phone className="mr-2 h-5 w-5 text-lime-700" />
            <span className="text-lime-700">Browse Real Candidates</span>
          </Button>
        </Link>
        <Button 
          size="lg" 
          onClick={handleViewPricing}
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lime-700 px-8 py-4 text-lg font-bold transition-all"
        >
          <span className="text-white hover:text-lime-700">See Transparent Pricing</span>
          <DollarSign className="ml-2 h-5 w-5 text-white hover:text-lime-700" />
        </Button>
      </div>
    </div>
  );
}

