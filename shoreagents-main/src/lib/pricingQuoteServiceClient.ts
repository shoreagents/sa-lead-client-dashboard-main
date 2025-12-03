import { createClient } from './supabase/client'
import type { CandidateRecommendation } from './bpocPricingService'

export interface QuoteCandidateRoleRecommendations {
  roleTitle: string
  roleLevel: 'entry' | 'mid' | 'senior'
  totalCandidates: number
  recommendedCandidates: CandidateRecommendation[]
}

export interface PricingQuoteData {
  user_id: string
  session_id?: string
  member_count: number
  industry: string
  total_monthly_cost: number
  currency_code: string // Required, not optional!
  candidate_recommendations?: QuoteCandidateRoleRecommendations[]
  roles: Array<{
    role_title: string
    role_description?: string
    experience_level: string
    workspace_type: string
    base_salary_php: number
    multiplier: number
    monthly_cost: number
    workspace_cost: number
    total_cost: number
  }>
}

export interface SavedPricingQuote {
  id: string
  user_id: string
  session_id?: string
  member_count: number
  industry: string
  total_monthly_cost: number
  currency_code: string
  candidate_recommendations?: QuoteCandidateRoleRecommendations[]
  created_at: string
  updated_at: string
  roles: Array<{
    id: string
    quote_id: string
    role_title: string
    role_description?: string
    experience_level: string
    workspace_type: string
    base_salary_php: number
    multiplier: number
    monthly_cost: number
    workspace_cost: number
    total_cost: number
    created_at: string
  }>
}

export class PricingQuoteServiceClient {
  /**
   * Save a pricing quote to the database
   */
  static async saveQuote(quoteData: PricingQuoteData): Promise<{ success: boolean; data?: SavedPricingQuote; error?: string }> {
    try {
      console.log('🔍 PricingQuoteServiceClient.saveQuote called with:', {
        user_id: quoteData.user_id,
        member_count: quoteData.member_count,
        industry: quoteData.industry,
        roles_count: quoteData.roles.length
      })

      console.log('💰 PricingQuoteServiceClient: Saving quote with currency:', {
        currency_code: quoteData.currency_code,
        total_monthly_cost: quoteData.total_monthly_cost
      });

      // Use server-side tracking API instead of broken client-side Supabase
      const response = await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'pricing_quote',
          data: {
            userId: quoteData.user_id,
            totalPrice: quoteData.total_monthly_cost,
            roles: quoteData.roles.map(role => ({
              role_name: role.role_title,
              quantity: 1, // Default to 1, can be enhanced later
              hourly_rate: role.base_salary_php / 160, // Assuming 160 hours/month
              hours_per_week: 40,
              total_cost: role.total_cost
            }))
          }
        })
      })

      const result = await response.json()

      if (result.success) {
        console.log('✅ Quote saved successfully via API')
        
        // Return the quote data in expected format
        const savedQuote: SavedPricingQuote = {
          id: result.data?.quote?.id || 'temp-id',
          user_id: quoteData.user_id,
          session_id: quoteData.session_id,
          member_count: quoteData.member_count,
          industry: quoteData.industry,
          total_monthly_cost: quoteData.total_monthly_cost,
          currency_code: quoteData.currency_code,
          candidate_recommendations: quoteData.candidate_recommendations,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          roles: quoteData.roles.map((role, index) => ({
            id: `temp-role-${index}`,
            quote_id: result.data?.quote?.id || 'temp-id',
            ...role,
            created_at: new Date().toISOString()
          }))
        }

        return { success: true, data: savedQuote }
      } else {
        console.error('❌ API error saving quote:', result.error)
        return { success: false, error: result.error }
      }

    } catch (error) {
      console.error('❌ Unexpected error in saveQuote:', error)
      return { success: false, error: 'An unexpected error occurred' }
    }
  }

  /**
   * Get quotes for a specific user
   */
  static async getUserQuotes(userId: string): Promise<{ success: boolean; data?: SavedPricingQuote[]; error?: string }> {
    try {
      const supabase = createClient()

      const { data: quotes, error: quotesError } = await supabase
        .from('pricing_quotes')
        .select(`
          *,
          roles:pricing_quote_roles(*)
        `)
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

      if (quotesError) {
        console.error('❌ Error fetching quotes:', quotesError)
        return { success: false, error: quotesError.message }
      }

      return { success: true, data: quotes as SavedPricingQuote[] }

    } catch (error) {
      console.error('❌ Unexpected error in getUserQuotes:', error)
      return { success: false, error: 'An unexpected error occurred' }
    }
  }

  /**
   * Get a specific quote by ID
   */
  static async getQuoteById(quoteId: string): Promise<{ success: boolean; data?: SavedPricingQuote; error?: string }> {
    try {
      const supabase = createClient()

      const { data: quote, error: quoteError } = await supabase
        .from('pricing_quotes')
        .select(`
          *,
          roles:pricing_quote_roles(*)
        `)
        .eq('id', quoteId)
        .single()

      if (quoteError) {
        console.error('❌ Error fetching quote:', quoteError)
        return { success: false, error: quoteError.message }
      }

      return { success: true, data: quote as SavedPricingQuote }

    } catch (error) {
      console.error('❌ Unexpected error in getQuoteById:', error)
      return { success: false, error: 'An unexpected error occurred' }
    }
  }

  /**
   * Delete a quote and its associated roles
   */
  static async deleteQuote(quoteId: string): Promise<{ success: boolean; error?: string }> {
    try {
      const supabase = createClient()

      // Delete the quote (roles will be deleted automatically due to CASCADE)
      const { error } = await supabase
        .from('pricing_quotes')
        .delete()
        .eq('id', quoteId)

      if (error) {
        console.error('❌ Error deleting quote:', error)
        return { success: false, error: error.message }
      }

      return { success: true }

    } catch (error) {
      console.error('❌ Unexpected error in deleteQuote:', error)
      return { success: false, error: 'An unexpected error occurred' }
    }
  }
}
