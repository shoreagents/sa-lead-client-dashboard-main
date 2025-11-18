import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/client';

export async function GET(
  request: NextRequest,
  { params }: { params: { quoteId: string } }
) {
  try {
    const { quoteId } = params;

    if (!quoteId) {
      return NextResponse.json(
        { error: 'Quote ID is required' },
        { status: 400 }
      );
    }

    const supabase = createClient();

    // Fetch quote with candidate recommendations and roles
    const { data: quote, error: quoteError } = await supabase
      .from('pricing_quotes')
      .select(`
        id,
        user_id,
        industry,
        member_count,
        total_monthly_cost,
        currency_code,
        created_at,
        candidate_recommendations,
        roles:pricing_quote_roles(
          id,
          role_title,
          experience_level,
          workspace_type,
          monthly_cost
        )
      `)
      .eq('id', quoteId)
      .single();

    if (quoteError) {
      console.error('Error fetching quote:', quoteError);
      return NextResponse.json(
        { error: 'Quote not found' },
        { status: 404 }
      );
    }

    if (!quote) {
      return NextResponse.json(
        { error: 'Quote not found' },
        { status: 404 }
      );
    }

    // Return the quote with recommendations
    return NextResponse.json(quote);

  } catch (error) {
    console.error('Error in quote recommendations API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}










