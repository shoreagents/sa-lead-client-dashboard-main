import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, XCircle, X } from "lucide-react";

export function FailureReality() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8 mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
        <AlertCircle className="w-10 h-10 text-lime-600 mr-3" />
        The 90% Failure Reality - Why It's Always a Dirty Game
      </h2>
      <p className="text-xl text-gray-700 mb-6 leading-relaxed font-semibold">
        Real talk: This is hiring and HR. It's a dirty game in ANY country. No different.
      </p>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">How they fail:</h3>
          
          <Card className="border-lime-200 bg-white mb-4 shadow-md">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <XCircle className="w-6 h-6 text-lime-600 mr-2" />
                The Client Messes Up
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <X className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-1" />
                  <span>No documented processes (expects VA to "just know")</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Unrealistic expectations ("trained and ready Day 1!")</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Quits during the 30-60 day frustration phase</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Delegates strategy instead of execution</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-1" />
                  <span>No systems, no patience, no management time</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-lime-200 bg-white mb-4 shadow-md">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <XCircle className="w-6 h-6 text-lime-600 mr-2" />
                The Staff Messes Up
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <X className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Doesn't show up (Day 1 no-shows happen)</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Performance drops after a few months</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Takes better offer and ghosts</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Works multiple clients, divided attention</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Lies about experience or availability</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <XCircle className="w-6 h-6 text-lime-600 mr-2" />
                Both Mess Up
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <X className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-1" />
                  <span>No clear communication</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Misaligned expectations</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Trust issues from the start</span>
                </li>
                <li className="flex items-start">
                  <X className="w-4 h-4 text-lime-600 mr-2 flex-shrink-0 mt-1" />
                  <span>No backup plan when it goes sideways</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-lime-100 rounded-lg p-6 border-l-4 border-lime-600">
          <p className="text-lg text-gray-900 mb-2">
            <strong>The advantage you're getting:</strong> Hiring someone in a country with lower living expenses.
          </p>
          <p className="text-lg text-gray-900">
            <strong>What did you expect?</strong> Perfection? Economics are lower because the country is different, not because people are desperate. They have options too.
          </p>
        </div>

        <div className="space-y-3 text-gray-700">
          <p className="font-semibold text-xl">The pattern I've seen:</p>
          <ul className="space-y-2 pl-4">
            <li><strong>Best case:</strong> 7 years (longest VA I've seen - sales admin role, everything done right, luck played a part)</li>
            <li><strong>Worst case:</strong> Day 1 no-show</li>
            <li><strong>Common:</strong> 3-6 months then they take better offer</li>
          </ul>
          <p className="text-lg font-semibold mt-4">
            Does this mean it won't work out? No. But you better have your processes together or you're part of the 90%.
          </p>
        </div>
      </div>
    </div>
  );
}

