'use client';

import { Building, Home, Laptop } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { StepProps } from '../types';

export function Step4WorkspaceSetup({ formData, updateFormData }: StepProps) {
  const { memberCount, firstName, roles } = formData;

  // Get workspace from first role (they all share the same workspace in our simplified model)
  const currentWorkspace = roles[0]?.workspace || 'office';

  // Conversational greeting
  const greeting = firstName ? `${firstName}, ` : '';

  const workspaceOptions = [
    {
      id: 'wfh',
      icon: Home,
      title: 'Work From Home',
      description: 'Team works remotely from their own homes',
      available: true,
    },
    {
      id: 'hybrid',
      icon: Laptop,
      title: 'Hybrid',
      description: 'Flexible mix of office and remote work',
      available: true,
    },
    {
      id: 'office',
      icon: Building,
      title: 'Full Office',
      description: 'Individual desk in our shared office space',
      available: true,
    },
  ];

  const handleWorkspaceSelect = (workspace: 'wfh' | 'hybrid' | 'office') => {
    // Update all roles with the selected workspace
    const updatedRoles = roles.map(role => ({ ...role, workspace }));
    updateFormData({ roles: updatedRoles });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <Building className="w-12 h-12 text-lime-600 mx-auto mb-3" />
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          {greeting}How would you like your team to work?
        </h3>
        <p className="text-gray-600">
          Choose the workspace setup that fits your business needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {workspaceOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = currentWorkspace === option.id;
          const isAvailable = option.available;

          return (
            <Card
              key={option.id}
              className={`p-6 cursor-pointer transition-all ${
                !isAvailable
                  ? 'opacity-50 cursor-not-allowed bg-gray-50'
                  : isSelected
                  ? 'border-2 border-lime-500 bg-lime-50 shadow-lg scale-105'
                  : 'border-2 border-gray-200 hover:border-lime-300 hover:shadow-md'
              }`}
              onClick={() => isAvailable && handleWorkspaceSelect(option.id as 'wfh' | 'hybrid' | 'office')}
            >
              <div className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    isSelected ? 'bg-lime-600' : 'bg-gray-200'
                  }`}
                >
                  <Icon className={`w-8 h-8 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                {isSelected && (
                  <div className="mt-3 inline-block px-3 py-1 bg-lime-600 text-white text-xs font-semibold rounded-full">
                    Selected ✓
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Lease Space Option for 10+ staff */}
      {(memberCount || 0) >= 10 && (
        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-lg">
          <div className="flex items-start gap-4">
            <Building className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-purple-900 mb-2">
                🏢 Want Your Own Private Office ROOM?
              </h4>
              <p className="text-sm text-purple-800 mb-3">
                With {memberCount} team members, you qualify for a <strong>Lease Space</strong> - your own private office room! 
                No individual workspace fees - staff pay setup + salary multiplier only. Use the space however you want 
                (hybrid, hot-desking, full-time). Way more cost-effective for larger teams!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-4">
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-purple-900">40m² Office</p>
                  <p className="text-xs text-purple-700">10-15 seats</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-purple-900">60m² Office</p>
                  <p className="text-xs text-purple-700">15-25 seats</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-purple-900">100m² Office</p>
                  <p className="text-xs text-purple-700">25-40 seats</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="font-semibold text-purple-900">200m² Office</p>
                  <p className="text-xs text-purple-700">50+ seats</p>
                </div>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <p className="text-xs text-purple-900 font-semibold">
                  💡 Lease Space Benefits:
                </p>
                <ul className="text-xs text-purple-800 mt-2 space-y-1">
                  <li>✓ No individual workspace fees (huge savings!)</li>
                  <li>✓ Flexible usage: 20-seat office can fit 40 staff on hybrid schedule</li>
                  <li>✓ Complete control - arrange it however you want</li>
                  <li>✓ Grow your team without changing offices</li>
                </ul>
              </div>
              <p className="text-xs text-purple-700 mt-3">
                📊 We'll show you both options in your quote so you can compare!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Default to Office Info */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-900">
          <strong>💡 Recommended:</strong> Most clients choose <strong>Full Office</strong> (individual desk) for better
          productivity, team collaboration, and professional workspace. It's the default option!
        </p>
      </div>
    </div>
  );
}

