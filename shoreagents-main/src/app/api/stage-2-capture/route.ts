import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { user_id, firstName, lastName, email } = body;

    console.log('📋 Stage 2 capture - Received data:', { 
      user_id, 
      firstName, 
      lastName, 
      email: email ? `${email.substring(0, 3)}***` : 'Not provided'
    });

    if (!user_id) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    if (!email || !firstName || !lastName) {
      return NextResponse.json(
        { error: 'First name, last name, and email are required' },
        { status: 400 }
      );
    }

    if (!supabase) {
      return NextResponse.json(
        { error: 'Database connection not available' },
        { status: 500 }
      );
    }

    // Update the user record with contact information
    const updateData: any = {
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      email: email.trim().toLowerCase(),
      second_lead_capture: true, // Set second lead capture flag (Stage 2)
      updated_at: new Date().toISOString()
    };

    console.log('💾 Updating user record with Stage 2 contact data:', user_id);

    const { data, error } = await supabase
      .from('users')
      .update(updateData)
      .eq('user_id', user_id)
      .select();

    if (error) {
      console.error('❌ Database error:', error);
      return NextResponse.json(
        { error: 'Failed to update user information' },
        { status: 500 }
      );
    }

    // ✅ UPDATE LEAD PROGRESS TO STAGE 2
    console.log('📊 Updating lead progress to stage_2 for user:', user_id);
    const { data: progressData, error: progressError } = await supabase
      .from('lead_progress')
      .upsert({
        user_id: user_id,
        status: 'stage_2'
      }, {
        onConflict: 'user_id' // Update if exists, insert if not
      })
      .select();

    if (progressError) {
      console.error('❌ Error updating lead progress:', progressError);
      console.error('❌ Full error details:', JSON.stringify(progressError, null, 2));
      console.error('❌ Attempted to insert user_id:', user_id);
      // Don't fail the request if progress update fails
    } else {
      console.log('✅ Lead progress updated to stage_2');
      console.log('✅ Progress data:', progressData);
    }

    return NextResponse.json({
      success: true,
      message: 'Contact information updated successfully',
      user: data[0]
    });

  } catch (error) {
    console.error('❌ API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

