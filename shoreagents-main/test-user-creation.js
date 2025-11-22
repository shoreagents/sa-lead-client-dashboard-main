const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function testUserCreation() {
  const deviceId = `device_test_${Date.now()}`;
  
  console.log('Testing user creation...');
  console.log('Device ID:', deviceId);
  console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log('Has Service Key:', !!process.env.SUPABASE_SERVICE_ROLE_KEY);
  
  try {
    const { data, error } = await supabase
      .from('users')
      .insert([{
        user_id: deviceId,
        email: null,
        auth_user_id: null,
        user_type: 'anonymous'
      }])
      .select()
      .single();
    
    console.log('\nResult:', { data, error });
    
    if (error) {
      console.error('\n❌ Error details:', JSON.stringify(error, null, 2));
    } else {
      console.log('\n✅ Success!');
    }
  } catch (err) {
    console.error('\n❌ Fatal error:', err);
  }
}

testUserCreation();
