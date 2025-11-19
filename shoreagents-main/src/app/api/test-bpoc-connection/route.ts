import { NextRequest, NextResponse } from 'next/server'
import { testBPOCDatabaseConnection, getBPOCDatabasePool } from '@/lib/bpoc-database'

export async function GET(_request: NextRequest) {
  try {
    console.log('🧪 Testing BPOC database connection...')
    
    // Check if environment variable is set
    const bpocUrl = process.env.BPOC_DATABASE_URL
    if (!bpocUrl) {
      return NextResponse.json({
        success: false,
        error: 'BPOC_DATABASE_URL environment variable is not set',
        envCheck: {
          BPOC_DATABASE_URL: 'NOT SET ❌',
          NODE_ENV: process.env.NODE_ENV
        }
      }, { status: 500 })
    }
    
    // Test connection
    const connectionTest = await testBPOCDatabaseConnection()
    
    if (!connectionTest.success) {
      return NextResponse.json({
        success: false,
        error: connectionTest.message,
        envCheck: {
          BPOC_DATABASE_URL: 'SET ✅ (value hidden for security)',
          NODE_ENV: process.env.NODE_ENV
        }
      }, { status: 500 })
    }
    
    // Try to query the users table
    const pool = getBPOCDatabasePool()
    const client = await pool.connect()
    
    try {
      // Get table info
      const tableCheck = await client.query(`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name IN ('users', 'user_work_status', 'ai_analysis_results')
        ORDER BY table_name
      `)
      
      // Get user count
      const userCount = await client.query('SELECT COUNT(*) as count FROM users')
      const workStatusCount = await client.query('SELECT COUNT(*) as count FROM user_work_status')
      const analysisCount = await client.query('SELECT COUNT(*) as count FROM ai_analysis_results')
      
      return NextResponse.json({
        success: true,
        message: 'BPOC database connection is working! ✅',
        connection: connectionTest.message,
        envCheck: {
          BPOC_DATABASE_URL: 'SET ✅ (value hidden for security)',
          NODE_ENV: process.env.NODE_ENV
        },
        tables: {
          available: tableCheck.rows.map(r => r.table_name),
          counts: {
            users: parseInt(userCount.rows[0].count),
            user_work_status: parseInt(workStatusCount.rows[0].count),
            ai_analysis_results: parseInt(analysisCount.rows[0].count)
          }
        }
      })
    } finally {
      client.release()
    }
    
  } catch (error) {
    console.error('❌ BPOC connection test error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      errorType: error instanceof Error ? error.constructor.name : typeof error,
      envCheck: {
        BPOC_DATABASE_URL: process.env.BPOC_DATABASE_URL ? 'SET ✅ (value hidden for security)' : 'NOT SET ❌',
        NODE_ENV: process.env.NODE_ENV
      }
    }, { status: 500 })
  }
}


