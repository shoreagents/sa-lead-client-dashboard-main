const { Pool } = require('pg');
require('dotenv').config({ path: '.env.local' });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function checkGregUser() {
  try {
    console.log('🔍 Checking for Greg user...');
    
    const result = await pool.query(
      `SELECT id, email, raw_user_meta_data FROM auth.users WHERE email LIKE '%greg%' OR email = 'greg@greg.com'`
    );
    
    if (result.rows.length > 0) {
      console.log('✅ Found Greg user(s):');
      result.rows.forEach(user => {
        console.log('\n📧 Email:', user.email);
        console.log('🆔 ID:', user.id);
        console.log('📋 Metadata:', JSON.stringify(user.raw_user_meta_data, null, 2));
      });
    } else {
      console.log('❌ No Greg user found');
      console.log('\nSearching all users...');
      const allUsers = await pool.query('SELECT email FROM auth.users LIMIT 10');
      console.log('Available users:', allUsers.rows);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await pool.end();
  }
}

checkGregUser();
