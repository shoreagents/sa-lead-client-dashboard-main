-- Add Supabase permissions to all tables for anonymous and authenticated users
-- This ensures Prisma-created tables are accessible from the frontend

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
