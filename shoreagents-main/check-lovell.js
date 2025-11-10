// Script to check Lovell Siron's details from BPOC database
require('dotenv').config({ path: '.env.local' });

const { Pool } = require('pg');

async function checkLovellSiron() {
  const databaseUrl = process.env.BPOC_DATABASE_URL;
  
  if (!databaseUrl) {
    console.error('❌ BPOC_DATABASE_URL environment variable is not set');
    console.log('Please make sure .env.local file exists with BPOC_DATABASE_URL');
    process.exit(1);
  }

  const pool = new Pool({
    connectionString: databaseUrl,
  });

  try {
    const client = await pool.connect();
    
    const query = `
      SELECT 
        u.id as user_id,
        u.first_name,
        u.last_name,
        u.full_name,
        u.location,
        u.avatar_url,
        u.bio,
        u.position,
        u.created_at as user_created_at,
        COALESCE(ws.current_position, u.position) as current_position,
        COALESCE(ws.expected_salary, '0') as expected_salary,
        COALESCE(ws.work_status::text, 'Not specified') as work_status,
        COALESCE(ws.completed_data, false) as work_status_completed,
        COALESCE(ar.overall_score, 0) as overall_score,
        COALESCE(ar.skills_snapshot, '[]'::jsonb) as skills_snapshot,
        COALESCE(ar.experience_snapshot, '[]'::jsonb) as experience_snapshot,
        COALESCE(ar.key_strengths, '[]'::jsonb) as key_strengths,
        COALESCE(ar.improvements, '[]'::jsonb) as improvements,
        COALESCE(ar.recommendations, '[]'::jsonb) as recommendations,
        COALESCE(ar.improved_summary, '') as improved_summary,
        COALESCE(ar.strengths_analysis, '{}'::jsonb) as strengths_analysis,
        COALESCE(ar.candidate_profile, '{}'::jsonb) as candidate_profile
      FROM users u
      LEFT JOIN user_work_status ws ON u.id = ws.user_id
      LEFT JOIN ai_analysis_results ar ON u.id = ar.user_id
      WHERE LOWER(u.full_name) LIKE '%lovell%' 
         OR LOWER(u.full_name) LIKE '%siron%'
         OR LOWER(u.first_name || ' ' || u.last_name) LIKE '%lovell%'
         OR LOWER(u.first_name || ' ' || u.last_name) LIKE '%siron%'
      ORDER BY u.full_name
    `;
    
    const result = await client.query(query);
    client.release();
    
    if (result.rows.length === 0) {
      console.log('❌ No user found matching "Lovell Siron"');
      console.log('\nTrying broader search...');
      
      // Try searching for just "lovell"
      const broadQuery = `
        SELECT 
          u.id as user_id,
          u.first_name,
          u.last_name,
          u.full_name,
          u.position,
          u.current_position,
          u.expected_salary,
          u.work_status
        FROM users u
        WHERE LOWER(u.full_name) LIKE '%lovell%'
           OR LOWER(u.first_name) LIKE '%lovell%'
        LIMIT 10
      `;
      
      const broadResult = await client.query(broadQuery);
      if (broadResult.rows.length > 0) {
        console.log(`\nFound ${broadResult.rows.length} user(s) with "Lovell" in name:`);
        broadResult.rows.forEach((row, idx) => {
          console.log(`\n${idx + 1}. ${row.full_name} (ID: ${row.user_id})`);
          console.log(`   Position: ${row.position || row.current_position || 'N/A'}`);
        });
      }
    } else {
      console.log(`✅ Found ${result.rows.length} user(s):\n`);
      
      result.rows.forEach((user, idx) => {
        console.log('='.repeat(80));
        console.log(`User ${idx + 1}: ${user.full_name}`);
        console.log('='.repeat(80));
        console.log(`User ID: ${user.user_id}`);
        console.log(`First Name: ${user.first_name}`);
        console.log(`Last Name: ${user.last_name}`);
        console.log(`Full Name: ${user.full_name}`);
        console.log(`Location: ${user.location || 'N/A'}`);
        console.log(`Position: ${user.position || 'N/A'}`);
        console.log(`Current Position: ${user.current_position || 'N/A'}`);
        console.log(`Bio: ${user.bio || 'N/A'}`);
        console.log(`Expected Salary: ${user.expected_salary || 'N/A'}`);
        console.log(`Work Status: ${user.work_status || 'N/A'}`);
        console.log(`Work Status Completed: ${user.work_status_completed ? 'Yes' : 'No'}`);
        console.log(`Overall Score: ${user.overall_score || 0}`);
        console.log(`Avatar URL: ${user.avatar_url || 'N/A'}`);
        console.log(`Created At: ${user.user_created_at || 'N/A'}`);
        
        if (user.skills_snapshot && Array.isArray(user.skills_snapshot) && user.skills_snapshot.length > 0) {
          console.log(`\nSkills (${user.skills_snapshot.length}):`);
          user.skills_snapshot.forEach((skill, i) => {
            console.log(`  ${i + 1}. ${skill}`);
          });
        } else {
          console.log(`\nSkills: None`);
        }
        
        if (user.experience_snapshot && Array.isArray(user.experience_snapshot) && user.experience_snapshot.length > 0) {
          console.log(`\nExperience (${user.experience_snapshot.length} entries):`);
          user.experience_snapshot.forEach((exp, i) => {
            console.log(`  ${i + 1}. ${JSON.stringify(exp, null, 2)}`);
          });
        } else {
          console.log(`\nExperience: None`);
        }
        
        if (user.key_strengths && Array.isArray(user.key_strengths) && user.key_strengths.length > 0) {
          console.log(`\nKey Strengths:`);
          user.key_strengths.forEach((strength, i) => {
            console.log(`  ${i + 1}. ${strength}`);
          });
        }
        
        if (user.improvements && Array.isArray(user.improvements) && user.improvements.length > 0) {
          console.log(`\nImprovements:`);
          user.improvements.forEach((improvement, i) => {
            console.log(`  ${i + 1}. ${improvement}`);
          });
        }
        
        if (user.recommendations && Array.isArray(user.recommendations) && user.recommendations.length > 0) {
          console.log(`\nRecommendations:`);
          user.recommendations.forEach((rec, i) => {
            console.log(`  ${i + 1}. ${rec}`);
          });
        }
        
        if (user.improved_summary) {
          console.log(`\nImproved Summary: ${user.improved_summary}`);
        }
        
        console.log('\n');
      });
    }
    
    await pool.end();
  } catch (error) {
    console.error('❌ Error querying database:', error);
    await pool.end();
    process.exit(1);
  }
}

checkLovellSiron();

