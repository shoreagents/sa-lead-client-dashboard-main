# 🔍 Maya Database Connection Status Check

**Date:** November 19, 2025  
**Purpose:** Verify Maya's data flow to Supabase

---

## 📊 WHAT MAYA NEEDS TO WORK

### **Required Tables in Supabase:**
```sql
✅ users                    -- Stores user data (company, industry, name, email, etc.)
✅ lead_progress            -- Stores lead funnel status
✅ pricing_quotes           -- Stores quote data
✅ pricing_quote_roles      -- Stores specific roles in quotes
✅ user_page_visits         -- Stores page journey
✅ conversations            -- Stores chat conversations
✅ messages                 -- Stores individual chat messages
```

### **Required Columns Maya Uses:**

**users table:**
```sql
✅ user_id                  -- UUID primary key
✅ company                  -- For Stage 1
✅ industry_name            -- For Stage 1
✅ desired_team_size        -- For Stage 1
✅ first_name               -- For Stage 2
✅ last_name                -- For Stage 2
✅ email                    -- For Stage 2
✅ first_lead_capture       -- Flag
✅ second_lead_capture      -- Flag
```

**lead_progress table:**
```sql
✅ user_id                  -- Foreign key to users
✅ status                   -- Lead stage (new_lead, stage_1, stage_2, quoted, signed_up)
✅ notes                    -- Business needs from Stage 1
✅ created_at               -- Timestamp
```

**pricing_quotes table:**
```sql
✅ id                       -- UUID
✅ user_id                  -- Foreign key
✅ member_count             -- Team size
✅ industry                 -- Industry
✅ total_monthly_cost       -- Cost
✅ currency_code            -- Currency
✅ quote_timestamp          -- When created
```

**pricing_quote_roles table:**
```sql
✅ quote_id                 -- Foreign key to pricing_quotes
✅ role_title               -- "Senior Developer"
✅ experience_level         -- "senior", "mid", "entry"
✅ workspace_type           -- "wfh", "hybrid", "office"
✅ monthly_cost             -- Cost per role
✅ total_cost               -- Total with workspace
```

---

## 🔗 API ENDPOINTS MAYA USES

### **1. Chat API** ✅
**Endpoint:** `/api/chat`
**Reads From:**
- ✅ `users` table (all user data)
- ✅ `pricing_quotes` + `pricing_quote_roles` (WITH JOIN!)
- ✅ `lead_progress` table
- ✅ `user_page_visits` table
- ✅ `conversations` table

**Connection:** Uses `createClient()` from Supabase

---

### **2. Save Lead Data API** ✅
**Endpoint:** `/api/chat/save-lead-data`
**Writes To:**
- ✅ `users` table (updates company, industry, name, email, etc.)
- ✅ `lead_progress` table (upserts status and notes)

**Connection:** Uses `createClient()` from Supabase

---

### **3. Conversations API** ✅
**Endpoint:** `/api/chat/conversations`
**Writes To:**
- ✅ `conversations` table (creates/loads conversations)

**Connection:** Uses `conversationDb` fallback wrapper

---

### **4. Messages API** ✅
**Endpoint:** `/api/chat/messages`
**Writes To:**
- ✅ `messages` table (saves chat messages)

**Connection:** Uses `messageDb` fallback wrapper

---

## ⚠️ CRITICAL: WHAT NEEDS TO BE VERIFIED

### **1. Prisma Schema vs Supabase Tables**
```bash
# Run this to check sync status:
cd shoreagents-main
npx prisma migrate status

# Expected output:
# "Database schema is up to date!"
# OR
# "The following migrations have not yet been applied"
```

### **2. Environment Variables**
Check `.env` file has:
```env
DATABASE_URL="postgresql://postgres:[password]@[host]:5432/postgres"
NEXT_PUBLIC_SUPABASE_URL="https://[project].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="[key]"
ANTHROPIC_API_KEY="[key]"
```

### **3. Supabase Permissions**
All tables need:
```sql
-- Disable RLS for testing
ALTER TABLE users DISABLE ROW LEVEL SECURITY;
ALTER TABLE lead_progress DISABLE ROW LEVEL SECURITY;
ALTER TABLE pricing_quotes DISABLE ROW LEVEL SECURITY;
ALTER TABLE pricing_quote_roles DISABLE ROW LEVEL SECURITY;
ALTER TABLE conversations DISABLE ROW LEVEL SECURITY;
ALTER TABLE messages DISABLE ROW LEVEL SECURITY;

-- OR grant proper permissions
GRANT ALL ON TABLE users TO anon, authenticated;
GRANT ALL ON TABLE lead_progress TO anon, authenticated;
-- etc.
```

---

## 🧪 HOW TO TEST MAYA'S DATA FLOW

### **Test 1: Check Tables Exist**
```sql
-- Run in Supabase SQL Editor:
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN (
  'users', 
  'lead_progress', 
  'pricing_quotes', 
  'pricing_quote_roles',
  'conversations',
  'messages',
  'user_page_visits'
);
```

**Expected:** All 7 tables returned

---

### **Test 2: Check Maya Can Read**
```sql
-- Check if users table has required columns:
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'users' 
AND column_name IN (
  'user_id',
  'company',
  'industry_name',
  'desired_team_size',
  'first_name',
  'last_name',
  'email',
  'first_lead_capture',
  'second_lead_capture'
);
```

**Expected:** All 9 columns returned

---

### **Test 3: Check lead_progress Table**
```sql
-- Check structure:
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'lead_progress';
```

**Expected columns:**
- `id` (uuid)
- `user_id` (varchar)
- `status` (varchar)
- `notes` (text) ← CRITICAL for business needs
- `previous_status` (varchar)
- `changed_by` (varchar)
- `change_reason` (text)
- `created_at` (timestamp)

---

### **Test 4: Test Data Writing**
```bash
# 1. Open chat on localhost:3000
# 2. Say "I work at Test Corp"
# 3. Check Supabase:

SELECT user_id, company, first_lead_capture 
FROM users 
WHERE company = 'Test Corp';

# Expected: One row with company = "Test Corp", first_lead_capture = true
```

---

### **Test 5: Test Lead Progress Writing**
```bash
# 1. After Test 4, check lead_progress:

SELECT user_id, status, notes 
FROM lead_progress 
WHERE user_id = (SELECT user_id FROM users WHERE company = 'Test Corp');

# Expected: One row with status = 'stage_1'
```

---

## 🚨 KNOWN ISSUES TO CHECK

### **Issue 1: Prisma Not Synced**
**Symptom:** Queries fail with "column does not exist"
**Fix:** Run `npx prisma migrate deploy` or `npx prisma db push`

---

### **Issue 2: Permissions Denied**
**Symptom:** Error 42501 "permission denied for schema public"
**Fix:** Run `FIX_LEAD_PROGRESS_PERMISSIONS.sql` in Supabase

---

### **Issue 3: Missing `notes` Column**
**Symptom:** Insert fails on `lead_progress`
**Fix:** Run `ADD_LEAD_PROGRESS_NOTES.sql` in Supabase

---

### **Issue 4: Missing `pricing_quote_roles` Data**
**Symptom:** Maya doesn't know quote roles
**Fix:** Check if `pricing_quote_roles` table exists and has data

---

## ✅ VERIFICATION CHECKLIST

### **Database Schema:**
- [ ] All 7 tables exist in Supabase
- [ ] `users` table has all required columns
- [ ] `lead_progress` table has `notes` column
- [ ] `pricing_quote_roles` table exists
- [ ] Prisma schema matches Supabase schema

### **Permissions:**
- [ ] `anon` role can read/write `users`
- [ ] `anon` role can read/write `lead_progress`
- [ ] `anon` role can read `pricing_quotes` + `pricing_quote_roles`
- [ ] `anon` role can read/write `conversations` + `messages`

### **Environment:**
- [ ] `.env` has `DATABASE_URL`
- [ ] `.env` has Supabase URL and key
- [ ] `.env` has `ANTHROPIC_API_KEY`

### **API Endpoints:**
- [ ] `/api/chat` returns 200
- [ ] `/api/chat/save-lead-data` returns 200
- [ ] `/api/chat/conversations` returns 200
- [ ] `/api/chat/messages` returns 200

### **Data Flow:**
- [ ] Chat messages save to `messages` table
- [ ] Extracted data saves to `users` table
- [ ] Lead progress updates to `lead_progress` table
- [ ] Maya reads quote roles from join query
- [ ] Maya reads page journey from `user_page_visits`

---

## 🎯 QUICK DIAGNOSTIC COMMANDS

### **Check if Dev Server is Running:**
```bash
curl http://localhost:3000/api/health
```

### **Check if Prisma Can Connect:**
```bash
cd shoreagents-main
npx prisma db pull
```

### **Check if Tables Exist:**
```bash
npx prisma db execute --stdin < check-tables.sql
```

### **Generate Prisma Client:**
```bash
npx prisma generate
```

---

## 📝 WHAT TO DO NOW

1. **Don't run hanging commands** - Use direct Supabase SQL Editor instead
2. **Check Supabase directly** - Go to Table Editor and verify tables exist
3. **Check permissions** - Go to SQL Editor and run permission checks
4. **Test manually** - Open chat, send message, check if data appears in Supabase
5. **Check logs** - Dev server console will show "💾 Saving conversational lead data"

---

## 🔧 IF EVERYTHING IS BROKEN

### **Nuclear Option (Fresh Start):**
```bash
# 1. Reset Prisma migrations (CAUTION: Deletes data!)
npx prisma migrate reset --force

# 2. Push schema to Supabase
npx prisma db push --force-reset

# 3. Generate client
npx prisma generate

# 4. Restart dev server
npm run dev
```

---

## ✅ CONFIRMATION THAT IT'S WORKING

You'll know Maya's database connection is working when:

1. ✅ Dev server starts without errors
2. ✅ Chat opens and Maya responds
3. ✅ Console shows: `💾 Saving conversational lead data: {...}`
4. ✅ Supabase `users` table gets updated with chat data
5. ✅ Supabase `lead_progress` table gets updated with status
6. ✅ No "permission denied" or "column does not exist" errors

---

## 🚀 READY TO VERIFY?

**Option A:** Check Supabase directly (safest)
- Go to Supabase dashboard
- Check Table Editor
- Verify tables exist

**Option B:** Test with chat
- Open localhost:3000
- Send test messages
- Check if data appears in Supabase

**Option C:** Run diagnostic SQL
- Open Supabase SQL Editor
- Run the test queries above

**Which would you like to do first?**




