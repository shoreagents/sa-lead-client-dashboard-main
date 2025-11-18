import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { user_id, industry, company, employeeCount } = body;

    console.log('📋 Anonymous user inquiry - Received data:', { 
      user_id, 
      industry, 
      company, 
      employeeCount 
    });

    if (!user_id) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    if (!industry) {
      return NextResponse.json(
        { error: 'Industry is required' },
        { status: 400 }
      );
    }

    if (!supabase) {
      return NextResponse.json(
        { error: 'Database connection not available' },
        { status: 500 }
      );
    }

    // First, ensure the user exists using the database function
    const { error: ensureError } = await supabase
      .rpc('ensure_user_exists', { p_user_id: user_id });

    if (ensureError) {
      console.error('Error ensuring user exists:', ensureError);
      return NextResponse.json(
        { error: 'Failed to ensure user exists' },
        { status: 500 }
      );
    }

    // Update the user record with the provided information including employee count
    const updateData: any = {
      industry_name: industry,
      company: company || null,
      first_lead_capture: true, // Set first lead capture flag (Stage 1)
      updated_at: new Date().toISOString()
    };

    // Add employee count if provided (save as desired_team_size for pricing calculator)
    if (employeeCount) {
      updateData.desired_team_size = parseInt(employeeCount, 10);
      console.log('💾 Saving employee count as desired_team_size:', updateData.desired_team_size);
    }

    const { data, error } = await supabase
      .from('users')
      .update(updateData)
      .eq('user_id', user_id)
      .select();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to update user information' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'User information updated successfully',
      user: data[0]
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}