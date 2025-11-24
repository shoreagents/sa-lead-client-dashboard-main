export interface RoleDetail {
  id: string;
  title: string;
  description?: string;
  level: 'entry' | 'mid' | 'senior';
  count: number;
  workspace?: 'wfh' | 'hybrid' | 'office';
  isCompleted?: boolean;
  candidateMatch?: {
    totalCandidates: number;
    recommendedCandidates: unknown[];
  };
  isBPOCIntegrated?: boolean;
}

export interface QuoteData {
  totalMembers: number;
  roles: RoleDetail[];
  workplace: string;
  workplaceBreakdown: string;
  industry: string;
  sameRoles: boolean;
  totalMonthlyCost: number;
  totalWorkspaceCost: number;
  totalStaffCost: number;
  totalSetupCost: number;
  breakdown: Array<{
    role: string;
    level: string;
    count: number;
    baseSalary: number;
    multiplier: number;
    monthlyCost: number;
    workspaceCost: number;
    setupCost: number;
    totalCost: number;
    isBPOCIntegrated?: boolean;
    candidateCount?: number;
  }>;
}

export interface PricingFormData {
  // Step 1
  memberCount: number | null;
  
  // Step 2 - Lead Capture Stage 1
  industry: string;
  company: string;
  businessGoals: string;
  
  // Step 3 - Roles
  sameRoles: boolean;
  roles: RoleDetail[];
  
  // Step 4 - Lead Capture Stage 2 (optional)
  firstName: string;
  lastName: string;
  email: string;
  stage2Skipped: boolean;
  
  // Step 5 - Quote
  quoteData: QuoteData | null;
}

export interface StepProps {
  formData: PricingFormData;
  updateFormData: (updates: Partial<PricingFormData>) => void;
  onNext: () => void;
  onBack: () => void;
  isProcessing?: boolean;
}

