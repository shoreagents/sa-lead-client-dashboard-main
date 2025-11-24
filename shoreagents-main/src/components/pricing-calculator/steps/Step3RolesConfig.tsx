'use client';

import { useState, useEffect } from 'react';
import { Briefcase, Sparkles, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AIRoleAutocomplete } from '@/components/ui/ai-role-autocomplete';
import { AIDescriptionGenerator } from '@/components/ui/ai-description-generator';
import { useCurrency } from '@/lib/currencyContext';
import type { StepProps, RoleDetail } from '../types';

export function Step3RolesConfig({ formData, updateFormData }: StepProps) {
  const { memberCount, industry, firstName, roles } = formData;
  const { selectedCurrency } = useCurrency();
  
  const [sameForAll, setSameForAll] = useState(true);
  const [editingRoleId, setEditingRoleId] = useState<string | null>(null);

  // Initialize roles based on memberCount
  useEffect(() => {
    if (memberCount && roles.length === 0) {
      const initialRole: RoleDetail = {
        id: '1',
        title: '',
        description: '',
        level: 'entry', // Will be calculated by AI based on salary
        count: sameForAll ? memberCount : 1,
        workspace: 'office', // Default to office
        isCompleted: false,
      };
      updateFormData({ roles: [initialRole] });
    }
  }, [memberCount, roles.length, sameForAll, updateFormData]);

  // Update role count when sameForAll changes
  useEffect(() => {
    if (roles.length > 0 && sameForAll) {
      const updatedRoles = [{ ...roles[0], count: memberCount || 1 }];
      updateFormData({ roles: updatedRoles });
    }
  }, [sameForAll, memberCount]);

  const updateRole = (id: string, field: keyof RoleDetail, value: any) => {
    const updatedRoles = roles.map(role =>
      role.id === id ? { ...role, [field]: value } : role
    );
    updateFormData({ roles: updatedRoles });
  };

  const addIndividualRole = () => {
    if (!sameForAll && roles.reduce((sum, r) => sum + (r.count || 1), 0) < (memberCount || 0)) {
      const newRole: RoleDetail = {
        id: `${roles.length + 1}`,
        title: '',
        description: '',
        level: 'entry',
        count: 1,
        workspace: 'office',
        isCompleted: false,
      };
      updateFormData({ roles: [...roles, newRole] });
      setEditingRoleId(newRole.id);
    }
  };

  const deleteRole = (id: string) => {
    if (roles.length > 1) {
      const updatedRoles = roles.filter(r => r.id !== id);
      updateFormData({ roles: updatedRoles });
      setEditingRoleId(updatedRoles[0]?.id || null);
    }
  };

  const handleSameForAllToggle = () => {
    const newValue = !sameForAll;
    setSameForAll(newValue);
    
    if (newValue) {
      // Consolidate to single role with count = memberCount
      const firstRole = roles[0] || {
        id: '1',
        title: '',
        description: '',
        level: 'entry',
        count: memberCount || 1,
        workspace: 'office',
        isCompleted: false,
      };
      updateFormData({ roles: [{ ...firstRole, count: memberCount || 1 }] });
    } else {
      // Keep first role, set count to 1
      const firstRole = roles[0];
      if (firstRole) {
        updateFormData({ roles: [{ ...firstRole, count: 1 }] });
      }
    }
  };

  const totalRolesConfigured = roles.reduce((sum, r) => sum + (r.count || 1), 0);
  const remainingRoles = (memberCount || 0) - totalRolesConfigured;

  // Conversational greeting
  const greeting = firstName ? `Perfect, ${firstName}! ` : 'Great! ';

  return (
    <div className="max-w-4xl mx-auto">
      {/* Conversational Header */}
      <div className="text-center mb-6">
        <Briefcase className="w-12 h-12 text-lime-600 mx-auto mb-3" />
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          {greeting}Let's talk about the roles you need
        </h3>
        <p className="text-gray-600">
          Our AI will analyze your requirements and provide accurate pricing
        </p>
      </div>

      {/* Same For All Toggle */}
      <Card className="p-4 mb-6 bg-gradient-to-r from-lime-50 to-green-50 border-lime-200">
        <div className="flex items-start space-x-3">
          <div className="pt-1">
            <Sparkles className="w-5 h-5 text-lime-600" />
          </div>
          <div className="flex-1">
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                checked={sameForAll}
                onChange={handleSameForAllToggle}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-lime-600 transition-colors">
                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
              </div>
              <span className="ml-3 text-sm font-semibold text-gray-900">
                {sameForAll
                  ? `All ${memberCount || 0} team members will have the same role`
                  : 'Each team member will have a different role'}
              </span>
            </label>
            <p className="text-xs text-gray-600 mt-1 ml-14">
              {sameForAll
                ? 'Perfect for scaling a single position (e.g., 5 Customer Service Reps)'
                : 'Build a diverse team with different skill sets'}
            </p>
          </div>
        </div>
      </Card>

      {/* Role Configuration */}
      <div className="space-y-4">
        {roles.map((role, index) => (
          <Card key={role.id} className="p-4 border-2 border-gray-200 hover:border-lime-300 transition-all">
            {/* Role Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-lime-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{sameForAll ? memberCount : role.count || 1}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {sameForAll ? `All ${memberCount} Roles` : `Role ${index + 1}`}
                </h4>
              </div>
              {!sameForAll && roles.length > 1 && (
                <Button
                  onClick={() => deleteRole(role.id)}
                  variant="ghost"
                  size="sm"
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>

            {/* AI Role Input */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What position are you hiring for? ✨
                </label>
                <AIRoleAutocomplete
                  value={role.title}
                  onChange={(value) => updateRole(role.id, 'title', value)}
                  industry={industry}
                  placeholder="e.g., Customer Service Representative, Marketing Assistant..."
                  id={`title-${role.id}`}
                  currency={selectedCurrency.code}
                />
              </div>

              {/* AI Description Generator */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us what they'll be doing ✨
                </label>
                <AIDescriptionGenerator
                  value={role.description || ''}
                  onChange={(value) => updateRole(role.id, 'description', value)}
                  roleTitle={role.title}
                  industry={industry}
                  label=""
                  id={`description-${role.id}`}
                  currency={selectedCurrency.code}
                />
                <p className="text-xs text-gray-500 mt-2">
                  💡 Our AI will analyze this and estimate the market salary in the Philippines
                </p>
              </div>
            </div>
          </Card>
        ))}

        {/* Add Individual Role Button */}
        {!sameForAll && remainingRoles > 0 && (
          <Button
            onClick={addIndividualRole}
            variant="outline"
            className="w-full border-2 border-dashed border-gray-300 hover:border-lime-500 hover:bg-lime-50 py-6"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Another Role ({remainingRoles} remaining)
          </Button>
        )}

        {/* Info Card */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-900">
            <strong>💡 How it works:</strong> Our AI analyzes your role descriptions and compares them to
            current Philippine BPO market rates. You'll get accurate, real-time pricing based on actual
            market data - no guesswork!
          </p>
        </div>
      </div>
    </div>
  );
}

