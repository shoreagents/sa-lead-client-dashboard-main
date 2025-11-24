-- Verify permissions were actually granted
SELECT 
    tablename,
    has_table_privilege('anon', 'public.' || tablename, 'SELECT') as anon_select,
    has_table_privilege('anon', 'public.' || tablename, 'INSERT') as anon_insert,
    has_table_privilege('authenticated', 'public.' || tablename, 'SELECT') as auth_select,
    has_table_privilege('authenticated', 'public.' || tablename, 'INSERT') as auth_insert
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename IN ('content_views', 'users', 'user_page_visits')
ORDER BY tablename;
