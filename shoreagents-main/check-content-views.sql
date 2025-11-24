-- Check if content_views table exists
SELECT 
    EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'content_views'
    ) as table_exists;

-- If it exists, check permissions
SELECT 
    has_table_privilege('anon', 'public.content_views', 'SELECT') as anon_can_select,
    has_table_privilege('anon', 'public.content_views', 'INSERT') as anon_can_insert,
    has_table_privilege('authenticated', 'public.content_views', 'SELECT') as auth_can_select,
    has_table_privilege('authenticated', 'public.content_views', 'INSERT') as auth_can_insert;
