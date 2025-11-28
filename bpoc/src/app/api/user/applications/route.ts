import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/database'

export async function DELETE(request: NextRequest) {
  const client = await pool.connect()
  try {
    const userId = request.headers.get('x-user-id')
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    // Delete all applications for this user
    await client.query('DELETE FROM applications WHERE user_id = $1', [userId])
    
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ error: 'Failed to delete applications' }, { status: 500 })
  } finally {
    client.release()
  }
}

export async function POST(request: NextRequest) {
  const client = await pool.connect()
  let requestBody: any = {};
  try {
    const userId = request.headers.get('x-user-id')
    console.log('📝 Application POST request:', {
      userId,
      hasAuth: !!request.headers.get('authorization'),
      contentType: request.headers.get('content-type')
    })
    
    if (!userId) {
      console.error('❌ Missing x-user-id header')
      return NextResponse.json({ error: 'Unauthorized - User ID required' }, { status: 401 })
    }

    requestBody = await request.json().catch((e) => {
      console.error('❌ Failed to parse request body:', e)
      return {}
    })
    
    console.log('📝 Request body:', { jobId: requestBody?.jobId, resumeId: requestBody?.resumeId, resumeSlug: requestBody?.resumeSlug })
    
    const jobId = requestBody?.jobId
    let resumeId = requestBody?.resumeId
    let resumeSlug = requestBody?.resumeSlug
    
    // Validate and convert resumeId to string (handle UUID format)
    if (resumeId) {
      resumeId = String(resumeId).trim()
    } else {
      resumeId = ''
    }
    
    if (resumeSlug) {
      resumeSlug = String(resumeSlug).trim()
    } else {
      resumeSlug = ''
    }
    
    console.log('📝 Validated input:', { jobId, resumeId, resumeSlug, resumeIdType: typeof resumeId })
    
    if (!jobId) {
      console.error('❌ Missing jobId')
      return NextResponse.json({ error: 'jobId required' }, { status: 400 })
    }
    if (!resumeId || resumeId === '' || resumeId === 'undefined' || resumeId === 'null') {
      console.error('❌ Invalid resumeId:', { resumeId, original: requestBody?.resumeId })
      return NextResponse.json({ error: 'resumeId is required and must be valid' }, { status: 400 })
    }
    if (!resumeSlug || resumeSlug === '' || resumeSlug === 'undefined' || resumeSlug === 'null') {
      console.error('❌ Invalid resumeSlug:', { resumeSlug, original: requestBody?.resumeSlug })
      return NextResponse.json({ error: 'resumeSlug is required and must be valid' }, { status: 400 })
    }

    // Determine job type and validate job exists
    let jobType: 'processed' | 'recruiter' | 'job_request'
    let numericJobId: number | null = null
    let uuidJobId: string | null = null

    // Extract actual database ID (remove prefixes if present)
    let actualJobId = jobId;
    if (typeof jobId === 'string') {
      if (jobId.startsWith('recruiter_')) {
        actualJobId = jobId.replace('recruiter_', '');
      } else if (jobId.startsWith('processed_')) {
        actualJobId = jobId.replace('processed_', '');
      } else if (jobId.startsWith('job_request_')) {
        actualJobId = jobId.replace('job_request_', '');
      }
    }
    
    // Check if it's a UUID (recruiter job) or number (processed/job_request job)
    if (typeof actualJobId === 'string' && actualJobId.includes('-')) {
      // Recruiter jobs removed - reject recruiter job applications
      await client.query('ROLLBACK')
      return NextResponse.json({ error: 'Recruiter jobs have been removed. Cannot apply to this job.' }, { status: 410 })
    } else {
      // It's a number - check which table it's in
      numericJobId = Number(actualJobId)
      
      if (Number.isNaN(numericJobId)) {
        return NextResponse.json({ error: 'Invalid job ID format' }, { status: 400 })
      }
      
      // Check both processed_job_requests and job_requests to determine which table
      const processedJobCheck = await client.query('SELECT id FROM processed_job_requests WHERE id = $1', [numericJobId])
      const jobRequestCheck = await client.query('SELECT id FROM job_requests WHERE id = $1', [numericJobId])
      
      if (processedJobCheck.rows.length > 0) {
        // Job exists in processed_job_requests
        jobType = 'processed'
        console.log('📝 Job found in processed_job_requests:', numericJobId)
      } else if (jobRequestCheck.rows.length > 0) {
        // Job exists in job_requests
        // Check if there's a corresponding processed_job_request with the same ID
        // (When jobs are processed, they get the same ID in processed_job_requests)
        const processedVersion = await client.query(
          'SELECT id FROM processed_job_requests WHERE id = $1',
          [numericJobId]
        )
        
        if (processedVersion.rows.length > 0) {
          // Use the processed version (same ID exists in processed_job_requests)
          jobType = 'processed'
          console.log('✅ Found processed version of job_request with same ID:', numericJobId)
        } else {
          // Job exists in job_requests but not yet in processed_job_requests
          // Since user wants all active jobs to be applicable, we'll auto-create processed_job_request
          const jobRequestDetails = await client.query(
            `SELECT 
              company_id, job_title, work_arrangement, salary_min, salary_max,
              job_description, requirements, responsibilities, benefits, skills,
              experience_level, application_deadline, industry, department,
              work_type, currency, salary_type, status, views, applicants,
              created_at, updated_at, priority, shift
            FROM job_requests WHERE id = $1 AND status = 'active'`,
            [numericJobId]
          )
          
          if (jobRequestDetails.rows.length > 0) {
            // Job is active in job_requests - auto-create processed_job_request entry
            const jobData = jobRequestDetails.rows[0]
            console.log('📝 Auto-creating processed_job_request for active job_request:', numericJobId)
            
            try {
              // Insert into processed_job_requests with the same ID
              // Match the pattern from the process route - use NOW() for timestamps and cast arrays
              // We'll do this before starting the main transaction, or include it in the same transaction
              const insertResult = await client.query(`
                INSERT INTO processed_job_requests (
                  id, company_id, job_title, work_arrangement, salary_min, salary_max,
                  job_description, requirements, responsibilities, benefits, skills,
                  experience_level, application_deadline, industry, department,
                  work_type, currency, salary_type, status, views, applicants,
                  created_at, updated_at, priority, shift
                ) VALUES (
                  $1, $2, $3, $4, $5, $6, $7,
                  $8::text[], $9::text[], $10::text[], $11::text[],
                  $12, $13, $14, $15,
                  $16, $17, $18, $19, $20, $21, NOW(), NOW(), $22, $23
                )
                ON CONFLICT (id) DO NOTHING
                RETURNING id
              `, [
                numericJobId,
                jobData.company_id,
                jobData.job_title,
                jobData.work_arrangement,
                jobData.salary_min,
                jobData.salary_max,
                jobData.job_description,
                jobData.requirements || [],
                jobData.responsibilities || [],
                jobData.benefits || [],
                jobData.skills || [],
                jobData.experience_level,
                jobData.application_deadline,
                jobData.industry,
                jobData.department,
                jobData.work_type,
                jobData.currency,
                jobData.salary_type,
                jobData.status || 'active',
                jobData.views ?? 0,
                jobData.applicants ?? 0,
                jobData.priority,
                jobData.shift
              ])
              
              jobType = 'processed'
              if (insertResult.rows.length > 0) {
                console.log('✅ Auto-created processed_job_request for job_request:', numericJobId)
              } else {
                console.log('✅ processed_job_request already exists for job_request:', numericJobId)
              }
            } catch (createError: any) {
              console.error('❌ Error auto-creating processed_job_request:', createError)
              console.error('❌ Error details:', {
                message: createError.message,
                code: createError.code,
                detail: createError.detail,
                constraint: createError.constraint,
                stack: createError.stack
              })
              // If creation fails, return error with details
              return NextResponse.json({ 
                error: 'Unable to process application',
                details: createError.detail || createError.message || 'Failed to process job for application. Please try again later.',
                code: createError.code
              }, { status: 500 })
            }
          } else {
            return NextResponse.json({ 
              error: 'This job is not available',
              details: 'This job is not active and cannot be applied to.'
            }, { status: 400 })
          }
        }
      } else {
        return NextResponse.json({ error: 'Job not found' }, { status: 404 })
      }
    }

    // Start transaction for application processing
    // (If we already started one for processed_job_request creation, this will be a no-op in PostgreSQL)
    // But to be safe, we'll check if we need to start it
    try {
      await client.query('BEGIN')
    } catch (e: any) {
      // If already in transaction, that's fine - continue
      if (!e.message?.includes('already in transaction')) {
        throw e
      }
    }

    // Ensure resume belongs to user
    console.log('📝 Checking resume:', { resumeId, resumeIdType: typeof resumeId, resumeIdLength: resumeId?.length, userId })
    
    // Validate resumeId is a valid UUID format (PostgreSQL UUIDs)
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
    if (!uuidRegex.test(resumeId)) {
      await client.query('ROLLBACK')
      console.error('❌ Invalid resumeId format (not a UUID):', { resumeId, length: resumeId?.length })
      return NextResponse.json({ error: 'Invalid resume ID format - must be a valid UUID' }, { status: 400 })
    }
    
    const r = await client.query('SELECT id, user_id FROM saved_resumes WHERE id = $1', [resumeId])
    console.log('📝 Resume query result:', { 
      found: r.rows.length > 0, 
      resumeUserId: r.rows[0]?.user_id, 
      requestUserId: userId,
      match: r.rows.length > 0 && String(r.rows[0].user_id) === String(userId)
    })
    
    if (r.rows.length === 0 || String(r.rows[0].user_id) !== String(userId)) {
      await client.query('ROLLBACK')
      console.error('❌ Invalid resume:', { resumeId, resumeUserId: r.rows[0]?.user_id, requestUserId: userId })
      return NextResponse.json({ error: 'Invalid resume - Resume not found or does not belong to user' }, { status: 400 })
    }

    // Check for existing application and insert new one
    let existing, ins
    if (jobType === 'processed') {
      // Use applications table for processed jobs
      console.log('📝 Checking for existing processed job application:', { userId, numericJobId })
      existing = await client.query('SELECT * FROM applications WHERE user_id = $1 AND job_id = $2 LIMIT 1', [userId, numericJobId])
      
      if (existing.rows.length > 0) {
        console.log('✅ Application already exists')
        await client.query('COMMIT')
        return NextResponse.json({ application: existing.rows[0], created: false })
      }

      console.log('📝 Inserting new processed job application:', { userId, numericJobId, resumeId, resumeSlug })
      try {
        ins = await client.query(
          `INSERT INTO applications (user_id, job_id, resume_id, resume_slug, status)
           VALUES ($1, $2, $3, $4, 'submitted')
           RETURNING *`,
          [userId, numericJobId, resumeId, resumeSlug]
        )
        console.log('✅ Processed job application created:', ins.rows[0]?.id)
      } catch (insertError: any) {
        console.error('❌ Error inserting processed job application:', insertError)
        throw insertError
      }
    }
    // Recruiter jobs removed - this branch should never be reached now

    await client.query('COMMIT')
    console.log('✅ Application submitted successfully')
    return NextResponse.json({ application: ins.rows[0], created: true })
  } catch (e: any) {
    try {
      await client.query('ROLLBACK').catch(() => {}) // Ignore rollback errors if transaction already closed
    } catch (rollbackError) {
      console.error('Error during rollback:', rollbackError)
    }
    
    console.error('❌ Error in applications POST:', e)
    console.error('❌ Error details:', {
      message: e?.message,
      code: e?.code,
      detail: e?.detail,
      constraint: e?.constraint,
      stack: e?.stack,
      userId: request.headers.get('x-user-id'),
      body: requestBody
    })
    
    // Return a proper error response with all available details
    const errorMessage = e?.message || e?.detail || 'Unknown error occurred'
    const errorResponse: any = { 
      error: 'Failed to submit application',
      details: errorMessage,
      code: e?.code || 'UNKNOWN_ERROR'
    }
    
    // Add constraint information if it's a database constraint error
    if (e?.constraint) {
      errorResponse.constraint = e.constraint
    }
    
    // Add more context for foreign key violations
    if (e?.code === '23503') {
      errorResponse.error = 'Database constraint violation'
      errorResponse.details = e.detail || errorMessage
      errorResponse.hint = 'The job or resume may not exist, or there may be a data integrity issue.'
    }
    
    console.error('❌ Returning error response:', JSON.stringify(errorResponse, null, 2))
    
    try {
      return NextResponse.json(errorResponse, { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } catch (jsonError) {
      console.error('❌ Failed to create JSON response:', jsonError)
      // Fallback to plain text if JSON fails
      return new NextResponse(
        JSON.stringify(errorResponse),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }
  } finally {
    try {
      client.release()
    } catch (releaseError) {
      console.error('Error releasing database connection:', releaseError)
    }
  }
}


