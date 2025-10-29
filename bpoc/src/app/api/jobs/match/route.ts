import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/database';
import { calculateDistance } from '@/lib/utils';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const jobId = searchParams.get('jobId');

    if (!userId || !jobId) {
      return NextResponse.json({ error: 'userId and jobId are required' }, { status: 400 });
    }

    const client = await pool.connect();
    try {
      // Get user profile and resume data
      const userResult = await client.query(`
        SELECT 
          u.id, u.full_name, u.location, u.position, u.bio,
          u.location_place_id, u.location_lat, u.location_lng, u.location_city, u.location_province, u.location_barangay, u.location_region,
          sr.resume_data,
          aar.skills_snapshot, aar.experience_snapshot, aar.education_snapshot,
          uws.current_employer, uws.current_position, uws.current_salary, uws.expected_salary, uws.work_status, uws.preferred_shift, uws.work_setup
        FROM users u
        LEFT JOIN saved_resumes sr ON u.id = sr.user_id
        LEFT JOIN ai_analysis_results aar ON u.id = aar.user_id
        LEFT JOIN user_work_status uws ON u.id = uws.user_id
        WHERE u.id = $1
      `, [userId]);

      if (userResult.rows.length === 0) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      const user = userResult.rows[0];

      // Determine job type and query appropriate table
      const isRecruiterJob = jobId.includes('-') || isNaN(Number(jobId));
      let jobResult;
      
      if (isRecruiterJob) {
        try {
          jobResult = await client.query(`
            SELECT 
              rj.id, rj.job_title, rj.job_description, rj.requirements, 
              rj.responsibilities, rj.benefits, rj.skills, rj.experience_level,
              rj.industry, rj.department, rj.work_arrangement, rj.salary_min, rj.salary_max,
              COALESCE(rj.company_id, u.company) as company_name, 'recruiter_jobs' as source
            FROM recruiter_jobs rj
            LEFT JOIN users u ON u.id = rj.recruiter_id
            WHERE rj.id = $1
          `, [jobId]);
        } catch (error) {
          console.error('Error fetching recruiter job:', error);
          jobResult = { rows: [] };
        }
      } else {
        try {
          jobResult = await client.query(`
            SELECT 
              pjr.id, pjr.job_title, pjr.job_description, pjr.requirements, 
              pjr.responsibilities, pjr.benefits, pjr.skills, pjr.experience_level,
              pjr.industry, pjr.department, pjr.work_arrangement, pjr.salary_min, pjr.salary_max,
              m.company as company_name, 'processed_job_requests' as source
            FROM processed_job_requests pjr
            LEFT JOIN members m ON pjr.company_id = m.company_id
            WHERE pjr.id = $1
          `, [jobId]);
        } catch (error) {
          console.error('Error fetching processed job:', error);
          jobResult = { rows: [] };
        }
      }

      // jobResult is already set above

      if (jobResult.rows.length === 0) {
        return NextResponse.json({ error: 'Job not found' }, { status: 404 });
      }

      const job = jobResult.rows[0];

      // Check if we already have a recent analysis for this user-job combination (24 hours)
      try {
        const existingResult = await client.query(`
          SELECT score, reasoning, breakdown, analyzed_at
          FROM job_match_results 
          WHERE user_id = $1 AND job_id = $2
          AND analyzed_at > NOW() - INTERVAL '24 hours'
        `, [userId, jobId]);

        if (existingResult.rows.length > 0) {
          const cached = existingResult.rows[0];
          console.log(`Using cached match result for user ${userId}, job ${jobId}`);
          return NextResponse.json({
            matchScore: cached.score,
            reasoning: cached.reasoning,
            breakdown: typeof cached.breakdown === 'string' ? JSON.parse(cached.breakdown) : cached.breakdown,
            message: 'Using cached analysis result',
            cached: true
          });
        }
      } catch (cacheErr) {
        console.warn('Failed to check cached results (table may not exist):', cacheErr);
      }

      // Calculate distance from user to office (Clark, Pampanga)
      const officeLat = 15.175949880147643;
      const officeLng = 120.53233701473826;
      let distanceKm = null;
      let distanceDescription = 'Location not available';
      
      if (user.location_lat && user.location_lng) {
        distanceKm = calculateDistance(user.location_lat, user.location_lng, officeLat, officeLng);
        if (distanceKm <= 5) {
          distanceDescription = 'Very close to office (< 5km)';
        } else if (distanceKm <= 15) {
          distanceDescription = 'Close to office (5-15km)';
        } else if (distanceKm <= 30) {
          distanceDescription = 'Moderate distance (15-30km)';
        } else if (distanceKm <= 50) {
          distanceDescription = 'Far from office (30-50km)';
        } else {
          distanceDescription = 'Very far from office (> 50km)';
        }
      }

      // Prepare data for Anthropic analysis
      const analysisData = {
        user: {
          name: user.full_name,
          location: user.location,
          locationDetails: {
            city: user.location_city,
            province: user.location_province,
            barangay: user.location_barangay,
            region: user.location_region,
            distanceKm: distanceKm,
            distanceDescription: distanceDescription
          },
          currentPosition: user.position,
          bio: user.bio,
          resumeData: user.resume_data,
          skills: user.skills_snapshot || [],
          experience: user.experience_snapshot || [],
          education: user.education_snapshot || [],
          workStatus: {
            currentEmployer: user.current_employer,
            currentPosition: user.current_position,
            currentSalary: user.current_salary,
            expectedSalary: user.expected_salary,
            workStatus: user.work_status,
            preferredShift: user.preferred_shift,
            workSetup: user.work_setup
          }
        },
        job: {
          title: job.job_title,
          company: job.company_name,
          description: job.job_description,
          requirements: job.requirements || [],
          responsibilities: job.responsibilities || [],
          benefits: job.benefits || [],
          skills: job.skills || [],
          experienceLevel: job.experience_level,
          industry: job.industry,
          department: job.department,
          workArrangement: job.work_arrangement,
          salaryRange: job.salary_min && job.salary_max ? `${job.salary_min}-${job.salary_max}` : 'Not specified'
        }
      };

    // Debug: Log the data types we're getting
    console.log('Data types from database:', {
      userSkills: Array.isArray(user.skills_snapshot) ? user.skills_snapshot.map((s: any) => ({ value: s, type: typeof s })) : 'Not array',
      userExperience: Array.isArray(user.experience_snapshot) ? user.experience_snapshot.map((e: any) => ({ value: e, type: typeof e })) : 'Not array',
      userEducation: Array.isArray(user.education_snapshot) ? user.education_snapshot.map((ed: any) => ({ value: ed, type: typeof ed })) : 'Not array',
      jobRequirements: Array.isArray(job.requirements) ? job.requirements.map((r: any) => ({ value: r, type: typeof r })) : 'Not array',
      jobResponsibilities: Array.isArray(job.responsibilities) ? job.responsibilities.map((r: any) => ({ value: r, type: typeof r })) : 'Not array',
      jobSkills: Array.isArray(job.skills) ? job.skills.map((s: any) => ({ value: s, type: typeof s })) : 'Not array',
      userLocation: {
        lat: user.location_lat,
        lng: user.location_lng,
        city: user.location_city,
        province: user.location_province,
        distanceKm: distanceKm
      },
      workStatus: {
        currentSalary: user.current_salary,
        expectedSalary: user.expected_salary,
        workStatus: user.work_status,
        preferredShift: user.preferred_shift,
        workSetup: user.work_setup
      }
    });

      // Call Anthropic API for intelligent matching
      console.log(`Performing new AI analysis for user ${userId}, job ${jobId}`);
      const matchScore = await analyzeJobMatchWithAI(analysisData);

      // Persist the latest analysis as the basis for future counts
      try {
        await client.query(
          `INSERT INTO job_match_results (user_id, job_id, score, reasoning, breakdown, analyzed_at)
           VALUES ($1, $2, $3, $4, $5, NOW())
           ON CONFLICT (user_id, job_id)
           DO UPDATE SET score = EXCLUDED.score, reasoning = EXCLUDED.reasoning, breakdown = EXCLUDED.breakdown, analyzed_at = NOW()`,
          [userId, jobId, Math.round(matchScore.score ?? 0), matchScore.reasoning ?? '', JSON.stringify(matchScore.breakdown ?? {})]
        )
      } catch (persistErr) {
        console.warn('job_match_results upsert failed (table may not exist yet):', persistErr)
      }

      // Round all breakdown scores to whole numbers
      const roundedBreakdown: { [key: string]: number } = {};
      if (matchScore.breakdown) {
        for (const [key, value] of Object.entries(matchScore.breakdown)) {
          roundedBreakdown[key] = Math.round(Number(value));
        }
      }

      return NextResponse.json({
        matchScore: Math.round(matchScore.score),
        reasoning: matchScore.reasoning,
        breakdown: roundedBreakdown,
        message: 'New AI-powered match analysis completed',
        cached: false
      });

    } finally {
      client.release();
    }

  } catch (error) {
    console.error('Error analyzing job match:', error);
    return NextResponse.json({ error: 'Failed to analyze job match' }, { status: 500 });
  }
}

async function analyzeJobMatchWithAI(data: any) {
  try {
    // Check if API key is available
    const apiKey = process.env.ANTHROPIC_API_KEY || process.env.CLAUDE_API_KEY;
    if (!apiKey) {
      console.error('❌ CLAUDE_API_KEY not found in environment variables');
      console.error('🔧 Please set CLAUDE_API_KEY in your .env.local file or environment variables');
      console.error('📖 See AI_SETUP_GUIDE.md for detailed instructions');
      throw new Error('Claude API key not configured. Please set CLAUDE_API_KEY environment variable.');
    }

    // Clean and prepare data for analysis - handle different data types safely
    const cleanUserSkills = Array.isArray(data.user.skills) ? data.user.skills.filter((s: any) => s && typeof s === 'string' && s.trim()) : [];
    const cleanUserExperience = Array.isArray(data.user.experience) ? data.user.experience.filter((e: any) => e && typeof e === 'string' && e.trim()) : [];
    const cleanUserEducation = Array.isArray(data.user.education) ? data.user.education.filter((ed: any) => ed && typeof ed === 'string' && ed.trim()) : [];
    
    const cleanJobRequirements = Array.isArray(data.job.requirements) ? data.job.requirements.filter((r: any) => r && typeof r === 'string' && r.trim()) : [];
    const cleanJobResponsibilities = Array.isArray(data.job.responsibilities) ? data.job.responsibilities.filter((r: any) => r && typeof r === 'string' && r.trim()) : [];
    const cleanJobSkills = Array.isArray(data.job.skills) ? data.job.skills.filter((s: any) => s && typeof s === 'string' && s.trim()) : [];

    const prompt = `You are an expert HR professional and career counselor. Analyze the match between a job candidate and a job posting.

CANDIDATE PROFILE:
- Name: ${data.user.name || 'Not specified'}
- Current Position: ${data.user.currentPosition || 'Not specified'}
- Location: ${data.user.location || 'Not specified'}
- Location Details: ${data.user.locationDetails.city ? `${data.user.locationDetails.city}, ${data.user.locationDetails.province}` : 'Not specified'}
- Distance from Office: ${data.user.locationDetails.distanceDescription}${data.user.locationDetails.distanceKm ? ` (${data.user.locationDetails.distanceKm.toFixed(1)}km)` : ''} (estimated based on city coordinates)
- Bio: ${data.user.bio || 'Not specified'}
- Skills: ${cleanUserSkills.length > 0 ? cleanUserSkills.join(', ') : 'Not specified'}
- Experience: ${cleanUserExperience.length > 0 ? cleanUserExperience.join(', ') : 'Not specified'}
- Education: ${cleanUserEducation.length > 0 ? cleanUserEducation.join(', ') : 'Not specified'}
- Resume Data: ${data.user.resumeData ? JSON.stringify(data.user.resumeData, null, 2) : 'Not available'}

WORK STATUS & PREFERENCES:
- Current Employer: ${data.user.workStatus.currentEmployer || 'Not specified'}
- Current Position: ${data.user.workStatus.currentPosition || 'Not specified'}
- Current Salary: ${data.user.workStatus.currentSalary || 'Not specified'}
- Expected Salary: ${data.user.workStatus.expectedSalary || 'Not specified'}
- Work Status: ${data.user.workStatus.workStatus || 'Not specified'}
- Preferred Shift: ${data.user.workStatus.preferredShift || 'Not specified'}
- Work Setup Preference: ${data.user.workStatus.workSetup || 'Not specified'}

JOB POSTING:
- Title: ${data.job.title || 'Not specified'}
- Company: ${data.job.company || 'Not specified'}
- Description: ${data.job.description || 'Not specified'}
- Requirements: ${cleanJobRequirements.length > 0 ? cleanJobRequirements.join(', ') : 'Not specified'}
- Responsibilities: ${cleanJobResponsibilities.length > 0 ? cleanJobResponsibilities.join(', ') : 'Not specified'}
- Benefits: ${Array.isArray(data.job.benefits) ? data.job.benefits.join(', ') : 'Not specified'}
- Required Skills: ${cleanJobSkills.length > 0 ? cleanJobSkills.join(', ') : 'Not specified'}
- Experience Level: ${data.job.experienceLevel || 'Not specified'}
- Industry: ${data.job.industry || 'Not specified'}
- Department: ${data.job.department || 'Not specified'}
- Work Arrangement: ${data.job.workArrangement || 'Not specified'}
- Salary Range: ${data.job.salaryRange || 'Not specified'}

TASK:
Analyze the match between the candidate and job posting using this WEIGHTED scoring system:

**PRIMARY FACTORS (High Impact - 75% total weight):**
1. **Skills Alignment** (25% weight) - Technical skills, soft skills, required competencies
2. **Experience Level** (20% weight) - Years of experience, seniority level, relevant background
3. **Career Progression** (15% weight) - Growth opportunities, career advancement fit, long-term potential
4. **Salary Compatibility** (15% weight) - Expected vs offered salary range alignment

**SECONDARY FACTORS (Medium Impact - 20% total weight):**
5. **Work Setup Match** (8% weight) - Remote/hybrid/onsite preferences vs job requirements
6. **Location & Commute** (7% weight) - Distance from office, commute feasibility
7. **Industry Knowledge** (5% weight) - Domain expertise, industry familiarity

**TERTIARY FACTORS (Low Impact - 5% total weight):**
8. **Shift Preferences** (3% weight) - Day/night shift alignment
9. **Cultural Fit** (2% weight) - Company culture, work environment compatibility

**SCORING CALCULATION:**
Calculate weighted score using this formula:
Final Score = (Skills×0.25) + (Experience×0.20) + (Career×0.15) + (Salary×0.15) + (WorkSetup×0.08) + (Location×0.07) + (Industry×0.05) + (Shift×0.03) + (Cultural×0.02)

Provide your analysis in this exact JSON format (ensure proper JSON escaping):
{
  "score": 85,
  "reasoning": "• Great news! Your React and Node.js skills are exactly what they're looking for\\n• Your experience level aligns perfectly with their requirements\\n• You're only 12km from the office, which is totally manageable for daily commute\\n• Your expected salary of P25,000 fits nicely within their P20,000-30,000 range\\n• Perfect match on work setup - you want hybrid and they offer exactly that",
  "breakdown": {
    "skillsMatch": 90,
    "experienceMatch": 85,
    "careerMatch": 88,
    "salaryMatch": 85,
    "workSetupMatch": 90,
    "locationMatch": 80,
    "industryMatch": 75,
    "shiftMatch": 85,
    "culturalMatch": 85
  },
  "weightedScore": 86.1
}

The score should be 0-100 where:
- 95-100: Perfect match, highly recommended
- 85-94: Excellent match, strongly recommended  
- 75-84: Very good match, recommended
- 65-74: Good match, worth considering
- 55-64: Fair match, some concerns
- 45-54: Poor match, not recommended
- Below 45: Not suitable, avoid

IMPORTANT: Write the reasoning as conversational bullet points that speak directly to the candidate. Keep it friendly and encouraging while highlighting key strengths and any concerns. Use bullet points (•) and mention specific details like skills, distance, salary, and work preferences. Make it feel like you're giving personalized career advice.

SCORING GUIDELINES:
- 95-100: Perfect alignment across PRIMARY factors (skills, experience, career, salary) with strong secondary factors
- 85-94: Strong alignment in PRIMARY factors with minor concerns in secondary factors
- 75-84: Good alignment in PRIMARY factors but some areas in secondary/tertiary factors need improvement
- 65-74: Decent PRIMARY factor alignment but several secondary factors need attention
- 55-64: Fair PRIMARY factor alignment with significant concerns in secondary factors
- 45-54: Poor PRIMARY factor alignment with major issues across multiple factors
- Below 45: Major misalignment in PRIMARY factors - not suitable

**WEIGHTING PRIORITY:**
- PRIMARY factors (Skills, Experience, Career Progression, Salary) are CRITICAL - poor scores here significantly impact overall match
- SECONDARY factors (Work Setup, Location, Industry) are IMPORTANT but can be compensated by strong primary factors
- TERTIARY factors (Shift, Cultural) are NICE-TO-HAVE and have minimal impact on overall score

**APPLICATION THRESHOLD:** Only jobs with 65% or higher match scores should be recommended for application.

**IMPORTANT:** Always calculate the weighted score using the provided formula and use that as the final score.`;

    console.log('Calling Anthropic API with data:', {
      user: { 
        name: data.user.name, 
        skills: cleanUserSkills.length, 
        experience: cleanUserExperience.length,
        location: data.user.locationDetails.distanceDescription,
        workStatus: data.user.workStatus.workStatus,
        expectedSalary: data.user.workStatus.expectedSalary
      },
      job: { 
        title: data.job.title, 
        requirements: cleanJobRequirements.length, 
        skills: cleanJobSkills.length,
        workArrangement: data.job.workArrangement,
        salaryRange: data.job.salaryRange
      }
    });

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Anthropic API error:', response.status, errorText);
      throw new Error(`Anthropic API error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log('Anthropic API response:', result);
    
    const content = result.content[0].text;
    console.log('AI response content:', content);
    
         // Extract JSON from the response with better error handling
     const jsonMatch = content.match(/\{[\s\S]*\}/);
     if (jsonMatch) {
       try {
         // Clean the JSON string by removing control characters and fixing common issues
         let jsonString = jsonMatch[0];
         
         // Remove control characters that might break JSON parsing
         jsonString = jsonString.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
         
         // Fix common JSON issues
         jsonString = jsonString.replace(/\n/g, '\\n'); // Escape newlines in strings
         jsonString = jsonString.replace(/\r/g, '\\r'); // Escape carriage returns
         jsonString = jsonString.replace(/\t/g, '\\t'); // Escape tabs
         
         const parsed = JSON.parse(jsonString);
         console.log('Parsed AI response:', parsed);
         
         // Validate the response
         if (typeof parsed.score === 'number' && parsed.score >= 0 && parsed.score <= 100) {
           // Use weighted score if available, otherwise use regular score
           const finalScore = parsed.weightedScore || parsed.score;
           
           return {
             score: finalScore,
             reasoning: parsed.reasoning || 'Analysis completed',
             breakdown: parsed.breakdown || {},
             weightedScore: parsed.weightedScore,
             originalScore: parsed.score
           };
         } else {
           throw new Error('Invalid score in AI response');
         }
       } catch (parseError) {
         console.error('JSON parsing error:', parseError);
         console.error('Raw JSON string:', jsonMatch[0]);
         
         // Try to extract just the essential parts manually
         const scoreMatch = content.match(/"score":\s*(\d+)/);
         const reasoningMatch = content.match(/"reasoning":\s*"([^"]+)"/);
         
         if (scoreMatch && reasoningMatch) {
           const score = parseInt(scoreMatch[1]);
           const reasoning = reasoningMatch[1].replace(/\\n/g, '\n');
           
           return {
             score: score,
             reasoning: reasoning,
             breakdown: {}
           };
         }
         
         throw new Error('Failed to parse AI response JSON');
       }
     }

    throw new Error('No valid JSON found in AI response');

  } catch (error: any) {
    console.error('Error calling Anthropic API:', error);
    
    // Use comprehensive fallback scoring instead of returning 0
    console.log('⚠️ AI analysis failed, using improved fallback scoring for job:', data.job.title);
    console.log('🔧 This is likely due to missing CLAUDE_API_KEY - see AI_SETUP_GUIDE.md for setup instructions');
    const fallbackScore = calculateComprehensiveFallbackScore(data);
    
    return {
      score: fallbackScore.score,
      reasoning: fallbackScore.reasoning,
      breakdown: fallbackScore.breakdown,
      error: false // Don't mark as error since we have a fallback
    };
  }
}

// Comprehensive fallback scoring function (same as in batch-match)
function calculateComprehensiveFallbackScore(data: any) {
  let totalScore = 0;
  let maxScore = 0;
  const breakdown: { [key: string]: number } = {};
  
  // 1. Skills Match (25% weight)
  const skillsScore = calculateSkillsMatch(data.user.skills || [], data.job.skills || []);
  totalScore += skillsScore * 0.25;
  maxScore += 100 * 0.25;
  breakdown.skillsMatch = skillsScore;
  
  // 2. Experience Level Match (20% weight)
  const experienceScore = calculateExperienceMatch(data.user.workStatus?.workStatus, data.job.experienceLevel);
  totalScore += experienceScore * 0.20;
  maxScore += 100 * 0.20;
  breakdown.experienceMatch = experienceScore;
  
  // 3. Work Setup Match (15% weight)
  const workSetupScore = calculateWorkSetupMatch(data.user.workStatus?.workSetup, data.job.workArrangement);
  totalScore += workSetupScore * 0.15;
  maxScore += 100 * 0.15;
  breakdown.workSetupMatch = workSetupScore;
  
  // 4. Location Match (10% weight)
  const locationScore = calculateLocationMatch(data.user.locationDetails?.distanceKm);
  totalScore += locationScore * 0.10;
  maxScore += 100 * 0.10;
  breakdown.locationMatch = locationScore;
  
  // 5. Salary Match (10% weight)
  const salaryScore = calculateSalaryMatch(data.user.workStatus?.expectedSalary, data.job.salaryRange);
  totalScore += salaryScore * 0.10;
  maxScore += 100 * 0.10;
  breakdown.salaryMatch = salaryScore;
  
  // 6. Industry Match (10% weight)
  const industryScore = calculateIndustryMatch(data.user.experience || [], data.job.industry);
  totalScore += industryScore * 0.10;
  maxScore += 100 * 0.10;
  breakdown.industryMatch = industryScore;
  
  // 7. Shift Match (5% weight)
  const shiftScore = calculateShiftMatch(data.user.workStatus?.preferredShift, data.job.shift);
  totalScore += shiftScore * 0.05;
  maxScore += 100 * 0.05;
  breakdown.shiftMatch = shiftScore;
  
  // 8. Career Progression (5% weight)
  const careerScore = calculateCareerProgression(data.user.workStatus?.currentPosition, data.job.title);
  totalScore += careerScore * 0.05;
  maxScore += 100 * 0.05;
  breakdown.careerMatch = careerScore;
  
  // Calculate final weighted score
  const finalScore = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 50;
  
  // Ensure score is within reasonable bounds
  const clampedScore = Math.min(95, Math.max(25, finalScore));
  
  return {
    score: clampedScore,
    reasoning: generateFallbackReasoning(clampedScore, breakdown, data),
    breakdown: breakdown
  };
}

// Helper functions for individual scoring components (same as in batch-match)
function calculateSkillsMatch(userSkills: string[], jobSkills: string[]): number {
  if (!userSkills.length || !jobSkills.length) return 50;
  
  const userSkillsLower = userSkills.map(s => s.toLowerCase().trim());
  const jobSkillsLower = jobSkills.map(s => s.toLowerCase().trim());
  
  let matches = 0;
  for (const jobSkill of jobSkillsLower) {
    if (userSkillsLower.some(userSkill => 
      userSkill.includes(jobSkill) || jobSkill.includes(userSkill)
    )) {
      matches++;
    }
  }
  
  return Math.round((matches / jobSkillsLower.length) * 100);
}

function calculateExperienceMatch(userStatus: string, jobLevel: string): number {
  if (!userStatus || !jobLevel) return 50;
  
  const status = userStatus.toLowerCase();
  const level = jobLevel.toLowerCase();
  
  if (level.includes('entry') && (status.includes('student') || status.includes('fresh'))) return 85;
  if (level.includes('entry') && status.includes('employed')) return 70;
  if (level.includes('mid') && status.includes('employed')) return 80;
  if (level.includes('senior') && status.includes('employed')) return 85;
  if (level.includes('senior') && status.includes('student')) return 30;
  
  return 60; // Default for unclear matches
}

function calculateWorkSetupMatch(userSetup: string, jobSetup: string): number {
  if (!userSetup || !jobSetup) return 50;
  
  const user = userSetup.toLowerCase();
  const job = jobSetup.toLowerCase();
  
  if (user === job) return 90;
  if ((user === 'hybrid' && job === 'remote') || (user === 'remote' && job === 'hybrid')) return 75;
  if ((user === 'onsite' && job === 'hybrid') || (user === 'hybrid' && job === 'onsite')) return 70;
  
  return 40; // Poor match
}

function calculateLocationMatch(distanceKm: number): number {
  if (!distanceKm) return 50;
  
  if (distanceKm <= 5) return 95;
  if (distanceKm <= 15) return 85;
  if (distanceKm <= 30) return 70;
  if (distanceKm <= 50) return 50;
  return 30;
}

function calculateSalaryMatch(expectedSalary: string, jobSalaryRange: string): number {
  if (!expectedSalary || !jobSalaryRange) return 50;
  
  const expected = parseFloat(expectedSalary.replace(/[^\d.]/g, ''));
  const rangeMatch = jobSalaryRange.match(/(\d+)[^\d]*(\d+)/);
  
  if (!expected || !rangeMatch) return 50;
  
  const minSalary = parseFloat(rangeMatch[1]);
  const maxSalary = parseFloat(rangeMatch[2]);
  
  if (expected >= minSalary && expected <= maxSalary) return 90;
  if (expected >= minSalary * 0.8 && expected <= maxSalary * 1.2) return 75;
  if (expected >= minSalary * 0.6 && expected <= maxSalary * 1.4) return 60;
  
  return 40;
}

function calculateIndustryMatch(userExperience: string[], jobIndustry: string): number {
  if (!userExperience.length || !jobIndustry) return 50;
  
  const experienceText = userExperience.join(' ').toLowerCase();
  const industry = jobIndustry.toLowerCase();
  
  if (experienceText.includes(industry)) return 85;
  
  // Check for related industries
  const relatedIndustries: { [key: string]: string[] } = {
    'technology': ['software', 'it', 'tech', 'digital', 'computer'],
    'healthcare': ['medical', 'health', 'hospital', 'clinic'],
    'finance': ['banking', 'financial', 'accounting', 'investment'],
    'retail': ['sales', 'commerce', 'ecommerce', 'shopping']
  };
  
  for (const [mainIndustry, related] of Object.entries(relatedIndustries)) {
    if (industry.includes(mainIndustry) && related.some(rel => experienceText.includes(rel))) {
      return 70;
    }
  }
  
  return 50;
}

function calculateShiftMatch(userShift: string, jobShift: string): number {
  if (!userShift || !jobShift) return 50;
  
  const user = userShift.toLowerCase();
  const job = jobShift.toLowerCase();
  
  if (user === job) return 90;
  return 40;
}

function calculateCareerProgression(currentPosition: string, jobTitle: string): number {
  if (!currentPosition || !jobTitle) return 50;
  
  const current = currentPosition.toLowerCase();
  const job = jobTitle.toLowerCase();
  
  // Check for career progression keywords
  const progressionKeywords = {
    'junior': ['senior', 'lead', 'manager', 'director'],
    'associate': ['senior', 'lead', 'manager', 'director'],
    'coordinator': ['manager', 'director', 'head'],
    'analyst': ['senior', 'lead', 'manager', 'director'],
    'developer': ['senior', 'lead', 'architect', 'manager']
  };
  
  for (const [currentLevel, nextLevels] of Object.entries(progressionKeywords)) {
    if (current.includes(currentLevel)) {
      if (nextLevels.some(level => job.includes(level))) return 85;
    }
  }
  
  return 60; // Neutral progression
}

function generateFallbackReasoning(score: number, breakdown: any, data: any): string {
  const reasons: string[] = [];
  
  if (breakdown.skillsMatch >= 80) {
    reasons.push('• Strong skills alignment with job requirements');
  } else if (breakdown.skillsMatch >= 60) {
    reasons.push('• Some skills match job requirements');
  } else {
    reasons.push('• Limited skills overlap with job requirements');
  }
  
  if (breakdown.experienceMatch >= 80) {
    reasons.push('• Experience level matches job expectations well');
  } else if (breakdown.experienceMatch >= 60) {
    reasons.push('• Experience level is somewhat compatible');
  } else {
    reasons.push('• Experience level may not align with job requirements');
  }
  
  if (breakdown.workSetupMatch >= 80) {
    reasons.push('• Work setup preferences align perfectly');
  } else if (breakdown.workSetupMatch >= 60) {
    reasons.push('• Work setup preferences are mostly compatible');
  } else {
    reasons.push('• Work setup preferences may not match');
  }
  
  if (breakdown.locationMatch >= 80) {
    reasons.push('• Location is very convenient for this role');
  } else if (breakdown.locationMatch >= 60) {
    reasons.push('• Location is reasonably accessible');
  } else {
    reasons.push('• Location may require significant commute');
  }
  
  if (score >= 80) {
    reasons.push('• Overall, this appears to be a strong match for your profile');
  } else if (score >= 65) {
    reasons.push('• This could be a good opportunity worth considering');
  } else if (score >= 50) {
    reasons.push('• This role has some potential but may not be ideal');
  } else {
    reasons.push('• This role may not be the best fit for your current profile');
  }
  
  // Add note about fallback analysis
  reasons.push('• Note: This analysis uses fallback scoring (AI analysis unavailable)');
  
  return reasons.join('\n');
}