import { NextResponse } from 'next/server'
import pool from '@/lib/database'

export async function GET() {
  try {
    // Count active jobs from all three sources (same as job-matching page)
    // 1. Count from job_requests table
    const jobRequestsResult = await pool.query(`
      SELECT COUNT(*) as count 
      FROM job_requests 
      WHERE status = 'active'
    `)
    const jobRequestsCount = parseInt(jobRequestsResult.rows[0].count || 0)
    
    // 2. Count from processed_job_requests table
    const processedJobsResult = await pool.query(`
      SELECT COUNT(*) as count 
      FROM processed_job_requests 
      WHERE status = 'active'
    `)
    const processedJobsCount = parseInt(processedJobsResult.rows[0].count || 0)
    
    // 3. Count from recruiter_jobs table
    const recruiterJobsResult = await pool.query(`
      SELECT COUNT(*) as count 
      FROM recruiter_jobs 
      WHERE status = 'active'
    `)
    const recruiterJobsCount = parseInt(recruiterJobsResult.rows[0].count || 0)
    
    // Total active jobs from all sources
    const activeJobs = jobRequestsCount + processedJobsCount + recruiterJobsCount
    
    return NextResponse.json({ 
      active_jobs: activeJobs,
      breakdown: {
        job_requests: jobRequestsCount,
        processed_job_requests: processedJobsCount,
        recruiter_jobs: recruiterJobsCount
      }
    })
  } catch (error) {
    console.error('Error getting active jobs:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
