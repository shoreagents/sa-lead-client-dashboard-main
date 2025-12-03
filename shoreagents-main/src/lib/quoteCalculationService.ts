import { getFixedSetupCost, getFixedWorkspaceCost, convertSalaryToCurrency, formatCurrency, getExperienceLevelMultiplier, CURRENCY_RATES } from './fixedPricingService';
import type { RoleDetail, QuoteData } from '@/components/pricing-calculator/types';

/**
 * Calculate a complete quote based on roles and workspace selection
 * With detailed console logging for debugging
 */
export function calculateQuote(
  roles: RoleDetail[],
  currency: string = 'USD',
  industry: string = ''
): QuoteData {
  console.log('\n🧮 ===== STARTING QUOTE CALCULATION =====');
  console.log('📋 Input Data:', { roles, currency, industry });
  
  let totalMonthlyCost = 0;
  let totalSetupCost = 0;
  let totalStaffCost = 0;
  let totalWorkspaceCost = 0;
  
  const breakdown = roles.map((role, index) => {
    console.log(`\n💼 --- Role ${index + 1}: ${role.title} ---`);
    console.log('   Workspace:', role.workspace);
    console.log('   Count:', role.count || 1);
    console.log('   Description:', role.description?.substring(0, 100) + '...');
    
    // AI would estimate PHP salary here - for now, using a default based on description length/complexity
    // In reality, this would call an AI API to analyze the role description
    const estimatedPHPSalary = estimateRoleSalary(role.title, role.description || '');
    console.log('   🤖 AI Estimated PHP Salary:', `₱${estimatedPHPSalary.toLocaleString()}`);
    
    // Determine experience level based on salary range (not time-based!)
    let experienceLevel: 'entry' | 'mid' | 'senior' = 'entry';
    if (estimatedPHPSalary >= 100000) {
      experienceLevel = 'senior';
    } else if (estimatedPHPSalary >= 40000) {
      experienceLevel = 'mid';
    }
    console.log('   📊 Experience Level (based on salary):', experienceLevel);
    
    // Get multiplier based on experience level
    const multiplier = getExperienceLevelMultiplier(experienceLevel);
    console.log('   ✖️  Multiplier:', multiplier);
    
    // Calculate PHP monthly cost (salary × multiplier)
    const phpMonthlyCost = estimatedPHPSalary * multiplier;
    console.log('   💰 PHP Monthly Cost:', `₱${phpMonthlyCost.toLocaleString()}`, `(₱${estimatedPHPSalary} × ${multiplier})`);
    
    // Convert to target currency
    const convertedStaffCost = convertSalaryToCurrency(phpMonthlyCost, currency);
    console.log('   💱 Converted Staff Cost:', formatCurrency(convertedStaffCost, currency));
    
    // Get fixed workspace and setup costs
    const workspaceCost = getFixedWorkspaceCost(role.workspace, currency);
    const setupCost = getFixedSetupCost(role.workspace, currency);
    console.log('   🏢 Workspace Cost:', formatCurrency(workspaceCost, currency), `(${role.workspace})`);
    console.log('   🔧 Setup Fee:', formatCurrency(setupCost, currency), `(${role.workspace})`);
    
    // Calculate total for this role
    const roleCount = role.count || 1;
    const roleTotalMonthlyCost = (convertedStaffCost + workspaceCost) * roleCount;
    const roleTotalSetupCost = setupCost * roleCount;
    
    console.log('   🔢 Role Count:', roleCount);
    console.log('   ✅ Total Monthly (per role):', formatCurrency(convertedStaffCost + workspaceCost, currency));
    console.log('   ✅ Total Monthly (all):', formatCurrency(roleTotalMonthlyCost, currency));
    console.log('   ✅ Total Setup (all):', formatCurrency(roleTotalSetupCost, currency));
    
    // Accumulate totals
    totalStaffCost += convertedStaffCost * roleCount;
    totalWorkspaceCost += workspaceCost * roleCount;
    totalMonthlyCost += roleTotalMonthlyCost;
    totalSetupCost += roleTotalSetupCost;
    
    return {
      role: role.title,
      level: experienceLevel,
      count: roleCount,
      baseSalary: estimatedPHPSalary,
      multiplier: multiplier,
      monthlyCost: convertedStaffCost,
      workspaceCost: workspaceCost,
      setupCost: setupCost,
      totalCost: convertedStaffCost + workspaceCost,
      isBPOCIntegrated: false,
      candidateCount: 0,
    };
  });
  
  const totalMembers = roles.reduce((sum, role) => sum + (role.count || 1), 0);
  
  console.log('\n📊 ===== FINAL QUOTE SUMMARY =====');
  console.log('👥 Total Team Members:', totalMembers);
  console.log('💵 Total Staff Cost (monthly):', formatCurrency(totalStaffCost, currency));
  console.log('🏢 Total Workspace Cost (monthly):', formatCurrency(totalWorkspaceCost, currency));
  console.log('💰 TOTAL MONTHLY COST:', formatCurrency(totalMonthlyCost, currency));
  console.log('🔧 TOTAL SETUP COST (one-time):', formatCurrency(totalSetupCost, currency));
  console.log('=====================================\n');
  
  return {
    totalMembers,
    roles,
    workplace: roles[0]?.workspace || 'office',
    workplaceBreakdown: getWorkplaceLabel(roles[0]?.workspace || 'office'),
    industry,
    sameRoles: roles.length === 1 && totalMembers > 1,
    totalMonthlyCost,
    totalWorkspaceCost,
    totalStaffCost,
    totalSetupCost,
    breakdown,
  };
}

/**
 * Estimate PHP salary based on role title and description
 * In production, this would call an AI API
 */
function estimateRoleSalary(title: string, description: string): number {
  console.log('   🧠 AI Analysis: Estimating salary...');
  
  // Simple heuristic for demo (in reality, this would use Claude/GPT)
  const titleLower = title.toLowerCase();
  const descLower = description.toLowerCase();
  
  // Senior indicators
  if (titleLower.includes('senior') || titleLower.includes('lead') || titleLower.includes('head') || titleLower.includes('director') || titleLower.includes('manager')) {
    return 120000; // ₱120k = Senior
  }
  
  // Technical/specialized roles
  if (titleLower.includes('developer') || titleLower.includes('engineer') || titleLower.includes('architect') || titleLower.includes('analyst')) {
    if (descLower.includes('senior') || descLower.includes('lead') || descLower.includes('5 years') || descLower.includes('10 years')) {
      return 110000; // ₱110k = Senior
    }
    return 55000; // ₱55k = Mid
  }
  
  // Marketing/Creative roles
  if (titleLower.includes('marketing') || titleLower.includes('designer') || titleLower.includes('content')) {
    if (descLower.includes('senior') || descLower.includes('lead') || descLower.includes('manager')) {
      return 100000; // ₱100k = Senior
    }
    return 45000; // ₱45k = Mid
  }
  
  // Admin/Support roles
  if (titleLower.includes('assistant') || titleLower.includes('support') || titleLower.includes('coordinator') || titleLower.includes('admin')) {
    return 28000; // ₱28k = Entry
  }
  
  // Default: Entry level
  return 30000; // ₱30k = Entry
}

function getWorkplaceLabel(workspace: string): string {
  switch (workspace) {
    case 'wfh':
      return 'Work From Home';
    case 'hybrid':
      return 'Hybrid';
    case 'office':
      return 'Private Office';
    default:
      return 'Private Office';
  }
}

