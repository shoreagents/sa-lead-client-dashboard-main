-- ============================================================================
-- ADD desired_team_size COLUMN TO users TABLE
-- This column stores the employee count from Stage 1 lead capture
-- to pre-fill the pricing calculator in Stage 2
-- ============================================================================

-- Add the column to store desired team size from anonymous modal
ALTER TABLE public.users 
ADD COLUMN IF NOT EXISTS desired_team_size INTEGER;

-- Add a comment explaining the column
COMMENT ON COLUMN public.users.desired_team_size IS 'Number of employees/team members user wants to hire (from Stage 1 lead capture)';

-- Create an index for better query performance
CREATE INDEX IF NOT EXISTS idx_users_desired_team_size 
ON public.users(desired_team_size);

-- Verify the column was added
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_schema = 'public' 
  AND table_name = 'users' 
  AND column_name = 'desired_team_size';

