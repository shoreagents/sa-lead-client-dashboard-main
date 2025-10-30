// Example: How to integrate NextStepCard into your dashboard

import { NextStepCard } from '@/components/dashboard/NextStepCard';
import { useAuth } from '@/lib/auth-context'; // or wherever you get user ID

export function AIRecommendationsSection() {
  const { userId } = useAuth(); // Get the current user ID

  return (
    <div className="bg-lime-600 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          AI Recommendations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Top Candidate Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-lime-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" /* ... */ />
              </div>
              <h3 className="font-bold text-lg">Top Candidate</h3>
            </div>
            {/* ... existing content ... */}
          </div>

          {/* AI Matched Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-lime-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" /* ... */ />
              </div>
              <h3 className="font-bold text-lg">AI Matched</h3>
            </div>
            {/* ... existing content ... */}
          </div>

          {/* NEXT STEP CARD - Powered by browsing data */}
          <NextStepCard userId={userId} />

          {/* Maya AI Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-lime-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" /* ... */ />
              </div>
              <h3 className="font-bold text-lg">Maya AI</h3>
            </div>
            {/* ... existing content ... */}
          </div>
        </div>

        {/* Additional sections: Case Study, Recent Quotes, Coming Soon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* ... other cards ... */}
        </div>
      </div>
    </div>
  );
}

// ============================================
// ALTERNATIVE: Using the component standalone
// ============================================

export function UserDashboard() {
  const { userId } = useAuth();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Your personalized next step */}
        <NextStepCard userId={userId} />
        
        {/* Other dashboard widgets */}
        <OtherCard />
      </div>
    </div>
  );
}

