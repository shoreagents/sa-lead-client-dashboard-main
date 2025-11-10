import { NextRequest, NextResponse } from 'next/server'
import { fetchBPOCUserByName } from '@/lib/bpoc-database'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const name = searchParams.get('name')
    
    if (!name) {
      return NextResponse.json({
        success: false,
        error: 'Name parameter is required'
      }, { status: 400 })
    }
    
    console.log(`🔍 Searching for user: ${name}`)
    
    const user = await fetchBPOCUserByName(name)
    
    if (!user) {
      return NextResponse.json({
        success: false,
        error: 'User not found',
        searchedName: name
      }, { status: 404 })
    }
    
    console.log(`✅ Found user: ${user.full_name} (${user.user_id})`)
    
    return NextResponse.json({
      success: true,
      data: user
    })
  } catch (error) {
    console.error('❌ Error fetching user:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch user',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

