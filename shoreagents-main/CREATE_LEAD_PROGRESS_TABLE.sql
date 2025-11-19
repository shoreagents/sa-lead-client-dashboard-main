-- ========================================
-- CREATE LEAD_PROGRESS TABLE IN SUPABASE
-- ========================================

-- Drop table if exists (start fresh)
DROP TABLE IF EXISTS public.lead_progress CASCADE;

-- Create lead_progress table
CREATE TABLE public.lead_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id VARCHAR(255) UNIQUE NOT NULL,
  status VARCHAR(50) NOT NULL,
  previous_status VARCHAR(50),
  changed_by VARCHAR(255),
  change_reason VARCHAR(500),
  created_at TIMESTAMPTZ(6) NOT NULL DEFAULT NOW(),
  
  -- Foreign key to users table
  CONSTRAINT fk_lead_progress_user
    FOREIGN KEY (user_id)
    REFERENCES public.users(user_id)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
);

-- Create indexes for performance
CREATE INDEX idx_lead_progress_status ON public.lead_progress(status);
CREATE INDEX idx_lead_progress_changed_by ON public.lead_progress(changed_by);
CREATE INDEX idx_lead_progress_user_id ON public.lead_progress(user_id);

-- Grant permissions
GRANT ALL ON public.lead_progress TO postgres;
GRANT ALL ON public.lead_progress TO anon;
GRANT ALL ON public.lead_progress TO authenticated;
GRANT ALL ON public.lead_progress TO service_role;

-- Disable RLS (Row Level Security) for now
ALTER TABLE public.lead_progress DISABLE ROW LEVEL SECURITY;

-- Success message
DO $$
BEGIN
  RAISE NOTICE '✅ lead_progress table created successfully!';
  RAISE NOTICE '✅ Indexes created';
  RAISE NOTICE '✅ Permissions granted';
  RAISE NOTICE '✅ Ready to track lead pipeline!';
END $$;

