import { Card, CardContent } from "@/components/ui/card";
import { Phone, AlertCircle, CheckCircle, X } from "lucide-react";

export function OutboundCallsSection() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <Phone className="w-8 h-8 text-lime-600 mr-3" />
        If You Want Outbound Calls - Verify the Workspace Thoroughly
      </h2>
      <div className="space-y-6">
        <p className="text-xl text-gray-700 leading-relaxed">
          <strong>Real talk about cold calling:</strong> If you're hiring for outbound calls, lead generation, client-facing work - you need to verify the workspace more thoroughly. Yes, avoid the chickens situation.
        </p>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why?</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <AlertCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Roosters crowing on a $2M listing call = you look unprofessional</span>
            </li>
            <li className="flex items-start">
              <AlertCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Grandma talking during cold calls = instant hang up</span>
            </li>
            <li className="flex items-start">
              <AlertCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Rain on tin roof = unprofessional</span>
            </li>
            <li className="flex items-start">
              <AlertCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Dogs barking, kids screaming, neighbors yelling = brand damage</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <p className="text-lg text-gray-900 mb-4">
            <strong>What we do:</strong> Video interviews when they're at home - you can see and hear their actual workspace during the interview.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-green-300 bg-green-50 shadow-md">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">When home-based works:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Admin tasks (data entry, CRM, email)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Back-office (bookkeeping, transaction coordination)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Written work (social media, listings, content)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-300 bg-red-50 shadow-md">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">When you need office-based:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Outbound calling (background noise kills you)</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Client-facing calls (professionalism matters)</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Live support (need reliable internet + quiet)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <p className="text-lg text-gray-700 font-semibold">
          The tracking reality: Home-based workers are harder to track. That's just reality. Our software helps, but nothing beats office environment for accountability.
        </p>
      </div>
    </div>
  );
}

