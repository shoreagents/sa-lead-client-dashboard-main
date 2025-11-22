-- Fix Supabase permissions for anonymous users
-- Run this in Supabase SQL Editor

-- Grant permissions on all tables to anon and authenticated
GRANT ALL ON TABLE public.users TO anon;
GRANT ALL ON TABLE public.users TO authenticated;

GRANT ALL ON TABLE public.user_page_visits TO anon;
GRANT ALL ON TABLE public.user_page_visits TO authenticated;

GRANT ALL ON TABLE public.lead_progress TO anon;
GRANT ALL ON TABLE public.lead_progress TO authenticated;

GRANT ALL ON TABLE public.user_enrichment TO anon;
GRANT ALL ON TABLE public.user_enrichment TO authenticated;

GRANT ALL ON TABLE public.pricing_quotes TO anon;
GRANT ALL ON TABLE public.pricing_quotes TO authenticated;

GRANT ALL ON TABLE public.pricing_quote_roles TO anon;
GRANT ALL ON TABLE public.pricing_quote_roles TO authenticated;

GRANT ALL ON TABLE public.candidate_views TO anon;
GRANT ALL ON TABLE public.candidate_views TO authenticated;

GRANT ALL ON TABLE public.interview_request TO anon;
GRANT ALL ON TABLE public.interview_request TO authenticated;

GRANT ALL ON TABLE public.bpoc_employees TO anon;
GRANT ALL ON TABLE public.bpoc_employees TO authenticated;

GRANT ALL ON TABLE public.ai_analysis TO anon;
GRANT ALL ON TABLE public.ai_analysis TO authenticated;

GRANT ALL ON TABLE public.conversations TO anon;
GRANT ALL ON TABLE public.conversations TO authenticated;

GRANT ALL ON TABLE public.messages TO anon;
GRANT ALL ON TABLE public.messages TO authenticated;

-- Confirm permissions were set
SELECT 
    tablename,
    has_table_privilege('anon', schemaname || '.' || tablename, 'SELECT') as anon_can_select,
    has_table_privilege('authenticated', schemaname || '.' || tablename, 'SELECT') as auth_can_select
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename NOT LIKE '%prisma%'
ORDER BY tablename;
