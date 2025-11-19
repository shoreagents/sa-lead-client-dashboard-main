import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(_request: NextRequest) {
  try {
    void _request
    // Get all users with their latest lead progress using Prisma
    const usersWithProgress = await prisma.user.findMany({
      where: {
        user_type: {
          not: 'Admin'
        }
      },
      include: {
        leadProgress: true, // One-to-one relation, not array
        pricingQuotes: {
          orderBy: { created_at: 'desc' },
          take: 3 // Get latest 3 quotes
        }
      },
      orderBy: { created_at: 'desc' }
    })

    // Transform data to match the expected format
    const leads = usersWithProgress.map(user => {
      const currentProgress = user.leadProgress // One-to-one relation, not array
      const currentStatus = currentProgress?.status || 'new_lead'
      
      // Determine status display name
      const statusMap: { [key: string]: string } = {
        'new_lead': 'New Lead',
        'stage_1': 'Stage 1',
        'stage_2': 'Stage 2',
        'quoted': 'Quoted',
        'meeting_booked': 'Meeting Booked',
        'signed_up': 'Signed Up',
        'closed_won': 'Closed Won'
      }

      // Calculate priority based on user type and activity
      let priority = 'Low'
      if (user.user_type === 'Regular' && user.pricingQuotes.length > 0) {
        priority = 'High'
      } else if (user.user_type === 'Regular') {
        priority = 'Medium'
      }

      // Determine source based on user data
      let source = 'Website'
      if (user.company) {
        source = user.company
      } else if (user.email && user.email.includes('@')) {
        source = 'Email Signup'
      }

      return {
        id: user.user_id,
        name: `${user.first_name || ''} ${user.last_name || ''}`.trim() || 'Anonymous User',
        company: user.company || 'Not specified',
        email: user.email || 'No email provided',
        status: statusMap[currentStatus] || 'New Lead',
        priority,
        source,
        created: user.created_at?.toISOString() || new Date().toISOString(),
        lastContact: user.updated_at?.toISOString() || new Date().toISOString(),
        notes: '',
        column: currentStatus,
        userType: user.user_type,
        userId: user.user_id,
        quoteCount: user.pricingQuotes.length,
        industry: user.industry_name || 'Not specified',
        firstLeadCapture: user.first_lead_capture || false,
        secondLeadCapture: user.second_lead_capture || false,
        thirdLeadCapture: user.third_lead_capture || false
      }
    })

    // Calculate stats
    const stats = {
      new: leads.filter(lead => lead.column === 'new_lead').length,
      stage1: leads.filter(lead => lead.column === 'stage_1').length,
      stage2: leads.filter(lead => lead.column === 'stage_2').length,
      quoted: leads.filter(lead => lead.column === 'quoted').length,
      meeting_booked: leads.filter(lead => lead.column === 'meeting_booked').length,
      signed_up: leads.filter(lead => lead.column === 'signed_up').length,
      closed_won: leads.filter(lead => lead.column === 'closed_won').length
    }

    return NextResponse.json({ 
      success: true, 
      data: leads,
      total: leads.length,
      stats
    })

  } catch (error) {
    console.error('Error in leads API:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { leadId, column, changedBy, changeReason } = await request.json()
    
    console.log('🔄 API: Updating lead status:', { leadId, column, changedBy, changeReason })

    if (!leadId || !column) {
      console.log('❌ API: Missing required fields')
      return NextResponse.json({ error: 'Lead ID and column are required' }, { status: 400 })
    }

    // Check if user already has a progress record
    const existingProgress = await prisma.leadProgress.findFirst({
      where: { user_id: leadId },
      orderBy: { created_at: 'desc' }
    })

    let updatedProgress

    if (existingProgress) {
      // Update existing record
      updatedProgress = await prisma.leadProgress.update({
        where: { id: existingProgress.id },
        data: {
          previous_status: existingProgress.status, // Store old status as previous
          status: column, // Update to new status
          changed_by: changedBy || null,
          change_reason: changeReason || null,
          created_at: new Date() // Update timestamp
        }
      })
      console.log('✅ API: Updated existing lead status:', updatedProgress)
    } else {
      // Create new record only if none exists
      updatedProgress = await prisma.leadProgress.create({
        data: {
          user_id: leadId,
          status: column,
          previous_status: null,
          changed_by: changedBy || null,
          change_reason: changeReason || null
        }
      })
      console.log('✅ API: Created new lead status:', updatedProgress)
    }

    return NextResponse.json({ 
      success: true, 
      data: updatedProgress,
      message: 'Lead status updated successfully' 
    })

  } catch (error) {
    console.error('Error updating lead:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
