-- Fix content_views table permissions
GRANT ALL ON TABLE public.content_views TO anon;
GRANT ALL ON TABLE public.content_views TO authenticated;

-- Verify it worked
SELECT 
    has_table_privilege('anon', 'public.content_views', 'INSERT') as anon_can_insert,
    has_table_privilege('authenticated', 'public.content_views', 'INSERT') as auth_can_insert;
