import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/database'

export async function GET(request: NextRequest) {
  try {
    // Fetch total users count
    const usersResult = await pool.query('SELECT COUNT(*) as count FROM users')
    const totalUsers = parseInt(usersResult.rows[0]?.count || '0')

    // Fetch active resumes count (saved_resumes table)
    const resumesResult = await pool.query('SELECT COUNT(*) as count FROM saved_resumes')
    const activeResumes = parseInt(resumesResult.rows[0]?.count || '0')

    // Fetch active jobs count from all three sources (matching job-matching page)
    // 1. job_requests (admin jobs)
    const jobRequestsResult = await pool.query(
      "SELECT COUNT(*) as count FROM job_requests WHERE status = 'active'"
    )
    const jobRequestsCount = parseInt(jobRequestsResult.rows[0]?.count || '0')

    // 2. processed_job_requests (existing jobs)
    const processedJobsResult = await pool.query(
      "SELECT COUNT(*) as count FROM processed_job_requests WHERE status = 'active'"
    )
    const processedJobsCount = parseInt(processedJobsResult.rows[0]?.count || '0')

    // 3. recruiter_jobs (new recruiter-posted jobs)
    const recruiterJobsResult = await pool.query(
      "SELECT COUNT(*) as count FROM recruiter_jobs WHERE status = 'active'"
    )
    const recruiterJobsCount = parseInt(recruiterJobsResult.rows[0]?.count || '0')

    // Combine all active jobs
    const activeJobs = jobRequestsCount + processedJobsCount + recruiterJobsCount

    return NextResponse.json({
      totalUsers,
      activeResumes,
      activeJobs
    })
  } catch (error) {
    console.error('Error fetching platform stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch platform statistics' },
      { status: 500 }
    )
  }
}
