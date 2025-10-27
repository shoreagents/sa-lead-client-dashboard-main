import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    console.log('🔍 Interview request API called');
    const body = await request.json();
    console.log('🔍 Request body:', body);
    
    const { 
      candidateId, 
      candidateName, 
      candidatePosition, 
      requesterFirstName, 
      requesterLastName, 
      requesterEmail,
      user_id 
    } = body;

    console.log('🔍 Extracted fields:', {
      candidateId,
      candidateName,
      candidatePosition,
      requesterFirstName,
      requesterLastName,
      requesterEmail,
      user_id
    });

    // Validate required fields
    if (!candidateId || !candidateName || !requesterFirstName || !requesterLastName || !requesterEmail || !user_id) {
      console.log('❌ Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields: candidateId, candidateName, requesterFirstName, requesterLastName, requesterEmail, and user_id are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(requesterEmail)) {
      console.log('❌ Invalid email format:', requesterEmail);
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('🔍 Creating Supabase client');
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      console.error('❌ Missing Supabase environment variables');
      return NextResponse.json(
        { error: 'Missing Supabase environment variables' },
        { status: 500 }
      );
    }
    
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });

    const insertData = {
      user_id,
      candidate_id: candidateId,
      candidate_name: candidateName,
      candidate_position: candidatePosition || null,
      requester_first_name: requesterFirstName,
      requester_last_name: requesterLastName,
      requester_email: requesterEmail
    };

    console.log('🔍 Inserting data:', insertData);

    // Insert the interview request
    const { data: interviewRequest, error: insertError } = await supabase
      .from('interview_request')
      .insert(insertData)
      .select()
      .single();

    if (insertError) {
      console.error('❌ Error creating interview request:', insertError);
      return NextResponse.json(
        { error: 'Failed to create interview request', details: insertError },
        { status: 500 }
      );
    }

    console.log('✅ Interview request created successfully:', interviewRequest);

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Interview request submitted successfully',
      data: {
        id: interviewRequest.id,
        created_at: interviewRequest.created_at
      }
    });

  } catch (error) {
    console.error('❌ Error processing interview request:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve interview requests for a user
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('user_id');

    if (!userId) {
      return NextResponse.json(
        { error: 'user_id parameter is required' },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { error: 'Missing Supabase environment variables' },
        { status: 500 }
      );
    }
    
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });

    const { data: interviewRequests, error } = await supabase
      .from('interview_request')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching interview requests:', error);
      return NextResponse.json(
        { error: 'Failed to fetch interview requests' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: interviewRequests
    });

  } catch (error) {
    console.error('Error fetching interview requests:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
