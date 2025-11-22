-- ============================================================================
-- COMPLETE FIX: Permissions + RLS for Supabase
-- This fixes BOTH table permissions AND Row Level Security issues
-- ============================================================================

-- STEP 1: Grant table-level permissions to anon and authenticated roles
-- (These are needed but not sufficient if RLS is enabled)
GRANT ALL ON public.users TO anon, authenticated;
GRANT ALL ON public.content_views TO anon, authenticated;
GRANT ALL ON public.user_page_visits TO anon, authenticated;
GRANT ALL ON public.lead_progress TO anon, authenticated;
GRANT ALL ON public.user_enrichment TO anon, authenticated;
GRANT ALL ON public.pricing_quotes TO anon, authenticated;
GRANT ALL ON public.pricing_quote_roles TO anon, authenticated;
GRANT ALL ON public.candidate_views TO anon, authenticated;
GRANT ALL ON public.interview_request TO anon, authenticated;
GRANT ALL ON public.conversations TO anon, authenticated;
GRANT ALL ON public.messages TO anon, authenticated;
GRANT ALL ON public.admin_users TO anon, authenticated;
GRANT ALL ON public.bpoc_employees TO anon, authenticated;
GRANT ALL ON public.ai_analysis TO anon, authenticated;

-- STEP 2: Disable RLS entirely (for development/testing)
-- This is the simplest solution - just turn off RLS
ALTER TABLE public.users DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_views DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_page_visits DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.lead_progress DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_enrichment DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.pricing_quotes DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.pricing_quote_roles DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.candidate_views DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.interview_request DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.conversations DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.bpoc_employees DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_analysis DISABLE ROW LEVEL SECURITY;

-- STEP 3: Verify everything worked
DO $$
DECLARE
    table_record RECORD;
    has_rls BOOLEAN;
    can_select BOOLEAN;
    can_insert BOOLEAN;
BEGIN
    RAISE NOTICE '========================================';
    RAISE NOTICE 'VERIFICATION RESULTS:';
    RAISE NOTICE '========================================';
    
    FOR table_record IN 
        SELECT tablename 
        FROM pg_tables 
        WHERE schemaname = 'public' 
        AND tablename NOT LIKE '%prisma%'
        ORDER BY tablename
    LOOP
        -- Check if RLS is enabled
        SELECT rowsecurity INTO has_rls
        FROM pg_class c
        JOIN pg_namespace n ON n.oid = c.relnamespace
        WHERE n.nspname = 'public' 
        AND c.relname = table_record.tablename;
        
        -- Check permissions
        can_select := has_table_privilege('anon', 'public.' || table_record.tablename, 'SELECT');
        can_insert := has_table_privilege('anon', 'public.' || table_record.tablename, 'INSERT');
        
        RAISE NOTICE 'Table: % | RLS: % | SELECT: % | INSERT: %', 
            table_record.tablename,
            CASE WHEN has_rls THEN '❌ ENABLED' ELSE '✅ DISABLED' END,
            CASE WHEN can_select THEN '✅' ELSE '❌' END,
            CASE WHEN can_insert THEN '✅' ELSE '❌' END;
    END LOOP;
    
    RAISE NOTICE '========================================';
    RAISE NOTICE 'If you see ✅ for all SELECT and INSERT, you are good to go!';
    RAISE NOTICE 'If RLS is DISABLED and permissions are ✅, the fix worked!';
    RAISE NOTICE '========================================';
END $$;

