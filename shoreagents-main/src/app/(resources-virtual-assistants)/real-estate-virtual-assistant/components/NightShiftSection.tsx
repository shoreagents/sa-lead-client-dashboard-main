import { Card, CardContent } from "@/components/ui/card";
import { Moon, Sun, X, CheckCircle, DollarSign } from "lucide-react";

export function NightShiftSection() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <Moon className="w-8 h-8 text-lime-600 mr-3" />
        The Philippines Night Shift Problem (What Nobody Warns You About)
      </h2>
      <div className="space-y-6">
        <div className="bg-gray-100 rounded-lg p-6 shadow-md">
          <p className="text-lg text-gray-900 mb-4"><strong>Here's the reality for US agents:</strong></p>
          <p className="text-lg text-gray-700">Your 9am-5pm EST = Their 9pm-5am Manila. <strong>Night shift.</strong></p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What happens:</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <X className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">VA starts coming to office at 9pm</span>
            </li>
            <li className="flex items-start">
              <X className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Traffic in Manila at 9pm is a nightmare</span>
            </li>
            <li className="flex items-start">
              <X className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">They ask to work from home (fair enough)</span>
            </li>
            <li className="flex items-start">
              <X className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Now tracking them becomes really difficult</span>
            </li>
            <li className="flex items-start">
              <X className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">You're paying 10% night differential (Philippine labor law)</span>
            </li>
            <li className="flex items-start">
              <X className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Higher cost + harder to manage = you're flying blind</span>
            </li>
          </ul>
        </div>

        <Card className="border-lime-200 bg-lime-50 shadow-md">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">The night differential:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <DollarSign className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Philippines labor law requires 10% extra for night shift</span>
              </li>
              <li className="flex items-start">
                <DollarSign className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">That's factored into our pricing already</span>
              </li>
              <li className="flex items-start">
                <DollarSign className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Still cheaper than Latin America (Philippines $12/hr vs LatAm $18-20/hr)</span>
              </li>
              <li className="flex items-start">
                <DollarSign className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">But tracking home-based night shift workers? Good luck.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="bg-lime-100 rounded-lg p-6 border-l-4 border-lime-600">
          <p className="text-lg text-gray-900 mb-4">
            <strong>That's why we built specific tracking software to see what they're actually doing:</strong>
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Screen monitoring</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Activity tracking</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>Output verification</span>
            </li>
          </ul>
          <p className="text-gray-700 mt-3">Not perfect, but better than blind trust.</p>
        </div>

        <div className="bg-green-100 rounded-lg p-6 border-l-4 border-green-600">
          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <Sun className="w-6 h-6 text-green-600 mr-2" />
            For Australian/NZ agents (the advantage nobody talks about):
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Philippines is +2 to +4 hours ahead</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700"><strong>DAYTIME overlap</strong> - no night shift problems</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Time zones actually work for you vs fighting them</span>
            </li>
          </ul>
          <p className="text-gray-700 mt-3 font-semibold">This is why I moved operations to Clark in 2012</p>
        </div>
      </div>
    </div>
  );
}

