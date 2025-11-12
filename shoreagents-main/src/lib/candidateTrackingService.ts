// Service for tracking candidate views and interactions
import { createClient } from './supabase/client';

export interface CandidateViewData {
  user_id: string;
  candidate_id: string;
  candidate_name?: string;
  view_duration?: number;
  scroll_percentage?: number;
  incrementPageViews?: boolean; // Flag to indicate if page_views should be incremented
}

export class CandidateTrackingService {
  private static instance: CandidateTrackingService;
  private currentCandidateId: string | null = null;
  private currentUserId: string | null = null;
  private startTime: number = 0;
  private lastUpdateTime: number = 0; // Track when we last saved duration
  private updateInterval: NodeJS.Timeout | null = null; // For periodic updates
  private hasIncrementedPageViews: boolean = false; // Track if we've incremented page_views for this session

  private constructor() {}

  public static getInstance(): CandidateTrackingService {
    if (!CandidateTrackingService.instance) {
      CandidateTrackingService.instance = new CandidateTrackingService();
    }
    return CandidateTrackingService.instance;
  }

  // Initialize tracking for a candidate view
  public async startTracking(userId: string, candidateId: string, candidateName?: string): Promise<void> {
    try {
      console.log('🚀 Starting candidate tracking:', {
        userId,
        candidateId,
        candidateName,
        timestamp: new Date().toISOString()
      });

      // Use the provided userId directly (this should be the device ID from content tracking)
      let trackingUserId: string | null = userId?.trim() || null;
      
      if (!trackingUserId || trackingUserId === '') {
        console.warn('❌ No valid user ID provided for candidate tracking:', { userId, candidateId });
        return;
      }
      
      // Ensure the user exists in the users table (create if needed)
      trackingUserId = await this.ensureUserExists(trackingUserId);

      // If no user found, skip tracking
      if (!trackingUserId) {
        console.log('❌ No user found for tracking, skipping...');
        return;
      }
      
      this.currentUserId = trackingUserId;
      this.currentCandidateId = candidateId;
      this.startTime = Date.now(); // Record start time for duration tracking
      this.lastUpdateTime = Date.now(); // Initialize last update time
      this.hasIncrementedPageViews = false; // Reset flag for new tracking session

      // Get candidate name from BPOC API if not provided
      let finalCandidateName = candidateName;
      if (!finalCandidateName) {
        finalCandidateName = await this.getCandidateNameFromBPOC(candidateId) || undefined;
      }

      // Check if this is a new visit (record doesn't exist) or a revisit (record exists)
      const supabase = createClient();
      const { data: existingRecord } = await supabase
        .from('candidate_views')
        .select('id, page_views')
        .eq('user_id', trackingUserId)
        .eq('candidate_id', candidateId)
        .maybeSingle();

      const isNewVisit = !existingRecord;
      
      console.log('📊 Visit check:', {
        isNewVisit,
        existingPageViews: existingRecord?.page_views || 0,
        willIncrement: isNewVisit
      });

      // If it's a revisit, increment page_views first using direct update (not RPC)
      // This avoids the RPC function incrementing it again
      if (!isNewVisit && existingRecord) {
        const currentPageViews = existingRecord.page_views || 0;
        const { error: incrementError } = await supabase
          .from('candidate_views')
          .update({ 
            page_views: currentPageViews + 1,
            updated_at: new Date().toISOString()
          })
          .eq('id', existingRecord.id);
        
        if (incrementError) {
          console.error('❌ Error incrementing page_views:', incrementError);
        } else {
          console.log(`✅ Incremented page_views for revisit: ${currentPageViews} → ${currentPageViews + 1}`);
          this.hasIncrementedPageViews = true;
        }
      }

      // Record initial view using the new function that accepts actual user_id
      // This will either create a new record or update an existing one
      // IMPORTANT: We pass view_duration as undefined/null when starting - this tells the function to preserve existing duration
      // Only endTracking() should accumulate duration by passing the actual duration value
      // For revisits, we pass incrementPageViews: false to prevent double increment
      await this.recordInteractionDirect({
        user_id: trackingUserId,
        candidate_id: candidateId,
        candidate_name: finalCandidateName,
        view_duration: undefined, // Pass undefined - will be treated as NULL, preserving existing duration
        scroll_percentage: 0, // Initial scroll percentage, will be updated during tracking
        incrementPageViews: isNewVisit // Only increment page_views for new visits (RPC will handle it)
      });
      
      if (isNewVisit) {
        this.hasIncrementedPageViews = true;
      }

      // Start periodic updates every 5 seconds to save duration incrementally
      // This ensures duration is saved even if tracking ends prematurely
      this.startPeriodicUpdates();

      console.log(`✅ Started tracking view for candidate: ${finalCandidateName || candidateId} (User: ${trackingUserId})`);
    } catch (error) {
      console.error('❌ Error starting candidate tracking:', error);
    }
  }

  // Start periodic updates to save duration incrementally
  private startPeriodicUpdates(): void {
    // Clear any existing interval
    this.stopPeriodicUpdates();

    // Update every 5 seconds
    this.updateInterval = setInterval(async () => {
      if (this.currentUserId && this.currentCandidateId && this.startTime > 0) {
        const now = Date.now();
        const durationSinceLastUpdate = Math.max(0, Math.round((now - this.lastUpdateTime) / 1000));
        
        if (durationSinceLastUpdate > 0) {
          console.log(`⏱️ Periodic update: saving ${durationSinceLastUpdate} seconds of viewing time`);
          await this.updateViewDuration(this.currentUserId, this.currentCandidateId, durationSinceLastUpdate);
          this.lastUpdateTime = now; // Update the last update time
        }
      }
    }, 5000); // Update every 5 seconds
  }

  // Stop periodic updates
  private stopPeriodicUpdates(): void {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
  }

  // Get candidate name from BPOC API
  private async getCandidateNameFromBPOC(candidateId: string): Promise<string | null> {
    try {
      console.log('🔍 Fetching candidate name from BPOC API for:', candidateId);
      
      // Import BPOC service dynamically to avoid SSR issues
      const { fetchBPOCEmployeeData } = await import('@/lib/bpocApiService');
      
      // Fetch all BPOC employees
      const bpocEmployees = await fetchBPOCEmployeeData();
      
      // Find the specific employee by ID
      const foundEmployee = bpocEmployees.find(emp => emp.user_id === candidateId);
      
      if (foundEmployee) {
        console.log('✅ Found candidate name from BPOC:', foundEmployee.full_name);
        return foundEmployee.full_name;
      } else {
        console.log('❌ Candidate not found in BPOC data');
        return null;
      }
    } catch (error) {
      console.error('❌ Error fetching candidate name from BPOC:', error);
      return null;
    }
  }

  // Ensure user exists in users table (create if needed)
  private async ensureUserExists(userId: string): Promise<string | null> {
    try {
      // Skip on server-side
      if (typeof window === 'undefined') {
        console.warn('⚠️ ensureUserExists called on server-side, skipping');
        return null;
      }

      // Validate userId
      if (!userId || userId.trim() === '') {
        console.warn('❌ Invalid userId provided to ensureUserExists:', userId);
        return null;
      }

      // Skip placeholder IDs
      if (userId === 'server_placeholder' || userId.startsWith('server_')) {
        console.warn('⚠️ Server placeholder userId detected, skipping:', userId);
        return null;
      }

      const supabase = createClient();
      
      // Check if Supabase client is available
      if (!supabase) {
        console.error('❌ Supabase client not available');
        return null;
      }
      
      // First check if user already exists
      const { data: existingUser, error: checkError } = await supabase
        .from('users')
        .select('user_id')
        .eq('user_id', userId)
        .maybeSingle(); // Use maybeSingle() instead of single() to avoid errors when no rows found

      // If user exists, return it
      if (existingUser && existingUser.user_id) {
        console.log('✅ User already exists:', userId);
        return userId;
      }

      // If no user found (checkError is null or code is 'PGRST116'), create new user
      if (!checkError || checkError.code === 'PGRST116') {
        console.log('🔧 User does not exist, creating new user:', userId);
        
        const { data: newUser, error: createError } = await supabase
          .from('users')
          .insert({
            user_id: userId,
            user_type: 'Anonymous'
          })
          .select('user_id')
          .single();

        if (createError) {
          // Check if it's a duplicate key error (user was created between check and insert)
          if (createError.code === '23505' || createError.message?.includes('duplicate')) {
            console.log('🔄 User was created by another process, using existing user');
            return userId; // Return the userId since it exists now
          }
          
          console.error('❌ Error creating user:', {
            error: createError,
            message: createError?.message || 'Unknown error',
            details: createError?.details || 'No details',
            hint: createError?.hint || 'No hint',
            code: createError?.code || 'No code',
            userId: userId,
            fullError: JSON.stringify(createError, Object.getOwnPropertyNames(createError))
          });
          return null;
        }

        if (newUser && newUser.user_id) {
        console.log('✅ Created new user:', newUser.user_id);
        return newUser.user_id;
        } else {
          console.error('❌ User creation succeeded but no user_id returned');
          return null;
        }
      } else {
        // Some other error occurred
        const errorDetails = {
          error: checkError,
          message: checkError?.message || 'Unknown error',
          details: checkError?.details || 'No details',
          hint: checkError?.hint || 'No hint',
          code: checkError?.code || 'No code',
          userId: userId
        };
        
        // Try to stringify the error to see all properties
        try {
          errorDetails['fullError'] = JSON.stringify(checkError, Object.getOwnPropertyNames(checkError));
        } catch (e) {
          errorDetails['stringifyError'] = 'Could not stringify error';
        }
        
        console.error('❌ Error checking user existence:', errorDetails);
        return null;
      }
    } catch (error) {
      const errorInfo: Record<string, unknown> = {
        error: error,
        errorType: error?.constructor?.name || typeof error,
        userId: userId
      };
      
      if (error instanceof Error) {
        errorInfo.errorMessage = error.message;
        errorInfo.errorStack = error.stack;
        errorInfo.errorName = error.name;
      } else {
        errorInfo.errorString = String(error);
      }
      
      // Try to get all properties of the error
      try {
        errorInfo['fullError'] = JSON.stringify(error, Object.getOwnPropertyNames(error));
      } catch (e) {
        errorInfo['stringifyError'] = 'Could not stringify error';
      }
      
      console.error('❌ Exception in ensureUserExists:', errorInfo);
      return null;
    }
  }

  // Get existing authenticated user from users table
  private async getExistingAuthenticatedUser(authUserId: string): Promise<string | null> {
    try {
      console.log('🔍 Looking up authenticated user for:', authUserId);
      
      const supabase = createClient();
      
      // First try direct table query (more reliable than RPC)
      const { data: directData, error: directError } = await supabase
        .from('users')
        .select('user_id')
        .eq('user_id', authUserId)
        .single();

      if (!directError && directData) {
        console.log('✅ Found user by direct user_id lookup:', directData.user_id);
        return directData.user_id;
      }

      // If direct lookup fails, try RPC function
      const { data, error } = await supabase
        .rpc('simple_get_authenticated_user', {
          p_auth_user_id: authUserId
        });

      if (error) {
        console.error('❌ Error getting existing authenticated user:', {
          error: error,
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code,
          authUserId: authUserId,
          fullError: JSON.stringify(error, null, 2)
        });
        return null;
      }

      if (data) {
        console.log('✅ Got existing authenticated user via RPC:', data);
        return data;
      } else {
        console.log('❌ No authenticated user found for auth_user_id:', authUserId);
        return null;
      }
    } catch (error) {
      console.error('❌ Exception in getExistingAuthenticatedUser:', {
        error: error,
        authUserId: authUserId
      });
      return null;
    }
  }

  // Record a specific interaction (simple approach)
  public async recordInteraction(data: CandidateViewData): Promise<void> {
    try {
      if (!this.currentUserId || !this.currentCandidateId) {
        console.warn('No active tracking session. Call startTracking first.');
        return;
      }

      console.log('🔍 Attempting to record interaction:', {
        user_id: data.user_id,
        candidate_id: data.candidate_id,
        candidate_name: data.candidate_name,
        view_duration: data.view_duration,
        scroll_percentage: data.scroll_percentage
      });

      const supabase = createClient();
      
      // Use the simple record function with the actual user_id
      const { data: result, error } = await supabase
        .rpc('simple_record_view', {
          p_user_id: data.user_id, // This is the actual user_id from the tracking service
          p_candidate_id: data.candidate_id,
          p_candidate_name: data.candidate_name,
          p_view_duration: data.view_duration,
          p_scroll_percentage: data.scroll_percentage || 0
        });

      if (error) {
        console.error('❌ Error recording candidate interaction:', {
          error: error,
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        return;
      }

      console.log(`✅ Successfully recorded view for candidate: ${data.candidate_name || data.candidate_id}`, result);
    } catch (error) {
      console.error('❌ Exception in recordInteraction:', error);
    }
  }

  // Record interaction directly with actual user_id from frontend
  public async recordInteractionDirect(data: CandidateViewData): Promise<void> {
    try {
      // Validate input data
      if (!data.user_id || data.user_id.trim() === '') {
        console.warn('❌ Invalid user_id provided to recordInteractionDirect:', data);
        return;
      }

      if (!data.candidate_id || data.candidate_id.trim() === '') {
        console.warn('❌ Invalid candidate_id provided to recordInteractionDirect:', data);
        return;
      }

      console.log('🔍 Attempting to record interaction directly:', {
        user_id: data.user_id,
        candidate_id: data.candidate_id,
        candidate_name: data.candidate_name,
        view_duration: data.view_duration,
        scroll_percentage: data.scroll_percentage,
        timestamp: new Date().toISOString()
      });

      const supabase = createClient();
      
      // Check if Supabase client is available
      if (!supabase) {
        console.error('❌ Supabase client not available in recordInteractionDirect');
        return;
      }
      
      // Try the new database function first
      try {
        // Handle view_duration:
        // - If undefined/null: pass NULL to preserve existing duration (for starting tracking)
        // - If 0: pass 0 (will preserve: existing + 0 = existing)
        // - If > 0: pass the value (will accumulate: existing + value)
        const rpcParams: {
          p_user_id: string;
          p_candidate_id: string;
          p_candidate_name: string | null | undefined;
          p_view_duration: number | null;
          p_scroll_percentage: number;
        } = {
          p_user_id: data.user_id,
          p_candidate_id: data.candidate_id,
          p_candidate_name: data.candidate_name,
          p_view_duration: data.view_duration === undefined || data.view_duration === null ? null : data.view_duration,
          p_scroll_percentage: data.scroll_percentage || 0
        };
        
        console.log('📤 Calling RPC function with params:', rpcParams);
        
        // First, check the current state of the record to verify accumulation
        const { data: currentRecord } = await supabase
          .from('candidate_views')
          .select('id, view_duration, page_views')
          .eq('user_id', data.user_id)
          .eq('candidate_id', data.candidate_id)
          .maybeSingle();
        
        if (currentRecord) {
          console.log('📊 Current record state BEFORE RPC call:', {
            view_id: currentRecord.id,
            current_duration: currentRecord.view_duration,
            page_views: currentRecord.page_views,
            incoming_duration: rpcParams.p_view_duration,
            expected_result: (currentRecord.view_duration || 0) + (rpcParams.p_view_duration || 0),
            incrementPageViews: data.incrementPageViews
          });
        }
        
        // If incrementPageViews is false, we've already incremented it manually for revisits
        // Use direct update instead to avoid RPC incrementing it again
        if (data.incrementPageViews === false && currentRecord) {
          console.log('⏭️ Skipping RPC call - page_views already incremented, using direct update instead');
          
          const updateData: Record<string, unknown> = {
            updated_at: new Date().toISOString()
          };
          
          // Update candidate_name if provided
          if (data.candidate_name) {
            updateData.candidate_name = data.candidate_name;
          }
          
          // Only update view_duration if it's not undefined/null (preserve existing)
          if (data.view_duration !== undefined && data.view_duration !== null) {
            const currentDuration = currentRecord.view_duration || 0;
            if (data.view_duration === 0) {
              // Preserve existing duration
              updateData.view_duration = currentDuration;
            } else {
              // Accumulate duration
              updateData.view_duration = currentDuration + data.view_duration;
            }
          }
          
          // Update scroll percentage if provided (use GREATEST to track max)
          if (data.scroll_percentage !== undefined) {
            const { data: currentView } = await supabase
              .from('candidate_views')
              .select('scroll_percentage')
              .eq('id', currentRecord.id)
              .maybeSingle();
            
            const currentScroll = currentView?.scroll_percentage || 0;
            updateData.scroll_percentage = Math.max(currentScroll, data.scroll_percentage || 0);
          }
          
          const { error: updateError } = await supabase
            .from('candidate_views')
            .update(updateData)
            .eq('id', currentRecord.id);
          
          if (updateError) {
            console.error('❌ Error updating record directly:', updateError);
            throw updateError; // This will trigger the fallback
          } else {
            console.log('✅ Updated record directly (avoiding page_views double increment)');
            return;
          }
        }
        
        const { data: result, error } = await supabase.rpc('record_candidate_view_simple', rpcParams);

        if (error) {
          console.warn('⚠️ RPC function failed, falling back to direct table operations:', {
            error: error,
            message: error?.message,
            details: error?.details,
            hint: error?.hint,
            code: error?.code,
            user_id: data.user_id,
            candidate_id: data.candidate_id
          });
          throw error; // This will trigger the fallback
        }

        // Verify the result after RPC call
        const { data: updatedRecord } = await supabase
          .from('candidate_views')
          .select('id, view_duration, page_views')
          .eq('user_id', data.user_id)
          .eq('candidate_id', data.candidate_id)
          .maybeSingle();
        
        console.log(`✅ Successfully recorded view using RPC for candidate: ${data.candidate_name || data.candidate_id}`, {
          result: result,
          viewId: result,
          user_id: data.user_id,
          candidate_id: data.candidate_id,
          view_duration_passed: data.view_duration,
          duration_before: currentRecord?.view_duration || 0,
          duration_after: updatedRecord?.view_duration || 0,
          note: data.view_duration === 0 ? 'Duration preserved (0 + existing = existing)' : 'Duration accumulated'
        });
        return;
      } catch (rpcError) {
        console.log('🔄 RPC function not available, using fallback method...');
        
        // Fallback: Use direct table operations with duplicate prevention
        // Since there's a unique constraint on (user_id, candidate_id), we can query directly
        const { data: existingView, error: findError } = await supabase
          .from('candidate_views')
          .select('id, view_duration, scroll_percentage')
          .eq('user_id', data.user_id)
          .eq('candidate_id', data.candidate_id)
          .maybeSingle(); // Use maybeSingle() - unique constraint ensures only one record

        if (findError && findError.code !== 'PGRST116') {
          console.error('❌ Error checking for existing view:', {
            error: findError,
            message: findError?.message,
            details: findError?.details,
            hint: findError?.hint,
            code: findError?.code,
            user_id: data.user_id,
            candidate_id: data.candidate_id
          });
          return;
        }

        if (existingView) {
          // Update existing record instead of creating new one
          console.log('🔄 Updating existing view record instead of creating duplicate', {
            existingViewId: existingView.id,
            currentDuration: existingView.view_duration,
            incomingDuration: data.view_duration
          });
          
          // Build update object
          // For view_duration: 
          // - If undefined/null (starting tracking), preserve existing duration
          // - If 0 (starting tracking), preserve existing duration (0 + existing = existing)
          // - If > 0 (ending session), add it to existing
          const viewDurationToAdd = data.view_duration ?? 0;
          const currentDuration = existingView.view_duration || 0;
          
          // IMPORTANT: If view_duration is undefined/null/0 (starting new session), preserve existing duration
          // If view_duration > 0 (ending session), add it to existing
          const newDuration = (viewDurationToAdd === undefined || viewDurationToAdd === null || viewDurationToAdd === 0) 
            ? currentDuration 
            : (currentDuration + viewDurationToAdd);
          
          console.log(`📊 Duration calculation: current=${currentDuration}, incoming=${viewDurationToAdd}, result=${newDuration}`, {
            preserve: (viewDurationToAdd === undefined || viewDurationToAdd === null || viewDurationToAdd === 0)
          });
          
          const updateData: Record<string, unknown> = {
              candidate_name: data.candidate_name,
            view_duration: newDuration, // Preserve if 0, accumulate otherwise
              scroll_percentage: Math.max(existingView.scroll_percentage || 0, data.scroll_percentage || 0),
              updated_at: new Date().toISOString()
          };
          
          console.log('📤 Updating existing view with data:', {
            view_id: existingView.id,
            previous_duration: currentDuration,
            incoming_duration: viewDurationToAdd,
            new_duration: newDuration,
            duration_preserved: viewDurationToAdd === 0
          });
          
          const { error: updateError } = await supabase
            .from('candidate_views')
            .update(updateData)
            .eq('id', existingView.id);

          if (updateError) {
            console.error('❌ Error updating existing view:', {
              error: updateError,
              message: updateError?.message,
              details: updateError?.details,
              hint: updateError?.hint,
              code: updateError?.code,
              view_id: existingView.id,
              user_id: data.user_id,
              candidate_id: data.candidate_id,
              updateData: updateData
            });
          } else {
            console.log('✅ Existing view record updated successfully', {
              view_id: existingView.id,
              new_duration: newDuration,
              previous_duration: currentDuration,
              duration_preserved: viewDurationToAdd === 0
            });
          }
        } else {
          // Insert new record when no existing record found
          console.log('🆕 No existing view found, creating new record:', {
              user_id: data.user_id,
              candidate_id: data.candidate_id,
              candidate_name: data.candidate_name,
            view_duration: data.view_duration ?? 0,
            scroll_percentage: data.scroll_percentage || 0
          });
          
          const insertData = {
            user_id: data.user_id,
            candidate_id: data.candidate_id,
            candidate_name: data.candidate_name,
            view_duration: data.view_duration ?? 0, // Default to 0 for new records
            scroll_percentage: data.scroll_percentage || 0,
              page_views: 1
          };
          
          console.log('📤 Inserting candidate view with data:', insertData);
          
          const { data: result, error } = await supabase
            .from('candidate_views')
            .insert(insertData)
            .select('id')
            .single();

          if (error) {
            // Check if it's a unique constraint violation (record already exists)
            if (error.code === '23505' || error.message?.includes('duplicate') || error.message?.includes('unique')) {
              console.log('🔄 Record already exists (unique constraint), attempting to update instead...');
              
              // Try to find and update the existing record
              const { data: existingRecord, error: findError } = await supabase
                .from('candidate_views')
                .select('id, view_duration, scroll_percentage')
                .eq('user_id', data.user_id)
                .eq('candidate_id', data.candidate_id)
                .maybeSingle();
              
              if (existingRecord && !findError) {
                const updateData: Record<string, unknown> = {
                  candidate_name: data.candidate_name,
                  scroll_percentage: Math.max(existingRecord.scroll_percentage || 0, data.scroll_percentage || 0),
                  updated_at: new Date().toISOString()
                };
                
                // Only update view_duration if it's not 0 (preserve existing when starting)
                if (data.view_duration !== 0) {
                  updateData.view_duration = (existingRecord.view_duration || 0) + data.view_duration;
                }
                
                const { error: updateError } = await supabase
                  .from('candidate_views')
                  .update(updateData)
                  .eq('id', existingRecord.id);
                
                if (updateError) {
                  console.error('❌ Error updating existing record after unique constraint violation:', {
                    error: updateError,
                    message: updateError?.message,
                    code: updateError?.code
                  });
                } else {
                  console.log('✅ Updated existing record after unique constraint violation');
                }
                return;
              }
            }
            
            console.error('❌ Error recording candidate interaction:', {
              error: error,
              message: error?.message,
              details: error?.details,
              hint: error?.hint,
              code: error?.code,
              fullError: JSON.stringify(error, Object.getOwnPropertyNames(error)),
              insertData: insertData
            });
            return;
          }

          console.log(`✅ Successfully recorded view for candidate: ${data.candidate_name || data.candidate_id}`, {
            result: result,
            insertedId: result?.id
          });
        }
      }
    } catch (error) {
      console.error('❌ Exception in recordInteractionDirect:', {
        error: error,
        errorMessage: error instanceof Error ? error.message : String(error),
        errorStack: error instanceof Error ? error.stack : undefined,
        user_id: data.user_id,
        candidate_id: data.candidate_id
      });
    }
  }

  // Record scroll percentage during viewing
  public async recordScrollPercentage(scrollPercentage: number): Promise<void> {
    if (!this.currentUserId || !this.currentCandidateId) {
      console.log('⚠️ Cannot record scroll percentage - no active tracking session', {
        currentUserId: this.currentUserId,
        currentCandidateId: this.currentCandidateId
      });
      return;
    }

    // Ensure scroll percentage is within valid range (0-100)
    const validScrollPercentage = Math.max(0, Math.min(100, Math.round(scrollPercentage)));

    try {
      const supabase = createClient();
      
      if (!supabase) {
        console.error('❌ Supabase client not available for scroll percentage update');
        return;
      }

      // First, get current scroll percentage to only update if it increased
      const { data: currentRecord } = await supabase
        .from('candidate_views')
        .select('scroll_percentage')
        .eq('user_id', this.currentUserId)
        .eq('candidate_id', this.currentCandidateId)
        .maybeSingle();

      const currentScrollPercentage = currentRecord?.scroll_percentage || 0;

      // Only update if the new scroll percentage is greater than the current one
      // (We want to track the maximum scroll percentage reached)
      if (validScrollPercentage <= currentScrollPercentage) {
        console.log(`⏭️ Skipping scroll percentage update: ${validScrollPercentage}% <= ${currentScrollPercentage}% (current max)`);
        return;
      }

      console.log(`📜 Updating scroll percentage: ${currentScrollPercentage}% → ${validScrollPercentage}%`);
      
      // Use the new database function to update scroll percentage
      const { error } = await supabase.rpc('record_candidate_view_simple', {
        p_user_id: this.currentUserId,
        p_candidate_id: this.currentCandidateId,
        p_candidate_name: null, // Keep existing name
        p_view_duration: null, // Keep existing duration
        p_scroll_percentage: validScrollPercentage
      });

      if (error) {
        console.error('❌ Error updating scroll percentage:', {
          error: error,
          message: error?.message,
          details: error?.details,
          code: error?.code,
          scrollPercentage: validScrollPercentage
        });
      } else {
        console.log(`✅ Updated scroll percentage: ${validScrollPercentage}% (was ${currentScrollPercentage}%)`);
      }
    } catch (error) {
      console.error('❌ Exception in recordScrollPercentage:', error);
    }
  }

  // End tracking with duration calculation
  public async endTracking(): Promise<void> {
    try {
      if (!this.currentUserId || !this.currentCandidateId || this.startTime === 0) {
        console.log('⚠️ No active tracking session to end', {
          currentUserId: this.currentUserId,
          currentCandidateId: this.currentCandidateId,
          startTime: this.startTime
        });
        return;
      }

      // Stop periodic updates first
      this.stopPeriodicUpdates();

      // Calculate remaining duration since last update (to avoid double-counting)
      const endTime = Date.now();
      const durationSinceLastUpdate = Math.max(0, Math.round((endTime - this.lastUpdateTime) / 1000));
      
      const userId = this.currentUserId;
      const candidateId = this.currentCandidateId;
      
      // Calculate total duration for logging
      const totalDurationMs = endTime - this.startTime;
      const totalDurationSeconds = Math.max(0, Math.round(totalDurationMs / 1000));
      
      console.log(`📊 Ending tracking session - Total Duration: ${totalDurationSeconds} seconds`, {
        userId: userId,
        candidateId: candidateId,
        startTime: this.startTime,
        startTimeFormatted: new Date(this.startTime).toISOString(),
        endTime: endTime,
        endTimeFormatted: new Date(endTime).toISOString(),
        lastUpdateTime: this.lastUpdateTime,
        durationSinceLastUpdate: durationSinceLastUpdate,
        totalDurationMs: totalDurationMs,
        totalDurationSeconds: totalDurationSeconds,
        calculation: `${totalDurationMs}ms / 1000 = ${totalDurationSeconds}s`
      });

      // Save remaining duration since last periodic update
      // (Periodic updates already saved previous chunks)
      if (durationSinceLastUpdate > 0) {
        console.log(`💾 Saving remaining ${durationSinceLastUpdate} seconds since last update`);
        await this.updateViewDuration(userId, candidateId, durationSinceLastUpdate);
      } else {
        console.log('⚠️ No remaining duration to save (already saved by periodic updates)');
      }

      // Reset tracking state AFTER updating (in case update fails, we can retry)
      this.currentCandidateId = null;
      this.currentUserId = null;
      this.startTime = 0;
      this.lastUpdateTime = 0;
      
      console.log('✅ Tracking session ended and state reset');
    } catch (error) {
      console.error('❌ Error ending candidate tracking:', {
        error: error,
        errorMessage: error instanceof Error ? error.message : String(error),
        errorStack: error instanceof Error ? error.stack : undefined,
        currentUserId: this.currentUserId,
        currentCandidateId: this.currentCandidateId,
        startTime: this.startTime
      });
    }
  }

  // Update view duration for a specific candidate view
  private async updateViewDuration(userId: string, candidateId: string, duration: number): Promise<void> {
    try {
      const supabase = createClient();
      
      console.log(`🔍 Updating view duration: user=${userId}, candidate=${candidateId}, duration=${duration}`);
      
      if (!supabase) {
        console.error('❌ Supabase client not available');
        return;
      }
      
      // First, get the current duration to verify accumulation
      const { data: currentRecord } = await supabase
        .from('candidate_views')
        .select('id, view_duration')
        .eq('user_id', userId)
        .eq('candidate_id', candidateId)
        .maybeSingle();
      
      const currentDuration = currentRecord?.view_duration || 0;
      const expectedNewDuration = currentDuration + duration;
      
      console.log(`📊 Duration update: current=${currentDuration}, adding=${duration}, expected=${expectedNewDuration}`);
      
      // Use the RPC function which handles upsert and accumulation
      // This ensures the record exists and duration is accumulated correctly
      try {
        const { data: result, error } = await supabase.rpc('record_candidate_view_simple', {
          p_user_id: userId,
          p_candidate_id: candidateId,
          p_candidate_name: null, // Keep existing name
          p_view_duration: duration, // This will be added to existing duration by the function
          p_scroll_percentage: null // Keep existing scroll percentage
        });

        if (error) {
          console.warn('⚠️ RPC function failed for duration update, using fallback:', {
            error: error,
            message: error?.message,
            details: error?.details,
            hint: error?.hint,
            code: error?.code
          });
          throw error; // This will trigger the fallback
        }

        // Verify the update was successful by querying the record again
        const { data: updatedRecord } = await supabase
          .from('candidate_views')
          .select('id, view_duration')
          .eq('user_id', userId)
          .eq('candidate_id', candidateId)
          .maybeSingle();
        
        const actualNewDuration = updatedRecord?.view_duration || 0;
        
        console.log(`✅ Updated view duration using RPC for candidate ${candidateId}:`, {
          result: result,
          duration_before: currentDuration,
          duration_added: duration,
          duration_after: actualNewDuration,
          expected: expectedNewDuration,
          match: actualNewDuration === expectedNewDuration ? '✅' : '⚠️ MISMATCH'
        });
        
        // If there's a mismatch, log a warning but don't fail (data might still be saved)
        if (actualNewDuration !== expectedNewDuration) {
          console.warn('⚠️ Duration mismatch detected!', {
            expected: expectedNewDuration,
            actual: actualNewDuration,
            difference: actualNewDuration - expectedNewDuration
          });
        }
        
        return;
      } catch (rpcError) {
        console.log('🔄 RPC function not available for duration update, using fallback method...');
        
        // Fallback: Use direct table operations with proper upsert logic
        // Since there's a unique constraint on (user_id, candidate_id), we can query directly
        const { data: existingView, error: findError } = await supabase
          .from('candidate_views')
          .select('id, view_duration, scroll_percentage, page_views')
          .eq('user_id', userId)
          .eq('candidate_id', candidateId)
          .maybeSingle(); // Use maybeSingle() - unique constraint ensures only one record

        if (findError && findError.code !== 'PGRST116') {
          console.error('❌ Error finding candidate view to update duration:', {
            error: findError,
            message: findError?.message,
            details: findError?.details,
            code: findError?.code,
            user_id: userId,
            candidate_id: candidateId
          });
          return;
        }

        if (existingView && existingView.id) {
          // Update existing record by ADDING to the existing duration
          const currentDuration = existingView.view_duration || 0;
          const newTotalDuration = currentDuration + duration;
          
          console.log(`🔄 Adding ${duration} seconds to existing duration ${currentDuration} = ${newTotalDuration} seconds`);
          
          const { error: updateError } = await supabase
            .from('candidate_views')
            .update({ 
              view_duration: newTotalDuration,
              updated_at: new Date().toISOString()
            })
            .eq('id', existingView.id);

          if (updateError) {
            console.error('❌ Error updating view duration:', {
              error: updateError,
              message: updateError?.message,
              details: updateError?.details,
              code: updateError?.code,
              view_id: existingView.id
            });
            throw updateError; // Re-throw to ensure caller knows it failed
          } else {
            // Verify the update was successful
            const { data: verifiedRecord } = await supabase
              .from('candidate_views')
              .select('view_duration')
              .eq('id', existingView.id)
              .maybeSingle();
            
            const actualDuration = verifiedRecord?.view_duration || 0;
            
            console.log(`✅ Updated view duration: ${newTotalDuration} seconds (${currentDuration} + ${duration}) for candidate ${candidateId}`, {
              expected: newTotalDuration,
              actual: actualDuration,
              verified: actualDuration === newTotalDuration ? '✅' : '⚠️ MISMATCH'
            });
            
            if (actualDuration !== newTotalDuration) {
              console.warn('⚠️ Duration mismatch in fallback update!', {
                expected: newTotalDuration,
                actual: actualDuration
              });
            }
          }
        } else {
          // Record doesn't exist - this shouldn't happen if startTracking() was called
          // But create it anyway to ensure data integrity
          console.warn('⚠️ No existing view record found for duration update, creating new record');
          
          const { error: insertError } = await supabase
            .from('candidate_views')
            .insert({
              user_id: userId,
              candidate_id: candidateId,
              view_duration: duration, // Set initial duration
              scroll_percentage: 0,
              page_views: 1
            });

          if (insertError) {
            console.error('❌ Error creating view record for duration update:', {
              error: insertError,
              message: insertError?.message,
              details: insertError?.details,
              code: insertError?.code
            });
          } else {
            console.log(`✅ Created new view record with duration ${duration} seconds for candidate ${candidateId}`);
          }
        }
      }
    } catch (error) {
      console.error('❌ Exception in updateViewDuration:', {
        error: error,
        errorMessage: error instanceof Error ? error.message : String(error),
        errorStack: error instanceof Error ? error.stack : undefined,
        userId: userId,
        candidateId: candidateId,
        duration: duration
      });
    }
  }

  // Manually update view duration for testing
  public async updateViewDurationManually(userId: string, candidateId: string, duration: number): Promise<void> {
    console.log(`🔧 Manually updating view duration: user=${userId}, candidate=${candidateId}, duration=${duration}`);
    await this.updateViewDuration(userId, candidateId, duration);
  }

  // Test duration accumulation for a specific candidate
  public async testDurationAccumulation(userId: string, candidateId: string, candidateName: string): Promise<void> {
    try {
      console.log(`🧪 Testing duration accumulation for candidate: ${candidateName}`);
      
      // First visit - should create record
      console.log('🔄 First visit - creating initial record...');
      await this.startTracking(userId, candidateId, candidateName);
      await new Promise(resolve => setTimeout(resolve, 2000)); // 2 seconds
      await this.endTracking();
      
      // Second visit - should update existing record
      console.log('🔄 Second visit - updating existing record...');
      await this.startTracking(userId, candidateId, candidateName);
      await new Promise(resolve => setTimeout(resolve, 3000)); // 3 seconds
      await this.endTracking();
      
      // Third visit - should update existing record again
      console.log('🔄 Third visit - updating existing record again...');
      await this.startTracking(userId, candidateId, candidateName);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second
      await this.endTracking();
      
      console.log('✅ Duration accumulation test completed - should have ~6 seconds total');
    } catch (error) {
      console.error('❌ Error in testDurationAccumulation:', error);
    }
  }

  // Get candidate analytics (using the database function)
  public async getCandidateAnalytics(candidateId: string): Promise<Record<string, unknown> | null> {
    try {
      console.log('🔍 Fetching analytics for candidate:', candidateId);
      
      const supabase = createClient();
      // Query candidate_views table directly for analytics
      const { data, error } = await supabase
        .from('candidate_views')
        .select('candidate_id, candidate_name, view_duration, scroll_percentage, created_at, user_id')
        .eq('candidate_id', candidateId);

      if (error) {
        console.error('❌ Error fetching candidate analytics:', {
          error: error,
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code,
          candidateId: candidateId
        });
        return null;
      }

      console.log('📊 Analytics data received:', { data, candidateId, dataLength: data?.length });

      // Process the data to create analytics
      if (!data || data.length === 0) {
        console.log('📊 No analytics data found for candidate, returning default structure');
        return {
          candidate_id: candidateId,
          candidate_name: null,
          total_views: 0,
          unique_users: 0,
          total_duration: 0,
          avg_duration: 0,
          max_duration: 0,
          avg_scroll_percentage: 0,
          max_scroll_percentage: 0,
          hotness_score: 0,
          last_viewed: null,
          first_viewed: null
        };
      }

      // Calculate analytics from the raw data
      const totalViews = data.length;
      const uniqueUsers = new Set(data.map(d => d.user_id)).size;
      const totalDuration = data.reduce((sum, d) => sum + (d.view_duration || 0), 0);
      const avgDuration = totalDuration / totalViews;
      const maxDuration = Math.max(...data.map(d => d.view_duration || 0));
      const avgScrollPercentage = data.reduce((sum, d) => sum + (d.scroll_percentage || 0), 0) / totalViews;
      const maxScrollPercentage = Math.max(...data.map(d => d.scroll_percentage || 0));
      const firstViewed = data.reduce((earliest, d) => 
        new Date(d.created_at) < new Date(earliest) ? d.created_at : earliest, data[0].created_at);
      const lastViewed = data.reduce((latest, d) => 
        new Date(d.created_at) > new Date(latest) ? d.created_at : latest, data[0].created_at);

      const result = {
        candidate_id: candidateId,
        candidate_name: data[0].candidate_name,
        total_views: totalViews,
        unique_users: uniqueUsers,
        total_duration: totalDuration,
        avg_duration: Math.round(avgDuration),
        max_duration: maxDuration,
        avg_scroll_percentage: Math.round(avgScrollPercentage),
        max_scroll_percentage: maxScrollPercentage,
        hotness_score: totalDuration, // Use total duration as hotness score
        last_viewed: lastViewed,
        first_viewed: firstViewed
      };

      console.log('✅ Analytics data processed successfully:', result);
      return result;
    } catch (error) {
      console.error('❌ Exception in getCandidateAnalytics:', error);
      return null;
    }
  }

  // Get the most viewed candidate for a specific user (authenticated or anonymous)
  public async getUserMostViewedCandidate(userId: string): Promise<Record<string, unknown> | null> {
    try {
      console.log('🔍 Fetching most viewed candidate for user/device:', userId);
      console.log('🔍 Function called at:', new Date().toISOString());
      console.log('🔍 User ID type:', typeof userId);
      console.log('🔍 User ID length:', userId?.length);
      console.log('🔍 User ID starts with device_:', userId?.startsWith('device_'));
      console.log('🔍 User ID starts with anon_:', userId?.startsWith('anon_'));
      
      const supabase = createClient();
      
      // Use the proper database analytics function
      try {
        console.log('🔍 Calling get_most_viewed_candidate_smart with params:', { p_user_id: userId, p_days_back: 30 });
        
        const { data: analytics, error: analyticsError } = await supabase.rpc('get_most_viewed_candidate_smart', {
          p_user_id: userId,
          p_days_back: 30
        });

        console.log('🔍 RPC call result:', { data: analytics, error: analyticsError });

        if (analyticsError) {
          console.warn('⚠️ Analytics function failed, using fallback method:', analyticsError);
          throw analyticsError; // This will trigger the fallback
        }

        if (analytics && analytics.length > 0) {
          const userAnalytics = analytics[0];
          console.log('✅ Found user analytics:', userAnalytics);
          
          if (userAnalytics.candidate_id) {
            const result = {
              candidate_id: userAnalytics.candidate_id,
              candidate_name: userAnalytics.candidate_name,
              total_views: userAnalytics.total_views,
              view_duration: userAnalytics.total_duration,
              avg_view_duration: userAnalytics.avg_duration,
              last_activity: userAnalytics.last_viewed
            };
            console.log('✅ Returning analytics result:', result);
            return result;
          }
        }

        console.log('📭 No most viewed candidate found in analytics');
        console.log('📭 Analytics data:', analytics);
        return null;
      } catch (rpcError) {
        console.log('🔄 Analytics function not available, using fallback method...');
        
        // Fallback: Direct query with proper aggregation
        console.log('🔄 Using fallback method - direct query to candidate_views table');
        console.log('🔄 Querying for user_id:', userId);
        
        const { data: allViews, error: viewsError } = await supabase
          .from('candidate_views')
          .select('candidate_id, candidate_name, page_views, view_duration, scroll_percentage, created_at')
          .eq('user_id', userId);
          
        console.log('🔄 Direct query result:', { data: allViews, error: viewsError });

        if (viewsError) {
          console.error('❌ Error fetching user candidate views:', viewsError);
          return null;
        }

        if (!allViews || allViews.length === 0) {
          console.log('📭 No candidate views found for user:', userId);
          console.log('📭 Views error:', viewsError);
          return null;
        }

        console.log('📊 Processing', allViews.length, 'view records...');
        console.log('📊 Raw views data:', allViews);

        // Group by candidate and calculate totals
        const candidateStats = allViews.reduce((acc: Record<string, {
          candidate_id: string;
          candidate_name: string;
          total_views: number;
          total_duration: number;
          max_duration: number;
          last_viewed: string;
        }>, view: Record<string, unknown>) => {
          const candidateId = String(view.candidate_id);
          if (!acc[candidateId]) {
            acc[candidateId] = {
              candidate_id: candidateId,
              candidate_name: (view as Record<string, unknown>).candidate_name as string,
              total_views: 0,
              total_duration: 0,
              max_duration: 0,
              last_viewed: (view as Record<string, unknown>).created_at as string
            };
          }
          
          acc[candidateId].total_views += Number((view as Record<string, unknown>).page_views) || 1;
          acc[candidateId].total_duration += Number((view as Record<string, unknown>).view_duration) || 0;
          acc[candidateId].max_duration = Math.max(acc[candidateId].max_duration, Number((view as Record<string, unknown>).view_duration) || 0);
          
          if (new Date((view as Record<string, unknown>).created_at as string) > new Date(acc[candidateId].last_viewed)) {
            acc[candidateId].last_viewed = (view as Record<string, unknown>).created_at as string;
          }
          
          return acc;
        }, {});

        // Find the most viewed candidate (by total views, then by total duration)
        const mostViewed = Object.values(candidateStats).reduce((prev: {
          candidate_id: string;
          candidate_name: string;
          total_views: number;
          total_duration: number;
          max_duration: number;
          last_viewed: string;
        }, current: {
          candidate_id: string;
          candidate_name: string;
          total_views: number;
          total_duration: number;
          max_duration: number;
          last_viewed: string;
        }) => {
          if (current.total_views > prev.total_views) {
            return current;
          } else if (current.total_views === prev.total_views && current.total_duration > prev.total_duration) {
            return current;
          }
          return prev;
        });

        console.log('✅ Found most viewed candidate for user:', mostViewed);
        return mostViewed;
      }
    } catch (error) {
      console.error('❌ Exception in getUserMostViewedCandidate:', error);
      return null;
    }
  }

  // Get user's viewing history
  public async getUserViewingHistory(userId: string, daysBack: number = 30): Promise<Record<string, unknown>[] | null> {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .rpc('candidate_tracking_get_user_history', { 
          p_user_id: userId as string, 
          p_days_back: daysBack as number
        });

      if (error) {
        console.error('Error fetching user viewing history:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error fetching user viewing history:', error);
      return null;
    }
  }

  // Transfer anonymous tracking data to authenticated user
  public async transferAnonymousDataToUser(anonymousUserId: string, authenticatedUserId: string): Promise<void> {
    try {
      console.log('🔄 Transferring anonymous data to authenticated user:', {
        anonymousUserId,
        authenticatedUserId
      });

      const supabase = createClient();
      
      // Update all candidate_views records from anonymous to authenticated user
      const { error } = await supabase
        .from('candidate_views')
        .update({ user_id: authenticatedUserId })
        .eq('user_id', anonymousUserId);

      if (error) {
        console.error('❌ Error transferring anonymous data:', error);
        return;
      }

      // Clear the anonymous user ID from localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('shoreagents_anonymous_user_id');
      }

      // Update current tracking session
      this.currentUserId = authenticatedUserId;

      console.log('✅ Successfully transferred anonymous data to authenticated user');
    } catch (error) {
      console.error('❌ Exception in transferAnonymousDataToUser:', error);
    }
  }

  // Get anonymous user ID from localStorage
  public getAnonymousUserId(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('shoreagents_anonymous_user_id');
    }
    return null;
  }
}

// Export singleton instance
export const candidateTracker = CandidateTrackingService.getInstance();
