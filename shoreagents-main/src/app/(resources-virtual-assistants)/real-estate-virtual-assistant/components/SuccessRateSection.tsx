import { Card, CardContent } from "@/components/ui/card";
import { Percent, CheckCircle, X } from "lucide-react";

export function SuccessRateSection() {
  return (
    <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
        <Percent className="w-10 h-10 text-lime-600 mr-3" />
        The Success Rate Reality: 50-50 If You Do Your Part
      </h2>
      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <p className="text-xl text-gray-900 mb-4">
            <strong>Industry reality:</strong> <span className="text-lime-600 font-bold">90% of all VA partnerships fail within 90 days.</span>
          </p>
          <p className="text-xl text-gray-900">
            <strong>Shore Agents clients who get their shit together:</strong> <span className="text-lime-600 font-bold">50% success rate long-term.</span>
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why the difference?</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-gray-300 bg-white shadow-md">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">We can't control:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <X className="w-4 h-4 text-gray-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Whether you document your processes (most don't)</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-4 h-4 text-gray-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Whether you have patience for 60-90 days (most quit)</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-4 h-4 text-gray-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Whether you manage actively (most disappear)</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-4 h-4 text-gray-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Whether you delegate the right tasks (most don't know the difference)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-lime-300 bg-white shadow-md">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">We CAN control:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Quality of candidates (we show you real profiles)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Transparency (no hidden markup bullshit)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Tracking tools (see what they're actually doing)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Ongoing support (we're here when shit goes wrong)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-lime-100 rounded-lg p-6 border-l-4 border-lime-600">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">The 100% Success Formula:</h3>
          <p className="text-lg text-gray-900 mb-3"><strong>IF you:</strong></p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Document your processes BEFORE hiring</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Dedicate 5-10 hours/week management (first 90 days)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Have patience for 60-90 day ramp-up</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Delegate execution tasks (not strategy)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Use our tracking software</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Don't quit during frustration phase</span>
            </li>
          </ul>
          <p className="text-xl font-bold text-gray-900">THEN: It works. Every fucking time.</p>
          <p className="text-lg text-gray-700 mt-2">The problem: Most people don't do their part.</p>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed font-semibold">
          That's not on us. We're the middle man. We give you the tools, the candidates, the transparency, the tracking. You do the work. Or you don't. 50-50.
        </p>
      </div>
    </div>
  );
}

