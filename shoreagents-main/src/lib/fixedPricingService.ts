// Fixed pricing structure based on Shore Agents Final Pricing Structure
// Exact prices for each currency as per the pricing document

export interface FixedPricing {
  setupFees: {
    wfh: number;
    hybrid: number;
    office: number;
  };
  workspaceFees: {
    wfh: number;
    hybrid: number;
    office: number;
  };
}

// Fixed prices for each currency (exact values from pricing structure)
export const FIXED_PRICES: Record<string, FixedPricing> = {
  AUD: {
    setupFees: {
      wfh: 1650,
      hybrid: 1250,
      office: 850
    },
    workspaceFees: {
      wfh: 200,
      hybrid: 300,
      office: 400
    }
  },
  USD: {
    setupFees: {
      wfh: 1100,
      hybrid: 850,
      office: 550
    },
    workspaceFees: {
      wfh: 150,
      hybrid: 220,
      office: 290
    }
  },
  GBP: {
    setupFees: {
      wfh: 850,
      hybrid: 650,
      office: 450
    },
    workspaceFees: {
      wfh: 120,
      hybrid: 170,
      office: 230
    }
  },
  CAD: {
    setupFees: {
      wfh: 1450,
      hybrid: 1100,
      office: 750
    },
    workspaceFees: {
      wfh: 200,
      hybrid: 300,
      office: 400
    }
  },
  NZD: {
    setupFees: {
      wfh: 1750,
      hybrid: 1350,
      office: 900
    },
    workspaceFees: {
      wfh: 230,
      hybrid: 340,
      office: 450
    }
  },
  EUR: {
    setupFees: {
      wfh: 1050,
      hybrid: 800,
      office: 550
    },
    workspaceFees: {
      wfh: 140,
      hybrid: 210,
      office: 280
    }
  },
  PHP: {
    setupFees: {
      wfh: 61050,  // $1,100 USD converted to PHP
      hybrid: 47175, // $850 USD converted to PHP
      office: 30525  // $550 USD converted to PHP
    },
    workspaceFees: {
      wfh: 8325,   // $150 USD converted to PHP
      hybrid: 12210, // $220 USD converted to PHP
      office: 16115  // $290 USD converted to PHP
    }
  }
};

// Currency conversion rates (USD to other currencies for salary conversion)
export const CURRENCY_RATES: Record<string, number> = {
  USD: 1.0,
  AUD: 1.5,    // 1 USD = 1.5 AUD
  GBP: 0.77,   // 1 USD = 0.77 GBP
  CAD: 1.32,   // 1 USD = 1.32 CAD
  NZD: 1.59,   // 1 USD = 1.59 NZD
  EUR: 0.95,   // 1 USD = 0.95 EUR
  PHP: 55.5    // 1 USD = 55.5 PHP
};

export function getFixedSetupCost(workspace: 'wfh' | 'hybrid' | 'office', currency: string = 'USD'): number {
  const pricing = FIXED_PRICES[currency] || FIXED_PRICES.USD;
  return pricing.setupFees[workspace];
}

export function getFixedWorkspaceCost(workspace: 'wfh' | 'hybrid' | 'office', currency: string = 'USD'): number {
  const pricing = FIXED_PRICES[currency] || FIXED_PRICES.USD;
  return pricing.workspaceFees[workspace];
}

export function convertSalaryToCurrency(phpSalary: number, targetCurrency: string): number {
  // Convert PHP salary to USD first, then to target currency
  const usdSalary = phpSalary / CURRENCY_RATES.PHP; // PHP to USD
  const targetRate = CURRENCY_RATES[targetCurrency] || 1.0;
  return usdSalary * targetRate;
}

export function formatCurrency(amount: number, currency: string): string {
  const symbols: Record<string, string> = {
    USD: '$',
    AUD: 'A$',
    GBP: '£',
    CAD: 'C$',
    NZD: 'NZ$',
    EUR: '€',
    PHP: '₱'
  };
  
  const symbol = symbols[currency] || '$';
  const roundedAmount = Math.round(amount);
  return `${symbol}${roundedAmount.toLocaleString()}`;
}

// Get multiplier based on experience level (same as pricing calculator)
export function getExperienceLevelMultiplier(level: 'entry' | 'mid' | 'senior'): number {
  switch (level) {
    case 'entry': return 1.7;
    case 'mid': return 1.5;
    case 'senior': return 1.4;
    default: return 1.7;
  }
}

/**
 * Calculate the monthly cost to client based on candidate's expected salary
 * Uses the SAME formula as the pricing calculator:
 * Monthly Cost = (Salary * Multiplier) + Workspace Cost
 * 
 * @param expectedSalaryPhp - Candidate's expected salary in PHP from their BPOC profile
 * @param level - Experience level ('entry', 'mid', or 'senior')
 * @param workspace - Workspace type ('wfh', 'hybrid', or 'office')
 * @param targetCurrency - Currency to display cost in (USD, AUD, GBP, etc.)
 * @returns Monthly cost to client in the target currency
 */
export function calculateCandidateMonthlyCost(
  expectedSalaryPhp: number,
  level: 'entry' | 'mid' | 'senior' = 'mid',
  workspace: 'wfh' | 'hybrid' | 'office' = 'wfh',
  targetCurrency: string = 'USD'
): number {
  // IMPORTANT: Expected salary from BPOC is likely MONTHLY, not yearly
  // But we need to make sure it's reasonable (between 20k-200k PHP/month)
  
  // Sanity check - if salary is absurdly high, it might be yearly, so divide by 12
  let monthlySalaryPhp = expectedSalaryPhp;
  if (expectedSalaryPhp > 300000) {
    // Likely a yearly salary or bad data
    console.warn('⚠️ Suspiciously high salary detected, assuming yearly:', expectedSalaryPhp);
    monthlySalaryPhp = expectedSalaryPhp / 12;
  }
  
  // Get the multiplier based on experience level
  const multiplier = getExperienceLevelMultiplier(level);
  
  // Convert PHP MONTHLY salary to target currency
  const monthlySalaryInTargetCurrency = convertSalaryToCurrency(monthlySalaryPhp, targetCurrency);
  
  // Calculate staff cost (monthly salary * multiplier)
  const staffCost = monthlySalaryInTargetCurrency * multiplier;
  
  // Get workspace cost in target currency
  const workspaceCost = getFixedWorkspaceCost(workspace, targetCurrency);
  
  // Total monthly cost = staff cost + workspace cost
  const totalMonthlyCost = staffCost + workspaceCost;
  
  console.log('💰 Calculating candidate monthly cost:', {
    originalSalaryPhp: expectedSalaryPhp,
    monthlySalaryPhp,
    monthlySalaryInTargetCurrency: Math.round(monthlySalaryInTargetCurrency),
    level,
    multiplier,
    staffCost: Math.round(staffCost),
    workspace,
    workspaceCost,
    totalMonthlyCost: Math.round(totalMonthlyCost),
    currency: targetCurrency
  });
  
  return totalMonthlyCost;
}
