-- Add 'notes' column to lead_progress table to store business needs/inquiry messages

-- Add the column
ALTER TABLE public.lead_progress 
ADD COLUMN IF NOT EXISTS notes TEXT;

-- Add a comment to explain the column
COMMENT ON COLUMN public.lead_progress.notes IS 'Stores business needs, inquiry messages, and other lead-specific notes';

-- Verify the column was added
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_schema = 'public' 
  AND table_name = 'lead_progress' 
  AND column_name = 'notes';

