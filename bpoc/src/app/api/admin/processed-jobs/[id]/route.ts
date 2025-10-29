import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/database'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check for Authorization token
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // For now, skip user validation in development
    if (process.env.NODE_ENV !== 'development') {
      // TODO: Implement proper token validation and user extraction
      // const userId = await validateToken(authHeader.replace('Bearer ', ''))
      // if (!userId) return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const { id } = await params
    const res = await pool.query(
      `SELECT p.*, m.company as company_name
       FROM processed_job_requests p
       LEFT JOIN members m ON m.company_id = p.company_id
       WHERE p.id = $1`,
      [id]
    )
    if (res.rows.length === 0) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json({ job: res.rows[0] })
  } catch (e) {
    return NextResponse.json({ error: 'Failed to fetch processed job' }, { status: 500 })
  }
}


