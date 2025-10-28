import { NextRequest, NextResponse } from 'next/server'
import { getBPOCDatabasePool } from '@/lib/bpoc-database'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const candidateId = searchParams.get('candidateId')

    if (!candidateId) {
      return NextResponse.json({ 
        success: false, 
        error: 'Candidate ID is required' 
      }, { status: 400 })
    }

    console.log('🔍 Fetching email for candidate ID:', candidateId)

    // Get BPOC database connection
    const pool = getBPOCDatabasePool()
    const client = await pool.connect()

    try {
      // Fetch user email from BPOC database
      const query = `
        SELECT 
          id as user_id,
          email,
          first_name,
          last_name
        FROM users
        WHERE id = $1
      `
      
      const result = await client.query(query, [candidateId])
      
      if (result.rows.length === 0) {
        console.log('⚠️ No user found for candidate:', candidateId)
        return NextResponse.json({ 
          success: false, 
          error: 'Candidate not found' 
        }, { status: 404 })
      }

      const user = result.rows[0]

      if (!user.email) {
        console.log('⚠️ No email found for candidate:', candidateId)
        return NextResponse.json({ 
          success: false, 
          error: 'Candidate email not found' 
        }, { status: 404 })
      }

      console.log('✅ Found candidate email:', user.email)

      return NextResponse.json({ 
        success: true, 
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name
      })
    } finally {
      client.release()
    }

  } catch (error) {
    console.error('❌ Error in get-candidate-email API:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

