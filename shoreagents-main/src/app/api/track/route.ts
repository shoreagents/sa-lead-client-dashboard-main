import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'

/**
 * Unified Tracking API - Handles ALL tracking operations server-side
 * 
 * This API fixes the broken client-side Supabase tracking by:
 * 1. Using server-side Supabase/Prisma (which has proper permissions)
 * 2. Centralizing all tracking operations in one place
 * 3. Providing consistent error handling and logging
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, data } = body

    if (!type) {
      return NextResponse.json(
        { success: false, error: 'Tracking type is required' },
        { status: 400 }
      )
    }

    console.log(`📊 [TRACK API] Type: ${type}, Data:`, data)

    switch (type) {
      case 'page_visit':
        return await trackPageVisit(data)
      
      case 'content_view':
        return await trackContentView(data)
      
      case 'candidate_view':
        return await trackCandidateView(data)
      
      case 'pricing_quote':
        return await trackPricingQuote(data)
      
      case 'interview_request':
        return await trackInterviewRequest(data)
      
      default:
        return NextResponse.json(
          { success: false, error: `Unknown tracking type: ${type}` },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('❌ [TRACK API] Error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    )
  }
}

/**
 * Track page visits - creates or updates user_page_visits record
 */
async function trackPageVisit(data: {
  userId: string
  pagePath: string
  ipAddress?: string
  timeSpentSeconds?: number
}) {
  const { userId, pagePath, ipAddress, timeSpentSeconds = 0 } = data

  if (!userId || !pagePath) {
    return NextResponse.json(
      { success: false, error: 'userId and pagePath are required' },
      { status: 400 }
    )
  }

  try {
    console.log(`📄 [PAGE_VISIT] User: ${userId}, Page: ${pagePath}, Time: ${timeSpentSeconds}s`)

    // Check if visit exists
    const existingVisit = await prisma.userPageVisit.findFirst({
      where: {
        user_id: userId,
        page_path: pagePath
      }
    })

    const now = new Date()

    if (existingVisit) {
      // Update existing visit
      const updatedVisit = await prisma.userPageVisit.update({
        where: { id: existingVisit.id },
        data: {
          visit_count: existingVisit.visit_count + 1,
          time_spent_seconds: existingVisit.time_spent_seconds + timeSpentSeconds,
          last_visit_timestamp: now,
          ip_address: ipAddress || existingVisit.ip_address
        }
      })

      console.log(`✅ [PAGE_VISIT] Updated: ${pagePath}, Total visits: ${updatedVisit.visit_count}, Total time: ${updatedVisit.time_spent_seconds}s`)

      return NextResponse.json({
        success: true,
        action: 'updated',
        data: updatedVisit
      })
    } else {
      // Create new visit
      const newVisit = await prisma.userPageVisit.create({
        data: {
          user_id: userId,
          page_path: pagePath,
          ip_address: ipAddress,
          visit_timestamp: now,
          visit_count: 1,
          time_spent_seconds: timeSpentSeconds,
          last_visit_timestamp: now
        }
      })

      console.log(`✅ [PAGE_VISIT] Created: ${pagePath}, Time: ${timeSpentSeconds}s`)

      return NextResponse.json({
        success: true,
        action: 'created',
        data: newVisit
      })
    }
  } catch (error) {
    console.error('❌ [PAGE_VISIT] Error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to track page visit' 
      },
      { status: 500 }
    )
  }
}

/**
 * Track content views - creates or updates content_views record
 */
async function trackContentView(data: {
  userId: string
  contentId: string
  contentType: string
  contentTitle: string
  timeSpentSeconds?: number
}) {
  const { userId, contentId, contentType, contentTitle, timeSpentSeconds = 0 } = data

  if (!userId || !contentId) {
    return NextResponse.json(
      { success: false, error: 'userId and contentId are required' },
      { status: 400 }
    )
  }

  try {
    console.log(`📰 [CONTENT_VIEW] User: ${userId}, Content: ${contentId}, Type: ${contentType}`)

    // Check if view exists
    const existingView = await prisma.content_views.findFirst({
      where: {
        user_id: userId,
        content_id: contentId
      }
    })

    const now = new Date()

    if (existingView) {
      // Update existing view
      const updatedView = await prisma.content_views.update({
        where: { id: existingView.id },
        data: {
          view_duration: (existingView.view_duration || 0) + timeSpentSeconds,
          activity_count: (existingView.activity_count || 0) + 1,
          updated_at: now
        }
      })

      console.log(`✅ [CONTENT_VIEW] Updated: ${contentId}, Activity: ${updatedView.activity_count}`)

      return NextResponse.json({
        success: true,
        action: 'updated',
        data: updatedView
      })
    } else {
      // Create new view
      const newView = await prisma.content_views.create({
        data: {
          user_id: userId,
          content_id: contentId,
          content_type: contentType,
          content_title: contentTitle,
          viewed_at: now,
          view_duration: timeSpentSeconds,
          activity_count: 1
        }
      })

      console.log(`✅ [CONTENT_VIEW] Created: ${contentId}`)

      return NextResponse.json({
        success: true,
        action: 'created',
        data: newView
      })
    }
  } catch (error) {
    console.error('❌ [CONTENT_VIEW] Error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to track content view' 
      },
      { status: 500 }
    )
  }
}

/**
 * Track candidate views - creates or updates candidate_views record
 */
async function trackCandidateView(data: {
  userId: string
  candidateId: string
  candidateName?: string
  viewDuration?: number
  scrollPercentage?: number
}) {
  const { userId, candidateId, candidateName, viewDuration = 0, scrollPercentage = 0 } = data

  if (!userId || !candidateId) {
    return NextResponse.json(
      { success: false, error: 'userId and candidateId are required' },
      { status: 400 }
    )
  }

  try {
    console.log(`👤 [CANDIDATE_VIEW] User: ${userId}, Candidate: ${candidateId}, Duration: ${viewDuration}s, Scroll: ${scrollPercentage}%`)

    // Check if view exists
    const existingView = await prisma.candidateView.findFirst({
      where: {
        user_id: userId,
        candidate_id: candidateId
      }
    })

    const now = new Date()

    if (existingView) {
      // Update existing view - keep max scroll percentage, add duration
      const updatedView = await prisma.candidateView.update({
        where: { id: existingView.id },
        data: {
          page_views: existingView.page_views + 1,
          view_duration: existingView.view_duration + viewDuration,
          scroll_percentage: Math.max(existingView.scroll_percentage || 0, scrollPercentage),
          updated_at: now
        }
      })

      console.log(`✅ [CANDIDATE_VIEW] Updated: ${candidateId}, Total views: ${updatedView.page_views}`)

      return NextResponse.json({
        success: true,
        action: 'updated',
        data: updatedView
      })
    } else {
      // Create new view
      const newView = await prisma.candidateView.create({
        data: {
          user_id: userId,
          candidate_id: candidateId,
          candidate_name: candidateName || '',
          page_views: 1,
          view_duration: viewDuration,
          scroll_percentage: scrollPercentage,
          created_at: now,
          updated_at: now
        }
      })

      console.log(`✅ [CANDIDATE_VIEW] Created: ${candidateId}`)

      return NextResponse.json({
        success: true,
        action: 'created',
        data: newView
      })
    }
  } catch (error) {
    console.error('❌ [CANDIDATE_VIEW] Error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to track candidate view' 
      },
      { status: 500 }
    )
  }
}

/**
 * Track pricing quotes - creates pricing_quotes record
 */
async function trackPricingQuote(data: {
  userId: string
  totalPrice: number
  roles?: Array<{
    role_name: string
    quantity: number
    hourly_rate: number
    hours_per_week: number
    total_cost: number
  }>
}) {
  const { userId, totalPrice, roles = [] } = data

  if (!userId || !totalPrice) {
    return NextResponse.json(
      { success: false, error: 'userId and totalPrice are required' },
      { status: 400 }
    )
  }

  try {
    console.log(`💰 [PRICING_QUOTE] User: ${userId}, Total: $${totalPrice}, Roles: ${roles.length}`)

    // Create pricing quote
    const quote = await prisma.pricingQuote.create({
      data: {
        user_id: userId,
        total_price: totalPrice,
        quote_timestamp: new Date()
      }
    })

    // Create pricing quote roles if provided
    if (roles.length > 0) {
      await prisma.pricingQuoteRole.createMany({
        data: roles.map(role => ({
          quote_id: quote.id,
          role_name: role.role_name,
          quantity: role.quantity,
          hourly_rate: role.hourly_rate,
          hours_per_week: role.hours_per_week,
          total_cost: role.total_cost
        }))
      })
    }

    console.log(`✅ [PRICING_QUOTE] Created: Quote ID ${quote.id}`)

    return NextResponse.json({
      success: true,
      action: 'created',
      data: { quote, rolesCount: roles.length }
    })
  } catch (error) {
    console.error('❌ [PRICING_QUOTE] Error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to track pricing quote' 
      },
      { status: 500 }
    )
  }
}

/**
 * Track interview requests - creates interview_request record
 */
async function trackInterviewRequest(data: {
  userId: string
  candidateId: string
  candidateName: string
  userEmail?: string
  userName?: string
  message?: string
}) {
  const { userId, candidateId, candidateName, userEmail, userName, message } = data

  if (!userId || !candidateId) {
    return NextResponse.json(
      { success: false, error: 'userId and candidateId are required' },
      { status: 400 }
    )
  }

  try {
    console.log(`📧 [INTERVIEW_REQUEST] User: ${userId}, Candidate: ${candidateId}`)

    // Create interview request
    const request = await prisma.interviewRequest.create({
      data: {
        user_id: userId,
        candidate_id: candidateId,
        candidate_name: candidateName,
        user_email: userEmail || null,
        user_name: userName || null,
        message: message || null,
        status: 'pending',
        created_at: new Date()
      }
    })

    console.log(`✅ [INTERVIEW_REQUEST] Created: Request ID ${request.id}`)

    return NextResponse.json({
      success: true,
      action: 'created',
      data: request
    })
  } catch (error) {
    console.error('❌ [INTERVIEW_REQUEST] Error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to track interview request' 
      },
      { status: 500 }
    )
  }
}

