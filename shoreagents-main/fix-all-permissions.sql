-- ============================================
-- COMPLETE PERMISSIONS FIX FOR ALL TABLES
-- Run this once in Supabase SQL Editor
-- ============================================

-- Get all table names and grant permissions
DO $$
DECLARE
    table_record RECORD;
BEGIN
    FOR table_record IN 
        SELECT tablename 
        FROM pg_tables 
        WHERE schemaname = 'public' 
        AND tablename NOT LIKE '%prisma%'
    LOOP
        EXECUTE format('GRANT ALL ON TABLE public.%I TO anon', table_record.tablename);
        EXECUTE format('GRANT ALL ON TABLE public.%I TO authenticated', table_record.tablename);
        RAISE NOTICE 'Granted permissions on: %', table_record.tablename;
    END LOOP;
END $$;

-- Verify permissions
SELECT 
    tablename,
    has_table_privilege('anon', 'public.' || tablename, 'SELECT') as anon_select,
    has_table_privilege('anon', 'public.' || tablename, 'INSERT') as anon_insert,
    has_table_privilege('authenticated', 'public.' || tablename, 'SELECT') as auth_select,
    has_table_privilege('authenticated', 'public.' || tablename, 'INSERT') as auth_insert
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename NOT LIKE '%prisma%'
ORDER BY tablename;
