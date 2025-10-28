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

    // Transform quotes into job postings
    const jobs = quotes.flatMap(quote => {
      if (!quote.roles || quote.roles.length === 0) return []
      
      return quote.roles.map((role: any) => ({
        id: role.id,
        quoteId: quote.id,
        title: role.role_title,
        industry: quote.industry,
        description: role.role_description || `Looking for a ${role.role_title} with ${role.experience_level} experience to join our team.`,
        experienceLevel: role.experience_level,
        workspaceType: role.workspace_type,
        salary: `₱${Number(role.base_salary_php).toLocaleString()}/month`,
        salaryAmount: Number(role.base_salary_php),
        memberCount: quote.member_count,
        totalCost: Number(quote.total_monthly_cost),
        currencyCode: quote.currency_code,
        status: 'Active', // All jobs from pricing calculator are active
        createdAt: quote.created_at,
        applicants: 0 // Will be populated when we add application tracking
      }))
    })

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

