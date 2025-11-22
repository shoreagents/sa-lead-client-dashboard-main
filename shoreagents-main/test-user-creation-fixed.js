require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function testUserCreation() {
  const deviceId = `device_test_${Date.now()}`;
  
  console.log('🔍 Testing user creation...');
  console.log('📱 Device ID:', deviceId);
  console.log('🌐 Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log('🔑 Has Service Key:', !!process.env.SUPABASE_SERVICE_ROLE_KEY);
  
  try {
    console.log('\n📝 Attempting to insert user...');
    const { data, error } = await supabase
      .from('users')
      .insert([{
        user_id: deviceId,
        email: null,
        auth_user_id: null,
        user_type: 'anonymous',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
      .single();
    
    if (error) {
      console.error('\n❌ Error occurred:');
      console.error('Code:', error.code);
      console.error('Message:', error.message);
      console.error('Details:', JSON.stringify(error, null, 2));
    } else {
      console.log('\n✅ Success! User created:');
      console.log(JSON.stringify(data, null, 2));
    }
  } catch (err) {
    console.error('\n💥 Fatal error:', err.message);
    console.error(err.stack);
  }
}

testUserCreation();
