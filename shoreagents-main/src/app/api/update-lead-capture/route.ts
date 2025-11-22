import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/client';

interface LeadCaptureUpdateBody {
  user_id: string
  first_lead_capture?: boolean
  second_lead_capture?: boolean
}

export async function POST(request: NextRequest) {
  try {
    console.log('🎯 Update lead capture API called');
    
    const body = await request.json() as LeadCaptureUpdateBody;
    const { 
      user_id,
      first_lead_capture,
      second_lead_capture
    } = body;

    console.log('📊 Lead capture update:', { user_id, first_lead_capture, second_lead_capture });

    if (!user_id) {
      console.error('❌ Missing user_id');
      return NextResponse.json(
        { error: 'Missing required field: user_id' },
        { status: 400 }
      );
    }

    const supabase = createClient();

    // Prepare update data
    const updateData: Partial<Pick<LeadCaptureUpdateBody, 'first_lead_capture' | 'second_lead_capture'>> = {};
    if (first_lead_capture !== undefined) {
      updateData.first_lead_capture = first_lead_capture;
    }
    if (second_lead_capture !== undefined) {
      updateData.second_lead_capture = second_lead_capture;
    }

    if (Object.keys(updateData).length === 0) {
      console.error('❌ No lead capture fields provided');
      return NextResponse.json(
        { error: 'No lead capture fields provided' },
        { status: 400 }
      );
    }

    // Update user lead capture status
    const { error: updateError } = await supabase
      .from('users')
      .update(updateData)
      .eq('user_id', user_id);

    if (updateError) {
      console.error('❌ Error updating lead capture:', updateError);
      return NextResponse.json(
        { error: 'Failed to update lead capture status' },
        { status: 500 }
      );
    }

    console.log('✅ Lead capture status updated successfully');
    return NextResponse.json({ 
      success: true, 
      message: 'Lead capture status updated successfully',
      data: updateData
    });

  } catch (error) {
    console.error('💥 Error in update-lead-capture API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
