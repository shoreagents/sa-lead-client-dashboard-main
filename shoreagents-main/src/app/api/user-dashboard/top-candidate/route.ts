import { NextRequest, NextResponse } from 'next/server'
import { candidateTracker } from '@/lib/candidateTrackingService'
import { getEmployeeCardData } from '@/lib/api'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ success: false, error: 'User ID is required' }, { status: 400 })
    }

    console.log('🔄 Fetching top candidate for user:', userId)

    // Get the most viewed candidate for this specific user
    const mostViewedData = await candidateTracker.getUserMostViewedCandidate(userId)
    
    if (!mostViewedData) {
      console.log('❌ No most viewed candidate data found - returning fallback')
      // Get all employees for fallback
      const employees = await getEmployeeCardData()
      if (employees.length > 0) {
        const fallbackCandidate = {
          ...employees[0],
          hotnessScore: 0
        }
        return NextResponse.json({ success: true, data: fallbackCandidate })
      }
      return NextResponse.json({ success: true, data: null })
    }

    // Get all employees to find the matching candidate
    const employees = await getEmployeeCardData()
    
    // Try multiple matching strategies
    let targetEmployee = employees.find(emp => emp.user.id === mostViewedData.candidate_id)
    
    // If not found by ID, try matching by name
    if (!targetEmployee && mostViewedData.candidate_name) {
      const candidateName = String(mostViewedData.candidate_name)
      targetEmployee = employees.find(emp => 
        emp.user.name.toLowerCase().includes(candidateName.toLowerCase()) ||
        candidateName.toLowerCase().includes(emp.user.name.toLowerCase())
      )
    }
    
    // If still not found, try matching by first name or last name
    if (!targetEmployee && mostViewedData.candidate_name) {
      const nameParts = String(mostViewedData.candidate_name).split(' ')
      targetEmployee = employees.find(emp => 
        nameParts.some(part => 
          emp.user.name.toLowerCase().includes(part.toLowerCase()) ||
          part.toLowerCase().includes(emp.user.name.toLowerCase())
        )
      )
    }
    
    if (targetEmployee) {
      const hotnessScore = Number(mostViewedData.view_duration) || 0
      const candidateWithScore = {
        ...targetEmployee,
        hotnessScore: hotnessScore
      }
      
      console.log('✅ Found matching candidate:', targetEmployee.user.name)
      return NextResponse.json({ success: true, data: candidateWithScore })
    }

    // Return fallback if no match found
    console.log('❌ No matching employee found - returning fallback')
    if (employees.length > 0) {
      const fallbackCandidate = {
        ...employees[0],
        hotnessScore: 0
      }
      return NextResponse.json({ success: true, data: fallbackCandidate })
    }

    return NextResponse.json({ success: true, data: null })

  } catch (error) {
    console.error('❌ Error in top-candidate API:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}






