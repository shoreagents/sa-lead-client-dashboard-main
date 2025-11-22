import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const deviceId = body.deviceId || `device_test_${Date.now()}`;
    
    console.log('🧪 TEST: Creating user with device ID:', deviceId);
    
    // Use ANON key (client-side permissions)
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    
    console.log('🔍 TEST: Checking if user exists...');
    
    // Check if user exists
    const { data: existingUser, error: checkError } = await supabase
      .from('users')
      .select('user_id')
      .eq('user_id', deviceId)
      .maybeSingle();
    
    console.log('🔍 TEST: Check result:', { existingUser, checkError });
    
    if (existingUser) {
      return NextResponse.json({
        success: true,
        exists: true,
        user_id: deviceId,
        message: 'User already exists'
      });
    }
    
    console.log('🔍 TEST: Creating new user...');
    
    // Create user
    const { data: newUser, error: insertError } = await supabase
      .from('users')
      .insert({
        user_id: deviceId,
        auth_user_id: null,
        user_type: 'Anonymous', // Capitalized to match enum!
        email: null,
        first_name: null,
        last_name: null,
        phone_number: null,
        company: null,
        country: null,
        industry_name: null
      })
      .select()
      .single();
    
    console.log('🔍 TEST: Insert result:', { newUser, insertError });
    
    if (insertError) {
      console.error('❌ TEST: Insert error:', insertError);
      return NextResponse.json({
        success: false,
        error: insertError.message,
        code: insertError.code,
        details: insertError
      }, { status: 500 });
    }
    
    console.log('✅ TEST: User created successfully!');
    
    return NextResponse.json({
      success: true,
      created: true,
      user: newUser
    });
    
  } catch (error) {
    console.error('❌ TEST: Fatal error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

