import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/client'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ success: false, error: 'User ID is required' }, { status: 400 })
    }

    console.log('🔄 Fetching jobs for user:', userId)

    const supabase = createClient()

    // Fetch all pricing quotes with their roles
    const { data: quotes, error } = await supabase
      .from('pricing_quotes')
      .select(`
        id,
        industry,
        member_count,
        total_monthly_cost,
        currency_code,
        created_at,
        roles:pricing_quote_roles(
          id,
          role_title,
          role_description,
          experience_level,
          workspace_type,
          base_salary_php
        )
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('❌ Error fetching jobs:', error)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to fetch jobs',
        details: error.message
      }, { status: 500 })
    }

    // Transform quotes into job postings - One job per quote, not per role
    const jobs = quotes.map(quote => {
      if (!quote.roles || quote.roles.length === 0) return null
      
      // Get the primary role (first role) for the main job details
      const primaryRole = quote.roles[0]
      
      // Create a combined description that includes all roles
      const allRolesDescription = quote.roles.length === 1 
        ? (primaryRole.role_description || `Looking for a ${primaryRole.role_title} with ${primaryRole.experience_level} experience to join our team.`)
        : `We are looking to fill ${quote.roles.length} positions: ${quote.roles.map((role: any) => role.role_title).join(', ')}. Each role requires ${primaryRole.experience_level} experience level.`
      
      return {
        id: `quote-${quote.id}`, // Use quote ID as job ID to ensure uniqueness
        quoteId: quote.id,
        title: quote.roles.length === 1 
          ? primaryRole.role_title 
          : `${quote.industry} Team (${quote.roles.length} positions)`,
        industry: quote.industry,
        description: allRolesDescription,
        experienceLevel: primaryRole.experience_level,
        workspaceType: primaryRole.workspace_type,
        salary: `₱${Number(quote.total_monthly_cost).toLocaleString()}/month`,
        salaryAmount: Number(quote.total_monthly_cost),
        memberCount: quote.member_count,
        totalCost: Number(quote.total_monthly_cost),
        currencyCode: quote.currency_code,
        status: 'Active', // All jobs from pricing calculator are active
        createdAt: quote.created_at,
        applicants: 0, // Will be populated when we add application tracking
        rolesCount: quote.roles.length, // Track number of roles for display
        allRoles: quote.roles // Include all roles for detailed view
      }
    }).filter(Boolean) // Remove any null entries

    console.log('✅ Jobs fetched:', jobs.length)
    return NextResponse.json({ success: true, data: jobs })

  } catch (error) {
    console.error('❌ Error in jobs API:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

