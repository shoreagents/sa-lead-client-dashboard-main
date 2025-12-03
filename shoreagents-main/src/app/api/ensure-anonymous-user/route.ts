import { NextRequest, NextResponse } from 'next/server';

// Just return success - the actual user creation happens in userEngagementService
// via the ensureAnonymousUser() function which uses the client-side Supabase
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const deviceId = body.deviceId;
    
    if (!deviceId) {
      console.log('⚠️ ensure-anonymous-user: No deviceId provided, but returning success');
      return NextResponse.json({ 
        success: true,
        message: 'User creation handled by client-side tracking'
      });
    }

    console.log('✅ ensure-anonymous-user: Device ID received:', deviceId);
    console.log('✅ User creation will be handled by savePageVisit() on first page visit');
    
    // Return success - user will be created on first tracking event
    return NextResponse.json({ 
      success: true, 
      user_id: deviceId,
      message: 'User will be created on first tracking event'
    });

  } catch (error) {
    console.error('❌ Error in ensure-anonymous-user API:', error);
    // Return success anyway - tracking will handle user creation
    return NextResponse.json({ 
      success: true,
      message: 'User creation handled by tracking system'
    });
  }
}
