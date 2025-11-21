import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/client';

/**
 * Background API endpoint to save lead data captured conversationally
 * This runs in the background as Maya extracts info from chat
 */
export async function POST(request: NextRequest) {
  try {
    const { 
      userId, 
      company, 
      industry, 
      desired_team_size, 
      notes,
      first_name,
      last_name,
      email 
    } = await request.json();

    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    console.log('💾 Saving conversational lead data:', {
      userId,
      company,
      industry,
      desired_team_size,
      notes: notes ? 'provided' : 'none',
      first_name,
      last_name,
      email: email ? 'provided' : 'none'
    });

    const supabase = createClient();

    // Build update data
    const updateData: any = {};
    if (company) updateData.company = company;
    if (industry) updateData.industry_name = industry;
    if (desired_team_size) updateData.desired_team_size = desired_team_size;
    if (first_name) updateData.first_name = first_name;
    if (last_name) updateData.last_name = last_name;
    if (email) updateData.email = email;

    // Set lead capture flags
    if (company || industry || desired_team_size) {
      updateData.first_lead_capture = true;
    }
    if (first_name && email) {
      updateData.second_lead_capture = true;
    }

    // Update user data
    const { error: userError } = await supabase
      .from('users')
      .update(updateData)
      .eq('user_id', userId);

    if (userError) {
      console.error('❌ Error updating user:', userError);
      return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
    }

    console.log('✅ User data updated successfully');

    // Update or create lead progress
    if (notes || first_name || company) {
      const newStatus = first_name && email ? 'stage_2' : 'stage_1';
      
      const { error: progressError } = await supabase
        .from('lead_progress')
        .upsert({
          user_id: userId,
          status: newStatus,
          notes: notes || null,
          created_at: new Date().toISOString()
        }, {
          onConflict: 'user_id'
        });

      if (progressError) {
        console.error('❌ Error updating lead progress:', progressError);
      } else {
        console.log(`✅ Lead progress updated to: ${newStatus}`);
      }
    }

    return NextResponse.json({ 
      success: true,
      message: 'Lead data saved successfully',
      updated: Object.keys(updateData)
    });

  } catch (error) {
    console.error('❌ Save lead data error:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}




