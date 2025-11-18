-- ============================================
-- FIX LEAD_PROGRESS TABLE PERMISSIONS
-- Run this in Supabase SQL Editor
-- ============================================

-- 1. Disable RLS on lead_progress (or create proper policies)
ALTER TABLE public.lead_progress DISABLE ROW LEVEL SECURITY;

-- 2. Grant permissions to anon and authenticated roles
GRANT ALL ON public.lead_progress TO anon;
GRANT ALL ON public.lead_progress TO authenticated;

-- 3. Grant usage on the sequence (for IDs)
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;

-- 4. Test insert (replace 'device_test123' with an actual user_id from your users table)
-- First, let's see if any users exist:
SELECT user_id, email, company FROM public.users LIMIT 5;

-- Then test insert with a real user_id:
-- INSERT INTO public.lead_progress (user_id, status)
-- VALUES ('YOUR_ACTUAL_USER_ID_HERE', 'stage_1')
-- ON CONFLICT (user_id) DO UPDATE SET status = EXCLUDED.status;

-- 5. Verify the insert worked:
-- SELECT * FROM public.lead_progress;

-- ============================================
-- ALTERNATIVELY: Enable RLS with proper policies
-- ============================================
-- If you want RLS enabled (more secure), uncomment these:

-- ALTER TABLE public.lead_progress ENABLE ROW LEVEL SECURITY;

-- -- Allow anon to insert/update their own records
-- CREATE POLICY "Allow anon insert lead_progress" ON public.lead_progress
--   FOR INSERT TO anon
--   WITH CHECK (true);

-- CREATE POLICY "Allow anon update lead_progress" ON public.lead_progress
--   FOR UPDATE TO anon
--   USING (true);

-- -- Allow authenticated users to insert/update
-- CREATE POLICY "Allow authenticated insert lead_progress" ON public.lead_progress
--   FOR INSERT TO authenticated
--   WITH CHECK (true);

-- CREATE POLICY "Allow authenticated update lead_progress" ON public.lead_progress
--   FOR UPDATE TO authenticated
--   USING (true);

-- -- Allow anyone to read (for admin dashboard)
-- CREATE POLICY "Allow read lead_progress" ON public.lead_progress
--   FOR SELECT
--   USING (true);

