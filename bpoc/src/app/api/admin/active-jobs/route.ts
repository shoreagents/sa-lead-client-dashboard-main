import { NextResponse } from 'next/server'
import pool from '@/lib/database'

export async function GET() {
  try {
    // Count active jobs from job sources (recruiter_jobs table has been dropped)
    // 1. Count from processed_job_requests table
    const processedJobsResult = await pool.query(`
      SELECT COUNT(*) as count 
      FROM processed_job_requests 
      WHERE status = 'active'
    `)
    const processedJobsCount = parseInt(processedJobsResult.rows[0].count || 0)
    
    // 2. Count from job_requests table (excluding those already in processed_job_requests)
    const jobRequestsResult = await pool.query(`
      SELECT COUNT(*) as count 
      FROM job_requests 
      WHERE status = 'active'
        AND NOT EXISTS (
          SELECT 1 FROM processed_job_requests p WHERE p.id = job_requests.id
        )
    `)
    const jobRequestsCount = parseInt(jobRequestsResult.rows[0].count || 0)
    
    // Total active jobs from all sources
    const activeJobs = jobRequestsCount + processedJobsCount
    
    return NextResponse.json({ 
      active_jobs: activeJobs,
      breakdown: {
        job_requests: jobRequestsCount,
        processed_job_requests: processedJobsCount
      }
    })
  } catch (error) {
    console.error('Error getting active jobs:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
