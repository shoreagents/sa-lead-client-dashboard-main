import { useQuery, useMutation, useQueryClient, QueryClient } from '@tanstack/react-query';
import { EmployeeCardData } from '@/types/api';

// Cache clearing utility
export const clearAllCaches = (queryClient: QueryClient) => {
  console.log('🧹 Clearing all TanStack Query caches...')
  queryClient.clear()
  console.log('✅ All caches cleared')
};

// Chat Types
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  contextSnapshot?: any;
}

export interface ChatConversation {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  messageCount: number;
  conversationType: 'anonymous' | 'authenticated';
  contextData?: any;
  migratedAt?: Date;
}

export interface ConversationContext {
  deviceId: string;
  userId?: string;
  conversationType: 'anonymous' | 'authenticated';
  title: string;
  contextData: {
    userPreferences: any;
    conversationHistory: any;
    systemState: any;
    metadata: any;
  };
  contextSnapshot: any;
}

// Types
interface UserFormStatus {
  hasFilledForm: boolean;
  userExists: boolean;
  hasAccount: boolean;
  userType: string | null;
  company: string | null;
  industry: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  user_id: string;
}

interface AnonymousUserData {
  user_id: string;
  industry: string;
  company?: string;
}

interface AutocompleteData {
  query: string;
  user_id: string;
  type?: string;
  industry?: string;
  roleTitle?: string;
  generateAnother?: boolean;
  generationCount?: number;
}

export interface AISuggestion {
  title: string;
  description: string;
  level: string;
}

interface SignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  company: string;
  country: string;
}

interface CheckEmailData {
  email: string;
}

interface InterviewRequestData {
  candidateId: string;
  candidateName: string;
  candidatePosition: string;
  requesterFirstName: string;
  requesterLastName: string;
  requesterEmail: string;
  user_id: string;
}

interface DeleteQuotationData {
  quoteId: string;
}

interface PricingProgressData {
  step: number;
  data: any;
  user_id: string;
  quote_id?: string;
}

// API Functions
const fetchUserFormStatus = async (userId: string): Promise<UserFormStatus> => {
  const response = await fetch(`/api/check-user-form-status?user_id=${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user form status');
  }
  return response.json();
};

const submitContactForm = async (data: ContactFormData): Promise<unknown> => {
  const response = await fetch('/api/contact-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to submit contact form');
  }
  
  return response.json();
};

const submitAnonymousUserData = async (data: AnonymousUserData): Promise<unknown> => {
  const response = await fetch('/api/anonymous-user-inquiry', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to submit anonymous user data');
  }
  
  return response.json();
};

const fetchAutocompleteSuggestions = async (data: AutocompleteData): Promise<AISuggestion[] | string> => {
  try {
  const response = await fetch('/api/autocomplete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: data.query,
      user_id: data.user_id,
      type: data.type, // Use the exact type passed
      industry: data.industry,
      roleTitle: data.roleTitle,
      generateAnother: data.generateAnother,
      generationCount: data.generationCount
    }),
  });
  
  if (!response.ok) {
      // Try to get error details from response
      let errorMessage = 'Failed to fetch autocomplete suggestions';
      try {
        const errorData = await response.json();
        if (errorData.error) {
          errorMessage = errorData.error;
          if (errorData.details) {
            errorMessage += `: ${errorData.details}`;
          }
        }
      } catch (parseError) {
        // If we can't parse the error, use the status text
        errorMessage = `Failed to fetch autocomplete suggestions: ${response.status} ${response.statusText}`;
      }
      const errorDetails = {
        status: response.status,
        statusText: response.statusText,
        message: errorMessage,
        query: data.query,
        type: data.type
      };
      console.error('❌ Autocomplete API error:', JSON.stringify(errorDetails, null, 2));
      throw new Error(errorMessage);
  }
  
  const result = await response.json();
    
    // Check if the result is an error object
    if (result && typeof result === 'object' && result.error) {
      const errorInfo = {
        error: result.error,
        details: result.details,
        query: data.query,
        type: data.type
      };
      console.error('❌ Autocomplete API returned error:', JSON.stringify(errorInfo, null, 2));
      throw new Error(result.error + (result.details ? `: ${result.details}` : ''));
    }
  
  // For description type, return the string directly
  if (data.type === 'description') {
    return result;
  }
  
  // For other types, return the suggestions array
  return result;
  } catch (error) {
    // Log the full error details
    const errorInfo = {
      message: error instanceof Error ? error.message : String(error),
      name: error instanceof Error ? error.name : 'Unknown',
      stack: error instanceof Error ? error.stack : undefined,
      query: data.query,
      type: data.type
    };
    console.error('❌ Autocomplete fetch error:', JSON.stringify(errorInfo, null, 2));
    
    // Re-throw if it's already an Error with a message
    if (error instanceof Error) {
      throw error;
    }
    // Otherwise wrap it
    throw new Error(`Failed to fetch autocomplete suggestions: ${String(error)}`);
  }
};

const checkEmailExists = async (data: CheckEmailData): Promise<{ exists: boolean }> => {
  const response = await fetch('/api/auth/check-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to check email');
  }
  
  return response.json();
};

const signupUser = async (data: SignupData): Promise<unknown> => {
  const response = await fetch('/api/auth/signup-simple', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create account');
  }
  
  return response.json();
};

const submitInterviewRequest = async (data: InterviewRequestData): Promise<unknown> => {
  const response = await fetch('/api/interview-request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to submit interview request');
  }
  
  return response.json();
};

const deleteQuotation = async (data: DeleteQuotationData): Promise<unknown> => {
  const response = await fetch(`/api/pricing-quotes/${data.quoteId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete quotation');
  }
  
  return response.json();
};

const savePricingProgress = async (data: PricingProgressData): Promise<unknown> => {
  console.log('🚀 TanStack Query: Calling savePricingProgress with:', data);
  
  const response = await fetch('/api/pricing-progress', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  console.log('📡 TanStack Query: API response status:', response.status);
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
    console.error('❌ TanStack Query: API error response:', errorData);
    throw new Error(`Failed to save pricing progress: ${errorData.error || 'Unknown error'}`);
  }
  
  const result = await response.json();
  console.log('✅ TanStack Query: API success response:', result);
  return result;
};

// Custom Hooks
export const useUserFormStatus = (userId: string) => {
  return useQuery({
    queryKey: ['userFormStatus', userId],
    queryFn: () => fetchUserFormStatus(userId),
    enabled: !!userId,
    staleTime: 30 * 1000, // 30 seconds (reduced from 5 minutes)
    gcTime: 2 * 60 * 1000, // 2 minutes
  });
};

export const useContactFormMutation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: submitContactForm,
    onSuccess: (data, variables) => {
      // Invalidate and refetch user form status
      queryClient.invalidateQueries({ 
        queryKey: ['userFormStatus', variables.user_id] 
      });
    },
  });
};

export const useAnonymousUserMutation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: submitAnonymousUserData,
    onSuccess: (data, variables) => {
      // Invalidate and refetch user form status
      queryClient.invalidateQueries({ 
        queryKey: ['userFormStatus', variables.user_id] 
      });
    },
  });
};

export const useAutocompleteSuggestions = (
  query: string, 
  userId: string, 
  enabled: boolean = true,
  type: string = 'role',
  industry?: string,
  roleTitle?: string,
  generateAnother?: boolean,
  generationCount?: number
) => {
  return useQuery<AISuggestion[] | string>({
    queryKey: ['autocomplete', query, userId, type, industry, roleTitle, generateAnother, generationCount],
    queryFn: () => fetchAutocompleteSuggestions({ 
      query, 
      user_id: userId,
      type,
      industry,
      roleTitle,
      generateAnother,
      generationCount
    }),
    enabled: enabled && query.length >= 2, // Only fetch if query is 2 or more characters
    staleTime: 30 * 1000, // 30 seconds (reduced from 5 minutes)
    gcTime: 2 * 60 * 1000, // 2 minutes (reduced from 10 minutes)
    refetchOnWindowFocus: false, // Prevent refetch on window focus
    retry: 1, // Only retry once on failure
    retryDelay: 2000, // Wait 2 seconds before retry
  });
};

export const useCheckEmailMutation = () => {
  return useMutation({
    mutationFn: checkEmailExists,
  });
};

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: signupUser,
  });
};

export const useInterviewRequestMutation = () => {
  return useMutation({
    mutationFn: submitInterviewRequest,
  });
};

export const useDeleteQuotationMutation = () => {
  return useMutation({
    mutationFn: deleteQuotation,
  });
};

// BPOC Employee Data Hooks
interface BPOCUser {
  user_id: string;
  first_name: string;
  last_name: string;
  full_name: string;
  location: string;
  avatar_url: string | null;
  bio: string | null;
  position: string | null;
  current_position: string | null;
  work_status: string | null;
  expected_salary: string | null;
  user_created_at: string;
  overall_score: number | null;
  skills_snapshot: string[];
  experience_snapshot: unknown;
  key_strengths: string[];
  improvements: string[];
  recommendations: string[];
  improved_summary: string | null;
  strengths_analysis: Record<string, unknown> | null;
}

const fetchBPOCEmployeeData = async (): Promise<BPOCUser[]> => {
  // Fetch data from API route (server-side database access)
  const response = await fetch('/api/bpoc-users');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(`API error: ${result.error || 'Unknown error'}`);
  }
  
  const bpocUsers = result.data;
  
  // Convert to BPOCUser format
  return bpocUsers.map((user: any) => ({
    user_id: user.user_id,
    first_name: user.first_name,
    last_name: user.last_name,
    full_name: user.full_name,
    location: user.location,
    avatar_url: user.avatar_url,
    bio: user.bio,
    position: user.position,
    current_position: user.current_position,
    work_status: user.work_status,
    expected_salary: user.expected_salary,
    user_created_at: user.user_created_at,
    overall_score: user.overall_score,
    skills_snapshot: user.skills_snapshot || [],
    experience_snapshot: user.experience_snapshot,
    key_strengths: user.key_strengths || [],
    improvements: user.improvements || [],
    recommendations: user.recommendations || [],
    improved_summary: user.improved_summary,
    strengths_analysis: user.strengths_analysis
  }));
};

export const useBPOCEmployeeData = () => {
  return useQuery({
    queryKey: ['bpoc-employees'],
    queryFn: fetchBPOCEmployeeData,
    staleTime: 2 * 60 * 1000, // 2 minutes (reduced from 5 minutes)
    gcTime: 3 * 60 * 1000, // 3 minutes (reduced from 10 minutes)
    retry: 2, // Retry failed requests 2 times (reduced from 3)
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 5000), // Max 5 seconds (reduced from 30)
    refetchOnWindowFocus: false, // Don't refetch on window focus
    refetchOnMount: false, // Don't refetch on component mount (changed from true)
  });
};

export const useBPOCEmployeeById = (employeeId: string) => {
  return useQuery<BPOCUser>({
    queryKey: ['bpoc-employee', employeeId],
    queryFn: async () => {
      const employees = await fetchBPOCEmployeeData();
      const employee = employees.find(emp => emp.user_id === employeeId);
      if (!employee) {
        throw new Error('Employee not found');
      }
      return employee;
    },
    enabled: !!employeeId,
    staleTime: 2 * 60 * 1000, // 2 minutes (reduced from 5 minutes)
    gcTime: 3 * 60 * 1000, // 3 minutes (reduced from 10 minutes)
    retry: 2, // Retry failed requests 2 times (reduced from 3)
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 5000), // Max 5 seconds (reduced from 30)
    refetchOnWindowFocus: false, // Don't refetch on window focus
  });
};

// Employee Card Data Hook for Talent Pool - Now using BPOC database via API
const fetchEmployeeCardData = async (): Promise<EmployeeCardData[]> => {
  // Fetch data from API route (server-side database access)
  const response = await fetch('/api/bpoc-users');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(`API error: ${result.error || 'Unknown error'}`);
  }
  
  const bpocUsers = result.data;
  
  // Convert BPOC database data to EmployeeCardData format
  return bpocUsers.map((bpocUser: any) => {
    const candidateProfile = bpocUser.candidate_profile as Record<string, unknown>;
    const email = candidateProfile?.email as string || '';

    // Debug: Log data transformation for Lovell Siron
    if (bpocUser.full_name?.toLowerCase().includes('lovell') && bpocUser.last_name?.toLowerCase().includes('siron')) {
      console.log('🔍 Transforming Lovell Siron data:', {
        skills_snapshot: bpocUser.skills_snapshot,
        experience_snapshot: bpocUser.experience_snapshot,
        expected_salary: bpocUser.expected_salary,
        work_status: bpocUser.work_status
      });
    }

    return {
      user: {
        id: bpocUser.user_id,
        name: bpocUser.first_name,
        email: email,
        position: bpocUser.position || bpocUser.current_position || '',
        location: bpocUser.location,
        avatar: bpocUser.avatar_url,
        bio: bpocUser.bio,
        work_status: bpocUser.work_status,
        created_at: bpocUser.user_created_at || new Date().toISOString(),
        updated_at: new Date().toISOString(),
        score: bpocUser.overall_score || 0,
        skills: bpocUser.skills_snapshot || [],
        experience: (() => {
          if (!bpocUser.experience_snapshot || !Array.isArray(bpocUser.experience_snapshot)) {
            return 'Experience not specified';
          }
          
          // Helper function to parse date strings like "July 2022", "Jan 2020", etc.
          const parseDateString = (dateStr: string): Date | null => {
            try {
              // Try parsing as-is first
              const parsed = new Date(dateStr);
              if (!isNaN(parsed.getTime())) {
                return parsed;
              }
              
              // Try common formats
              const monthNameMatch = dateStr.match(/^(\w+)\s+(\d{4})$/i); // "July 2022"
              if (monthNameMatch) {
                const monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 
                                  'july', 'august', 'september', 'october', 'november', 'december'];
                const monthIndex = monthNames.findIndex(m => dateStr.toLowerCase().startsWith(m));
                if (monthIndex !== -1) {
                  return new Date(parseInt(monthNameMatch[2]), monthIndex, 1);
                }
              }
              
              return null;
            } catch {
              return null;
            }
          };
          
          // Calculate total years from experience records
          let totalYears = 0;
          const now = new Date();
          
          bpocUser.experience_snapshot.forEach((exp: any) => {
            if (exp.duration) {
              const durationStr = String(exp.duration);
              
              // Check if it's a date range format (e.g., "July 2022 - Present", "Jan 2020 - Dec 2022")
              if (durationStr.includes(' - ') || durationStr.includes(' to ')) {
                const parts = durationStr.split(/ - | to /i);
                if (parts.length === 2) {
                  const startStr = parts[0].trim();
                  const endStr = parts[1].trim();
                  
                  // Try to parse start date
                  const startDate = parseDateString(startStr);
                  if (startDate) {
                    // Check if end is "Present" or "Current"
                    const endDate = (endStr.toLowerCase() === 'present' || endStr.toLowerCase() === 'current') 
                      ? now 
                      : parseDateString(endStr) || now;
                    
                    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
                    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365);
                    totalYears += diffYears;
                  }
                }
              } else {
                // Try to parse duration string (e.g., "2 years", "1 year 6 months", "18 months")
                const durationLower = durationStr.toLowerCase();
                const yearsMatch = durationLower.match(/(\d+)\s*years?/);
                const monthsMatch = durationLower.match(/(\d+)\s*months?/);
                
                if (yearsMatch) {
                  totalYears += parseFloat(yearsMatch[1]);
                }
                if (monthsMatch) {
                  totalYears += parseFloat(monthsMatch[1]) / 12;
                }
              }
            } else if (exp.start_date && exp.end_date) {
              // Calculate from date range
              const start = new Date(exp.start_date);
              const end = exp.end_date === 'Present' || exp.end_date === 'Current' ? now : new Date(exp.end_date);
              const diffTime = Math.abs(end.getTime() - start.getTime());
              const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365);
              totalYears += diffYears;
            } else if (exp.start_date) {
              // Only start date, calculate to present
              const start = new Date(exp.start_date);
              const diffTime = Math.abs(now.getTime() - start.getTime());
              const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365);
              totalYears += diffYears;
            }
          });
          
          // If we couldn't calculate from durations/dates, use array length as fallback
          if (totalYears === 0 && bpocUser.experience_snapshot.length > 0) {
            // Assume average 2 years per position as fallback
            totalYears = bpocUser.experience_snapshot.length * 2;
          }
          
          return totalYears > 0 ? `${Math.round(totalYears * 10) / 10} years` : 'Experience not specified';
        })(),
        expectedSalary: (() => {
          if (!bpocUser.expected_salary) return 0;
          
          // Handle salary ranges like "P20000-P30000", "₱25,000 - ₱35,000", etc.
          const salaryStr = String(bpocUser.expected_salary);
          const numbers = salaryStr.match(/[\d,]+/g);
          
          if (!numbers || numbers.length === 0) return 0;
          
          let salary = 0;
          
          // If range, take the average
          if (numbers.length > 1) {
            const min = parseInt(numbers[0].replace(/,/g, ''), 10);
            const max = parseInt(numbers[1].replace(/,/g, ''), 10);
            salary = Math.round((min + max) / 2);
          } else {
            salary = parseInt(numbers[0].replace(/,/g, ''), 10);
          }
          
          // Validate salary range (reasonable PHP salary range: 15,000 - 200,000)
          if (salary < 15000 || salary > 200000) {
            console.log(`⚠️ Unrealistic salary detected: ${salaryStr} -> ${salary}. Using 0.`);
            return 0;
          }
          
          return salary;
        })(),
        workStatus: bpocUser.work_status || 'Not specified',
        joinedDate: bpocUser.user_created_at ? new Date(bpocUser.user_created_at).toISOString().split('T')[0] : '2023-01-01',
        tier: (bpocUser.overall_score || 0) >= 80 ? 'GOLD' : 
              (bpocUser.overall_score || 0) >= 60 ? 'SILVER' : 'BRONZE'
      },
      applications: [], // Empty array for now
      appliedJobs: [], // Empty array for now
      workStatus: {
        id: bpocUser.user_id || '',
        userId: bpocUser.user_id || '',
        currentEmployer: 'Not specified', // This field might not be in the database
        currentPosition: bpocUser.current_position || bpocUser.position || 'Not specified',
        workStatus: bpocUser.work_status || 'Not specified',
        preferredShift: 'Not specified',
        workSetup: 'Not specified',
        currentMood: 'Not specified',
        noticePeriodDays: 0,
        expectedSalary: bpocUser.expected_salary || '0',
        completed: bpocUser.work_status_completed || false,
        createdAt: bpocUser.user_created_at || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      resume: undefined, // Will be fetched separately if needed
      aiAnalysis: undefined // Will be fetched separately if needed
    };
  }).map((employeeData) => {
    // Debug: Log final transformed data for Lovell Siron
    if (employeeData.user.name?.toLowerCase().includes('lovell')) {
      console.log('✅ Final transformed data for Lovell Siron:', {
        name: employeeData.user.name,
        skills: employeeData.user.skills,
        experience: employeeData.user.experience,
        expectedSalary: employeeData.user.expectedSalary,
        workStatus: employeeData.user.workStatus
      });
    }
    return employeeData;
  });
};

export const useEmployeeCardData = () => {
  return useQuery<EmployeeCardData[]>({
    queryKey: ['employee-card-data'],
    queryFn: fetchEmployeeCardData,
    staleTime: 2 * 60 * 1000, // 2 minutes (reduced from 5 minutes)
    gcTime: 3 * 60 * 1000, // 3 minutes (reduced from 10 minutes)
    retry: 2, // Retry failed requests 2 times (reduced from 3)
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 5000), // Max 5 seconds (reduced from 30)
    refetchOnWindowFocus: false, // Don't refetch on window focus
  });
};

// BPOC Database Connection Test Hook
export const useBPOCDatabaseTest = () => {
  return useQuery({
    queryKey: ['bpoc-database-test'],
    queryFn: async () => {
      const response = await fetch('/api/test-bpoc-db');
      if (!response.ok) {
        throw new Error('Failed to test BPOC database connection');
      }
      const data = await response.json();
      return data;
    },
    staleTime: 30 * 1000, // 30 seconds
    gcTime: 60 * 1000, // 1 minute
    retry: 2,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
};

export const usePricingProgressMutation = () => {
  return useMutation({
    mutationFn: savePricingProgress,
  });
};

// Lead Management Hooks
interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  status: string;
  priority: string;
  source: string;
  created: string;
  lastContact: string;
  notes: string;
  column: string;
  userType: string;
  userId: string;
  quoteCount: number;
  industry: string;
  firstLeadCapture: boolean;
  secondLeadCapture: boolean;
  thirdLeadCapture: boolean;
}

interface LeadsResponse {
  success: boolean;
  data: Lead[];
  total: number;
  stats: {
    new: number;
    contacted: number;
    qualified: number;
    proposal: number;
    negotiation: number;
    closed: number;
  };
}

const fetchLeads = async (): Promise<LeadsResponse> => {
  const response = await fetch('/api/admin/leads');
  
  if (!response.ok) {
    // Try to get error message from response
    let errorMessage = 'Failed to fetch leads';
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorData.error || errorMessage;
    } catch {
      // If response is not JSON, use default message
    }
    throw new Error(errorMessage);
  }
  
  const result = await response.json();
  
  // Check if the response indicates an error
  if (!result.success && result.error) {
    throw new Error(result.message || result.error);
  }
  
  return result;
};

const updateLeadStatus = async ({ 
  leadId, 
  column, 
  changedBy, 
  changeReason 
}: { 
  leadId: string; 
  column: string; 
  changedBy?: string; 
  changeReason?: string; 
}): Promise<{ success: boolean; message: string }> => {
  const response = await fetch('/api/admin/leads', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ leadId, column, changedBy, changeReason }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update lead status');
  }
  
  return response.json();
};

export const useLeads = () => {
  return useQuery<LeadsResponse>({
    queryKey: ['leads'],
    queryFn: fetchLeads,
    staleTime: 1 * 60 * 1000, // 1 minute (reduced from 2 minutes)
    gcTime: 2 * 60 * 1000, // 2 minutes (reduced from 5 minutes)
    refetchOnWindowFocus: false, // Don't refetch on window focus
  });
};

export const useUpdateLeadStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: updateLeadStatus,
    onSuccess: () => {
      // Invalidate and refetch leads data
      queryClient.invalidateQueries({ queryKey: ['leads'] });
    },
  });
};

// Interview Request Hooks
interface InterviewRequest {
  id: string;
  user_id: string;
  candidate_id: string;
  candidate_name: string;
  candidate_position: string | null;
  requester_first_name: string;
  requester_last_name: string;
  requester_email: string;
  created_at: string;
}

interface InterviewRequestsResponse {
  success: boolean;
  data: InterviewRequest[];
  count: number;
}

const fetchInterviewRequests = async (userId: string): Promise<InterviewRequestsResponse> => {
  const response = await fetch(`/api/admin/interview-requests/${userId}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch interview requests');
  }
  
  return response.json();
};

export const useInterviewRequests = (userId: string) => {
  return useQuery<InterviewRequestsResponse>({
    queryKey: ['interview-requests', userId],
    queryFn: () => fetchInterviewRequests(userId),
    enabled: !!userId, // Only run query if userId exists
    staleTime: 30 * 1000, // 30 seconds
    gcTime: 2 * 60 * 1000, // 2 minutes
    refetchOnWindowFocus: false,
  });
};

// User Profile Hooks
interface UserProfile {
  id: string;
  user_id: string;
  first_name: string | null;
  last_name: string | null;
  company: string | null;
  email: string | null;
  created_at: Date | null;
  updated_at: Date | null;
  auth_user_id: string | null;
  user_type: string;
  industry_name: string | null;
  first_lead_capture: boolean | null;
  second_lead_capture: boolean | null;
  third_lead_capture: boolean | null;
  quoteCount: number;
}

interface UpdateUserProfileData {
  user_id: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  company?: string;
  industry_name?: string;
}

const fetchUserProfile = async (userId: string): Promise<UserProfile> => {
  const response = await fetch(`/api/user/profile?user_id=${userId}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error || 'Failed to fetch user profile');
  }
  
  return result.data;
};

const updateUserProfile = async (data: UpdateUserProfileData): Promise<UserProfile> => {
  const response = await fetch('/api/user/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update user profile');
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error || 'Failed to update user profile');
  }
  
  return result.data;
};

export const useUserProfile = (userId: string) => {
  return useQuery<UserProfile>({
    queryKey: ['userProfile', userId],
    queryFn: () => fetchUserProfile(userId),
    enabled: !!userId,
    staleTime: 1 * 60 * 1000, // 1 minute (reduced from 5 minutes)
    gcTime: 2 * 60 * 1000, // 2 minutes (reduced from 10 minutes)
    refetchOnWindowFocus: false, // Don't refetch on window focus
  });
};

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: updateUserProfile,
    onSuccess: (data) => {
      // Invalidate and refetch user profile data
      queryClient.invalidateQueries({ queryKey: ['userProfile', data.user_id] });
    },
  });
};

// Admin Dashboard Hooks
interface DashboardMetrics {
  totalPageViews: number;
  uniqueIPs: number;
  totalVisitors: number;
}

interface DeviceStats {
  desktop: number;
  mobile: number;
  tablet: number;
}

interface UserVisitData {
  userId: string;
  visits: Array<{
    pageName: string;
    visitCount: number;
    timeSpent: number;
    lastVisit: string;
  }>;
}

const fetchDashboardMetrics = async (): Promise<DashboardMetrics> => {
  const response = await fetch('/api/admin/dashboard/metrics');
  
  if (!response.ok) {
    throw new Error('Failed to fetch dashboard metrics');
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error || 'Failed to fetch dashboard metrics');
  }
  
  return result.data;
};

const fetchDeviceStats = async (): Promise<DeviceStats> => {
  const response = await fetch('/api/admin/dashboard/device-stats');
  
  if (!response.ok) {
    throw new Error('Failed to fetch device stats');
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error || 'Failed to fetch device stats');
  }
  
  return result.data;
};

const fetchUserVisitData = async (): Promise<UserVisitData[]> => {
  const response = await fetch('/api/admin/dashboard/user-visits');
  
  if (!response.ok) {
    throw new Error('Failed to fetch user visit data');
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error || 'Failed to fetch user visit data');
  }
  
  return result.data;
};

export interface TimeSeriesData {
  date: string;
  desktop: number;
  mobile: number;
  tablet: number;
  total?: number;
}

const fetchTimeSeriesData = async (days: number = 90): Promise<TimeSeriesData[]> => {
  const response = await fetch(`/api/admin/dashboard/time-series?days=${days}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch time series data');
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error || 'Failed to fetch time series data');
  }
  
  return result.data || [];
};

export const useDashboardMetrics = () => {
  return useQuery<DashboardMetrics>({
    queryKey: ['dashboardMetrics'],
    queryFn: fetchDashboardMetrics,
    staleTime: 30 * 1000, // 30 seconds
    gcTime: 2 * 60 * 1000, // 2 minutes
    refetchInterval: 30 * 1000, // Auto-refetch every 30 seconds
    refetchOnWindowFocus: false,
  });
};

export const useDeviceStats = () => {
  return useQuery<DeviceStats>({
    queryKey: ['deviceStats'],
    queryFn: fetchDeviceStats,
    staleTime: 1 * 60 * 1000, // 1 minute
    gcTime: 2 * 60 * 1000, // 2 minutes
    refetchOnWindowFocus: false,
  });
};

export const useUserVisitData = () => {
  return useQuery<UserVisitData[]>({
    queryKey: ['userVisitData'],
    queryFn: fetchUserVisitData,
    staleTime: 30 * 1000, // 30 seconds
    gcTime: 2 * 60 * 1000, // 2 minutes
    refetchOnWindowFocus: false,
  });
};

export const useTimeSeriesData = (days: number = 90) => {
  return useQuery<TimeSeriesData[]>({
    queryKey: ['timeSeriesData', days],
    queryFn: () => fetchTimeSeriesData(days),
    staleTime: 1 * 60 * 1000, // 1 minute
    gcTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

// User Dashboard Hooks
interface TopCandidateData {
  user: {
    id: string;
    name: string;
    [key: string]: unknown;
  };
  hotnessScore?: number;
  [key: string]: unknown;
}

interface UserQuoteSummary {
  id: string;
  user_id: string;
  quote_timestamp: string;
  member_count: number;
  total_monthly_cost: number;
  currency_code: string;
  created_at: string;
  candidate_recommendations?: Array<{
    roleTitle: string;
    recommendedCandidates: Array<{
      id: string;
      name: string;
      position: string;
      avatar?: string;
      matchScore?: number;
      overallScore?: number;
      [key: string]: unknown;
    }>;
  }>;
  [key: string]: unknown;
}

interface RecommendedCandidate {
  id: string;
  name: string;
  position: string;
  avatar?: string;
  score: number;
  isFavorite?: boolean;
  bio?: string;
  expectedSalary?: number;
}

const fetchTopCandidate = async (userId: string | null): Promise<TopCandidateData | null> => {
  if (!userId) {
    return null;
  }

  const response = await fetch(`/api/user-dashboard/top-candidate?userId=${userId}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch top candidate');
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error || 'Failed to fetch top candidate');
  }
  
  return result.data;
};

const fetchRecentQuotes = async (userId: string | null): Promise<UserQuoteSummary[]> => {
  if (!userId) {
    return [];
  }

  const response = await fetch(`/api/user-dashboard/recent-quotes?userId=${userId}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch recent quotes');
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error || 'Failed to fetch recent quotes');
  }
  
  return result.data || [];
};

const fetchRecommendedCandidates = async (userId: string | null): Promise<RecommendedCandidate[]> => {
  if (!userId) {
    return [];
  }

  const response = await fetch(`/api/user-dashboard/recommended-candidates?userId=${userId}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch recommended candidates');
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error || 'Failed to fetch recommended candidates');
  }
  
  return result.data || [];
};

export const useTopCandidate = (userId: string | null) => {
  return useQuery<TopCandidateData | null>({
    queryKey: ['topCandidate', userId],
    queryFn: () => fetchTopCandidate(userId),
    enabled: !!userId,
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

// Fetch up to 3 candidates - one for each metric:
// 1. Candidate with highest scroll_percentage
// 2. Candidate with highest view_duration (if different)
// 3. Candidate with highest visit_count/page_views (if different)
// Note: Returns all available candidates even if less than 3
const fetchTopCandidates = async (userId: string | null): Promise<Array<{
  id: string;
  name: string;
  position: string;
  avatar?: string;
  bio?: string;
  expectedSalary?: number;
  view_duration: number;
  scroll_percentage: number;
  page_views: number;
  engagement_score: number;
  metric_type?: string;
}>> => {
  if (!userId) return [];
  
  const response = await fetch(`/api/user-dashboard/top-candidates?userId=${userId}&limit=3`); // Get 3 candidates (one per metric)
  
  if (!response.ok) {
    throw new Error('Failed to fetch top candidates');
  }
  
  const result = await response.json();
  
  console.log('📊 fetchTopCandidates API response:', {
    success: result.success,
    dataCount: result.data?.length || 0,
    data: result.data
  });
  
  if (!result.success) {
    throw new Error(result.error || 'Failed to fetch top candidates');
  }
  
  return result.data || [];
};

export const useTopCandidates = (userId: string | null) => {
  return useQuery({
    queryKey: ['topCandidates', userId],
    queryFn: () => fetchTopCandidates(userId),
    enabled: !!userId,
    staleTime: 0, // Always fetch fresh data
    gcTime: 1 * 60 * 1000, // 1 minute
    refetchOnWindowFocus: true, // Refetch when window gains focus
    refetchOnMount: true, // Refetch when component mounts
  });
};

export const useRecentQuotes = (userId: string | null) => {
  return useQuery<UserQuoteSummary[]>({
    queryKey: ['recentQuotes', userId],
    queryFn: () => fetchRecentQuotes(userId),
    enabled: !!userId,
    staleTime: 1 * 60 * 1000, // 1 minute
    gcTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

export const useRecommendedCandidates = (userId: string | null) => {
  return useQuery<RecommendedCandidate[]>({
    queryKey: ['recommendedCandidates', userId],
    queryFn: () => fetchRecommendedCandidates(userId),
    enabled: !!userId,
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

// Job Postings Hook
interface JobPosting {
  id: string;
  quoteId: string;
  title: string;
  industry: string;
  description: string;
  experienceLevel: string;
  workspaceType: string;
  salary: string;
  salaryAmount: number;
  memberCount: number;
  totalCost: number;
  currencyCode: string;
  status: string;
  createdAt: string;
  applicants: number;
  rolesCount: number;
  allRoles: any[];
}

const fetchJobs = async (userId: string | null): Promise<JobPosting[]> => {
  if (!userId) {
    return [];
  }

  const response = await fetch(`/api/user-dashboard/jobs?userId=${userId}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch jobs');
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error || 'Failed to fetch jobs');
  }
  
  return result.data || [];
};

export const useJobs = (userId: string | null) => {
  return useQuery<JobPosting[]>({
    queryKey: ['jobs', userId],
    queryFn: () => fetchJobs(userId),
    enabled: !!userId,
    staleTime: 1 * 60 * 1000, // 1 minute
    gcTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

// Chat API Functions
const fetchConversations = async (deviceId?: string, userId?: string): Promise<ChatConversation[]> => {
  const params = new URLSearchParams();
  if (deviceId) params.append('deviceId', deviceId);
  if (userId) params.append('userId', userId);
  
  const response = await fetch(`/api/chat/conversations?${params.toString()}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch conversations');
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error || 'Failed to fetch conversations');
  }
  
  return result.conversations || [];
};

const fetchMessages = async (conversationId: string): Promise<ChatMessage[]> => {
  const response = await fetch(`/api/chat/messages?conversationId=${conversationId}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch messages');
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error || 'Failed to fetch messages');
  }
  
  return result.messages || [];
};

const fetchConversationContext = async (conversationId: string): Promise<ConversationContext | null> => {
  const response = await fetch(`/api/chat/context/${conversationId}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch conversation context');
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error || 'Failed to fetch conversation context');
  }
  
  return result.context || null;
};

const createConversation = async (data: {
  deviceId: string;
  conversationType?: 'anonymous' | 'authenticated';
  title?: string;
  contextData?: any;
}): Promise<ChatConversation> => {
  const response = await fetch('/api/chat/conversations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create conversation');
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error || 'Failed to create conversation');
  }
  
  return result.conversation;
};

const sendMessage = async (data: {
  conversationId: string;
  userId: string; // Device ID
  role: 'user' | 'assistant';
  content: string;
  contextSnapshot?: any;
}): Promise<ChatMessage> => {
  const response = await fetch('/api/chat/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to send message');
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error || 'Failed to send message');
  }
  
  return result.message;
};

const migrateConversations = async (data: {
  userId: string;
  deviceId: string;
}): Promise<{ migratedCount: number }> => {
  const response = await fetch('/api/chat/migrate', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to migrate conversations');
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error || 'Failed to migrate conversations');
  }
  
  return { migratedCount: result.migratedCount };
};

const updateConversationContext = async (conversationId: string, data: {
  contextData?: any;
  title?: string;
}): Promise<ConversationContext> => {
  const response = await fetch(`/api/chat/context/${conversationId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update conversation context');
  }
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error || 'Failed to update conversation context');
  }
  
  return result.context;
};

// Chat Hooks
export const useConversations = (deviceId?: string, userId?: string, options?: any) => {
  return useQuery<ChatConversation[]>({
    queryKey: ['conversations', deviceId, userId],
    queryFn: () => fetchConversations(deviceId, userId),
    enabled: !!(deviceId || userId),
    staleTime: 30 * 1000, // 30 seconds
    gcTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
    ...options, // Merge user-provided options
  });
};

export const useMessages = (conversationId: string | null) => {
  return useQuery<ChatMessage[]>({
    queryKey: ['messages', conversationId],
    queryFn: () => fetchMessages(conversationId!),
    enabled: !!conversationId,
    staleTime: 10 * 1000, // 10 seconds
    gcTime: 2 * 60 * 1000, // 2 minutes
    refetchOnWindowFocus: false,
  });
};

export const useConversationContext = (conversationId: string | null) => {
  return useQuery<ConversationContext | null>({
    queryKey: ['conversationContext', conversationId],
    queryFn: () => fetchConversationContext(conversationId!),
    enabled: !!conversationId,
    staleTime: 1 * 60 * 1000, // 1 minute
    gcTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

export const useCreateConversation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createConversation,
    onSuccess: (data, variables) => {
      // Invalidate conversations cache
      queryClient.invalidateQueries({ 
        queryKey: ['conversations', variables.deviceId] 
      });
    },
  });
};

export const useSendMessage = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: sendMessage,
    onSuccess: (data, variables) => {
      // Invalidate messages cache for this conversation
      queryClient.invalidateQueries({ 
        queryKey: ['messages', variables.conversationId] 
      });
      // Also invalidate conversations to update last message
      queryClient.invalidateQueries({ 
        queryKey: ['conversations'] 
      });
    },
  });
};

export const useMigrateConversations = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: migrateConversations,
    onSuccess: (data, variables) => {
      // Invalidate all conversation-related caches
      queryClient.invalidateQueries({ 
        queryKey: ['conversations'] 
      });
      queryClient.invalidateQueries({ 
        queryKey: ['messages'] 
      });
      queryClient.invalidateQueries({ 
        queryKey: ['conversationContext'] 
      });
    },
  });
};

export const useUpdateConversationContext = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ conversationId, ...data }: { conversationId: string } & { contextData?: any; title?: string }) => 
      updateConversationContext(conversationId, data),
    onSuccess: (data, variables) => {
      // Invalidate conversation context cache
      queryClient.invalidateQueries({ 
        queryKey: ['conversationContext', variables.conversationId] 
      });
      // Also invalidate conversations to update title if changed
      queryClient.invalidateQueries({ 
        queryKey: ['conversations'] 
      });
    },
  });
};

// ============================================================================
// TSX Content Management
// ============================================================================

interface CompileTsxResponse {
  success: boolean;
  content: string;
  method?: string;
}

interface ImproveTsxResponse {
  success: boolean;
  improvedCode: string;
  bannerImage?: string;
  keywords?: string;
}

const compileTsx = async (tsxCode: string): Promise<CompileTsxResponse> => {
  const response = await fetch('/api/admin/content/compile-tsx', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tsxCode }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to compile TSX code');
  }

  return response.json();
};

const improveTsx = async (tsxCode: string): Promise<ImproveTsxResponse> => {
  const response = await fetch('/api/admin/content/improve-tsx', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tsxCode }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to improve TSX code');
  }

  return response.json();
};

export const useCompileTsx = () => {
  return useMutation({
    mutationFn: compileTsx,
  });
};

export const useImproveTsx = () => {
  return useMutation({
    mutationFn: improveTsx,
  });
};

// ============================================================================
// AI Content Generation
// ============================================================================

interface AIResearchResponse {
  success: boolean;
  data: {
    topic: string;
    mainResults: Array<{
      title: string;
      snippet: string;
      link: string;
    }>;
    knowledgeGraph: any;
    relatedSearches: Array<{
      query: string;
    }>;
    peopleAlsoAsk: Array<{
      question: string;
      snippet: string;
    }>;
    additionalSources: {
      guides: any[];
      bestPractices: any[];
      examples: any[];
      statistics: any[];
    };
  };
}

interface AIGenerateBlogRequest {
  topic: string;
  research?: any;
  postType?: 'blog' | 'article' | 'pillar';
  tone?: string;
  targetAudience?: string;
}

interface AIGenerateBlogResponse {
  success: boolean;
  data: {
    title: string;
    description: string;
    content: string;
    suggestedTags: string[];
    suggestedKeywords: string[];
    estimatedReadTime: string;
  };
  usage: {
    input_tokens: number;
    output_tokens: number;
  };
}

const performAIResearch = async (topic: string, numResults?: number): Promise<AIResearchResponse> => {
  const response = await fetch('/api/admin/ai-research', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic, numResults }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to perform AI research');
  }

  return response.json();
};

const generateAIBlog = async (data: AIGenerateBlogRequest): Promise<AIGenerateBlogResponse> => {
  const response = await fetch('/api/admin/ai-generate-blog', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to generate blog post');
  }

  return response.json();
};

export const useAIResearch = () => {
  return useMutation({
    mutationFn: ({ topic, numResults }: { topic: string; numResults?: number }) => 
      performAIResearch(topic, numResults),
  });
};

export const useAIGenerateBlog = () => {
  return useMutation({
    mutationFn: generateAIBlog,
  });
};

// ============================================================================
// AI TSX Blog Generation (with Serper + Claude)
// ============================================================================

interface GenerateTSXBlogRequest {
  topic: string;
  researchData?: any;
  tone?: string;
  targetAudience?: string;
}

interface GenerateTSXBlogResponse {
  success: boolean;
  tsxCode: string;
  topic: string;
  metadata: {
    tone: string;
    targetAudience: string;
    generatedAt: string;
    length: number;
  };
}

const generateTSXBlog = async (data: GenerateTSXBlogRequest): Promise<GenerateTSXBlogResponse> => {
  const response = await fetch('/api/admin/content/generate-blog', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to generate TSX blog post');
  }

  return response.json();
};

export const useGenerateTSXBlog = () => {
  return useMutation({
    mutationFn: generateTSXBlog,
  });
};
