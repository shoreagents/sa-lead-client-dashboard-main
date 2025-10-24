import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/database'

function capitalize(s: string): string { return !s ? s : s.charAt(0).toUpperCase() + s.slice(1) }

function formatSalary(currency: string, min: number | null, max: number | null, type: string): string {
  const symbol = String(currency || 'PHP').toUpperCase() === 'PHP' ? '₱' : String(currency || 'PHP').toUpperCase() + ' '
  const fmt = (n: number) => n.toLocaleString('en-PH')
  if (min != null && max != null) return `${symbol}${fmt(min)} - ${symbol}${fmt(max)} / ${type}`
  if (min != null) return `${symbol}${fmt(min)} / ${type}`
  if (max != null) return `${symbol}${fmt(max)} / ${type}`
  return ''
}

export async function GET(_request: NextRequest) {
  try {
    console.log('🔍 Starting combined jobs fetch...')
    
    // Check database connection first
    await pool.query('SELECT 1')
    console.log('✅ Database connection successful')

    // Fetch from processed_job_requests (existing jobs)
    console.log('🔍 Fetching processed_job_requests...')
    let processedJobsRes
    try {
      processedJobsRes = await pool.query(`
        SELECT p.*, m.company AS company_name
        FROM processed_job_requests p
        LEFT JOIN members m ON m.company_id = p.company_id
        WHERE p.status = 'active'
        ORDER BY p.created_at DESC
      `)
      console.log(`✅ Found ${processedJobsRes.rows.length} processed jobs`)
    } catch (error) {
      console.warn('⚠️ processed_job_requests table not found or error:', error)
      processedJobsRes = { rows: [] }
    }

    // Fetch from recruiter_jobs (new recruiter-posted jobs)
    console.log('🔍 Fetching recruiter_jobs...')
    let recruiterJobsRes
    try {
      recruiterJobsRes = await pool.query(`
        SELECT 
          rj.*, 
          COALESCE(rj.company_id, u.company) AS company_name
        FROM recruiter_jobs rj
        LEFT JOIN users u ON u.id = rj.recruiter_id
        WHERE rj.status = 'active'
        ORDER BY rj.created_at DESC
      `)
      console.log(`✅ Found ${recruiterJobsRes.rows.length} recruiter jobs`)
    } catch (error) {
      console.warn('⚠️ recruiter_jobs table not found or error:', error)
      recruiterJobsRes = { rows: [] }
    }

    // Process processed_job_requests
    const processedJobs = await Promise.all(processedJobsRes.rows.map(async (row: any) => {
      let realApplicants = 0
      try {
        const apps = await pool.query('SELECT COUNT(*)::int AS cnt FROM applications WHERE job_id = $1', [row.id])
        realApplicants = apps.rows?.[0]?.cnt ?? 0
      } catch (error) {
        console.warn(`⚠️ Could not fetch application count for job ${row.id}:`, error)
        realApplicants = 0
      }
      const employmentType: string[] = []
      if (row.work_type) employmentType.push(capitalize(String(row.work_type)))
      if (row.experience_level) employmentType.push(capitalize(String(row.experience_level)))
      const salary = formatSalary(String(row.currency || 'PHP'), row.salary_min != null ? Number(row.salary_min) : null, row.salary_max != null ? Number(row.salary_max) : null, String(row.salary_type || 'monthly'))
      const createdAt = row.created_at ? new Date(row.created_at) : new Date()
      const ms = Date.now() - createdAt.getTime()
      const minutes = Math.floor(ms / (1000 * 60))
      const hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)
      
      let postedDays: number | string
      if (days > 0) {
        postedDays = days
      } else if (hours > 0) {
        postedDays = hours === 1 ? '1 hour ago' : `${hours} hours ago`
      } else if (minutes > 0) {
        postedDays = minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`
      } else {
        postedDays = 'Just now'
      }
      const locationType = String(row.work_arrangement || 'onsite')
      const priorityFromDb = String(row.priority ?? '').toLowerCase()
      const priority: 'low' | 'medium' | 'high' | 'urgent' =
        ['low', 'medium', 'high', 'urgent'].includes(priorityFromDb)
          ? (priorityFromDb as any)
          : ((): 'low' | 'medium' | 'high' => {
              if (realApplicants >= 50) return 'high'
              if (realApplicants >= 10) return 'medium'
              return 'low'
            })()

      return {
        id: `processed_${row.id}`,
        originalId: String(row.id),
        source: 'processed_job_requests',
        company: 'ShoreAgents',
        companyLogo: row.company_logo || '🏢',
        title: row.job_title || 'Untitled Role',
        location: row.location || row['location'] || '',
        locationType: locationType === 'onsite' ? 'on-site' : locationType,
        salary,
        employmentType,
        postedDays,
        applicants: realApplicants,
        status: row.status || 'hiring',
        priority,
        application_deadline: row.application_deadline,
        experience_level: row.experience_level,
        work_arrangement: row.work_arrangement,
        shift: row.shift,
        industry: row.industry,
        department: row.department,
        work_type: row.work_type,
        currency: row.currency,
        salary_type: row.salary_type,
        salary_min: row.salary_min,
        salary_max: row.salary_max,
        created_at: row.created_at,
        updated_at: row.updated_at
      }
    }))

    // Process recruiter_jobs
    const recruiterJobs = await Promise.all(recruiterJobsRes.rows.map(async (row: any) => {
      // Get real application count from recruiter_applications table
      let realApplicants = 0
      try {
        const apps = await pool.query('SELECT COUNT(*)::int AS cnt FROM recruiter_applications WHERE job_id = $1', [row.id])
        realApplicants = apps.rows?.[0]?.cnt ?? 0
      } catch (error) {
        console.warn(`⚠️ Could not fetch application count for recruiter job ${row.id}:`, error)
        realApplicants = 0
      }
      const employmentType: string[] = []
      if (row.work_type) employmentType.push(capitalize(String(row.work_type)))
      if (row.experience_level) employmentType.push(capitalize(String(row.experience_level)))
      const salary = formatSalary(String(row.currency || 'PHP'), row.salary_min != null ? Number(row.salary_min) : null, row.salary_max != null ? Number(row.salary_max) : null, String(row.salary_type || 'monthly'))
      const createdAt = row.created_at ? new Date(row.created_at) : new Date()
      const ms = Date.now() - createdAt.getTime()
      const minutes = Math.floor(ms / (1000 * 60))
      const hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)
      
      let postedDays: number | string
      if (days > 0) {
        postedDays = days
      } else if (hours > 0) {
        postedDays = hours === 1 ? '1 hour ago' : `${hours} hours ago`
      } else if (minutes > 0) {
        postedDays = minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`
      } else {
        postedDays = 'Just now'
      }
      const locationType = String(row.work_arrangement || 'onsite')
      const priorityFromDb = String(row.priority ?? '').toLowerCase()
      const priority: 'low' | 'medium' | 'high' | 'urgent' =
        ['low', 'medium', 'high', 'urgent'].includes(priorityFromDb)
          ? (priorityFromDb as any)
          : ((): 'low' | 'medium' | 'high' => {
              if (realApplicants >= 50) return 'high'
              if (realApplicants >= 10) return 'medium'
              return 'low'
            })()

      return {
        id: `recruiter_${row.id}`,
        originalId: String(row.id),
        source: 'recruiter_jobs',
        company: row.company_name || 'Unknown Company',
        companyLogo: '🏢',
        title: row.job_title || 'Untitled Role',
        location: '',
        locationType: locationType === 'onsite' ? 'on-site' : locationType,
        salary,
        employmentType,
        postedDays,
        applicants: realApplicants,
        status: row.status || 'hiring',
        priority,
        application_deadline: row.application_deadline,
        experience_level: row.experience_level,
        work_arrangement: row.work_arrangement,
        shift: row.shift,
        industry: row.industry,
        department: row.department,
        work_type: row.work_type,
        currency: row.currency,
        salary_type: row.salary_type,
        salary_min: row.salary_min,
        salary_max: row.salary_max,
        created_at: row.created_at,
        updated_at: row.updated_at,
        // Additional fields from recruiter_jobs
        requirements: row.requirements || [],
        responsibilities: row.responsibilities || [],
        benefits: row.benefits || [],
        skills: row.skills || [],
        job_description: row.job_description
      }
    }))

    // Combine both arrays and sort by creation date
    const allJobs = [...processedJobs, ...recruiterJobs].sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )

    console.log(`✅ Successfully combined ${allJobs.length} total jobs`)
    return NextResponse.json({ jobs: allJobs })
  } catch (e) {
    console.error('❌ Error fetching combined jobs:', e)
    console.error('❌ Error details:', {
      message: e instanceof Error ? e.message : 'Unknown error',
      stack: e instanceof Error ? e.stack : undefined,
      name: e instanceof Error ? e.name : undefined
    })
    return NextResponse.json({ 
      error: 'Failed to fetch jobs', 
      details: e instanceof Error ? e.message : 'Unknown error'
    }, { status: 500 })
  }
}
