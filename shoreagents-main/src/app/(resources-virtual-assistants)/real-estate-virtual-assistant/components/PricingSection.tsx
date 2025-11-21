import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, CheckCircle } from "lucide-react";

export function PricingSection() {
  return (
    <div data-section="pricing" className="bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl shadow-lg p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
        <DollarSign className="w-8 h-8 text-lime-600 mr-3" />
        The Pricing Reality: What You're Actually Paying
      </h2>

      <div className="space-y-6">
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          Every competitor hides what you're paying for. We show you the end price with everything included:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-lime-200 bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Entry Level Roles</h3>
              <div className="text-4xl font-bold text-lime-600 mb-2">$1,100-1,500</div>
              <p className="text-sm text-gray-600 mb-4">per month total</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Salary + Benefits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Management overhead</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Workspace infrastructure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Our business costs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Everything included</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-lime-200 bg-white shadow-md relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-lime-600 text-white px-4 py-1 font-semibold">Most Popular</Badge>
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Experienced Roles</h3>
              <div className="text-4xl font-bold text-lime-600 mb-2">$1,800-2,200</div>
              <p className="text-sm text-gray-600 mb-4">per month total</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Same inclusions as entry</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Higher salary tier</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Still transparent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Night differential factored in</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-3 italic">
                Note: "Experienced" means they worked for another client or company, NOT that we trained them
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What's included in that price:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-start">
                <DollarSign className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">The candidate's salary (Philippines market rates)</span>
              </li>
              <li className="flex items-start">
                <DollarSign className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Philippine mandatory benefits (SSS, PhilHealth, Pag-IBIG)</span>
              </li>
              <li className="flex items-start">
                <DollarSign className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Our management and support</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start">
                <DollarSign className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Infrastructure costs (office space, internet, equipment)</span>
              </li>
              <li className="flex items-start">
                <DollarSign className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Our business operations</span>
              </li>
              <li className="flex items-start">
                <DollarSign className="w-5 h-5 text-lime-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Our margin (we're a business, not charity)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-lime-100 rounded-lg p-6 border-l-4 border-lime-600">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Competitor comparison:</h3>
          <div className="space-y-2">
            <p className="text-gray-900">
              <strong>MyOutDesk:</strong> $1,988/month
            </p>
            <p className="text-gray-700 pl-4">• What's their cost breakdown? They won't tell you.</p>
            <p className="text-gray-700 pl-4">• What's their margin? Hidden.</p>
            <p className="text-gray-700 pl-4">• What are you paying for? Mystery.</p>
            
            <p className="text-gray-900 mt-4">
              <strong>Shore Agents:</strong> $1,100-2,200/month
            </p>
            <p className="text-gray-700 pl-4">• What's the breakdown? We'll show you if you ask.</p>
            <p className="text-gray-700 pl-4">• What are you paying for? Everything listed above.</p>
            <p className="text-gray-700 pl-4">• What's our margin? We're a business. It's factored in. End price is what matters.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 font-semibold">
            The difference: We're transparent about YOUR costs (what you pay). They hide everything and markup 40-50% without telling you.
          </p>
        </div>
      </div>
    </div>
  );
}

