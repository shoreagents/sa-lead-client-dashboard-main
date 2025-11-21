# 🎯 Maya Conversational Intelligence - Complete Implementation Handoff

**Date:** November 19, 2025  
**Status:** Implementation Complete - Testing Required  
**Branch:** `stephen-cleanup-migration`

---

## 🚨 CRITICAL: SERVER ISSUE

**Current Problem:** 
- Dev server won't start properly on port 3000
- Browser shows spinning/loading indefinitely
- Next.js cache cleared but issue persists

**Next Actions Needed:**
1. Troubleshoot server startup issue
2. Test Maya conversational data capture
3. Verify Supabase connection and data flow

---

## ✅ WHAT WAS COMPLETED

### **1. Full Context Fetching for Maya**

**File Modified:** `src/app/api/chat/route.ts`

**Changes Made (Lines 292-365):**

#### **A. Quote Roles Fetching (CRITICAL FIX)**
```javascript
// OLD (Only fetched quote header):
select('*')

// NEW (Fetches quote + roles):
select(`
  *,
  pricingQuoteRoles:pricing_quote_roles(
    role_title,
    role_description,
    experience_level,
    workspace_type,
    monthly_cost,
    total_cost
  )
`)
```

**Impact:** Maya now knows what specific roles users requested in quotes!

#### **B. Lead Progress Fetching**
```javascript
const { data: leadProgress } = await supabase
  .from('lead_progress')
  .select('*')
  .eq('user_id', userId)
  .maybeSingle();
```

**Impact:** Maya knows where users are in the funnel (new_lead → stage_1 → stage_2 → quoted → signed_up)

#### **C. Page Journey Tracking**
```javascript
const { data: pageJourney } = await supabase
  .from('user_page_visits')
  .select('page_url, page_title, visit_timestamp, time_spent_seconds')
  .eq('user_id', userId)
  .order('visit_timestamp', { ascending: false })
  .limit(10);
```

**Impact:** Maya knows what pages users visited and can reference them!

#### **D. Past Conversations Memory**
```javascript
const { data: pastConversations } = await supabase
  .from('conversations')
  .select('id, title, created_at, updated_at, context_data')
  .eq('user_id', userId)
  .order('created_at', { ascending: false })
  .limit(5);
```

**Impact:** Maya remembers previous conversations!

#### **E. User Context Enhancement**
```javascript
userData = {
  user: {
    ...
    industry: user.industry_name || user.industry,  // Use correct field
    desired_team_size: user.desired_team_size,      // Add team size
    ...
  },
  quotes: quotes || [],
  leadProgress: leadProgress || null,               // ADD
  pageJourney: pageJourney || [],                   // ADD
  pastConversations: pastConversations || [],       // ADD
  ...
}
```

---

### **2. Conversational AI Prompt Overhaul**

**File Modified:** `src/lib/ai-config.ts`

**Major Changes (Lines 72-278):**

#### **New Prompt Structure:**
```javascript
withPersonalization: (userData: any) => {
  // Dynamic context builders:
  
  // 1. Quote History Context
  let quoteContext = buildQuoteHistory(userData.quotes);
  
  // 2. Page Journey Context  
  let journeyContext = buildPageJourney(userData.pageJourney);
  
  // 3. Lead Status Context
  let statusContext = buildLeadStatus(userData.leadProgress);
  
  return `[Comprehensive prompt with all context]`;
}
```

#### **Key Prompt Features:**

**A. User Context Display:**
```
- Name: Stephen Atcheler
- Company: Test Corp
- Industry: Real Estate
- Desired Team Size: 3
- Email: stephen@example.com
- Lead Stage: stage_2
- Has Quotes: Yes

QUOTE HISTORY:
Quote #1 (11/19/2025):
- Industry: Real Estate
- Team Size: 3 people
- Total Cost: AUD $6,600/month
- Roles Requested: Senior Developer (senior level), Marketing Manager (mid level)
```

**B. Conversational Lead Capture Rules:**
```
1. NEVER push forms unless user explicitly asks
2. ALWAYS ask questions naturally in chat
3. GRADUALLY collect information over multiple messages
4. Be warm, friendly, and helpful

STAGE 1 DATA COLLECTION (First 5-10 messages):
IF MISSING company → Ask: "What's your company called?"
IF MISSING industry → Ask: "What industry are you in?"
IF MISSING desired_team_size → Ask: "How many people are you thinking?"
IF MISSING notes → Ask: "What kind of work will they be doing?"

STAGE 2 DATA COLLECTION (After engagement):
IF MISSING first_name → "By the way, what's your name?"
IF MISSING last_name → "And your last name?"
IF MISSING email → "Can I get your email so I can send you more details?"
```

**C. Personalization Instructions:**
```
✅ DO:
- **ALWAYS use their first name when you have it** 
  (e.g., "Hey Stephen!" or "Thanks Sarah!")
- Greet returning users by name 
  (e.g., "Welcome back John!")
- Reference their company/industry naturally
- Remember what they told you before

❌ DON'T:
- Be pushy or salesy
- Ask multiple questions in one message
- Mention forms or modals unless relevant
- Forget to use their name once you have it
```

**D. Smart Candidate Suggestions:**
```
ONLY SUGGEST CANDIDATES IF:
1. User explicitly asks ("show me candidates", "who do you have?")
2. OR user has a quote and you're following up
3. OR user mentioned specific roles and you can match them

EXAMPLES:
- "I see you were looking for a Senior Developer. Want to see some profiles?"
- "Based on your quote for developers, here are some matches..."
```

---

### **3. Background Data Capture System**

**New File Created:** `src/app/api/chat/save-lead-data/route.ts`

**What It Does:**
- Saves data extracted from conversations in background
- Updates `users` table with: company, industry, team size, name, email
- Updates `lead_progress` table with: status, notes
- Sets lead capture flags: `first_lead_capture`, `second_lead_capture`

**API Endpoint:** `POST /api/chat/save-lead-data`

**Example Payload:**
```json
{
  "userId": "device_123...",
  "company": "Test Corp",
  "industry": "Real Estate",
  "desired_team_size": 3,
  "notes": "Need marketing help",
  "first_name": "Stephen",
  "email": "stephen@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Lead data saved successfully",
  "updated": ["company", "industry", "desired_team_size"]
}
```

---

### **4. Smart Data Extraction Function**

**File Modified:** `src/app/api/chat/route.ts` (Lines 9-122)

**Function:** `extractLeadDataFromMessage(message, userData)`

**What It Extracts:**

#### **A. Company Names:**
```javascript
Patterns:
- "my company is Acme Real Estate" → "Acme Real Estate"
- "I work at Construction Co" → "Construction Co"
- "from Stepten" → "Stepten"
- "Acme Corp" → "Acme Corp"
```

#### **B. Team Size:**
```javascript
Patterns:
- "2-3 people" → 3 (average)
- "about 5 team members" → 5
- "need 10 staff" → 10
- "roughly 7 employees" → 7

Validation: 1-100 range only
```

#### **C. Industry:**
```javascript
Detects: real estate, construction, engineering, marketing, 
         technology, healthcare, finance, insurance, manufacturing,
         retail, hospitality, education, legal, consulting, etc.

Example: "We're in real estate" → "Real Estate"
```

#### **D. First Name:**
```javascript
Patterns:
- "my name is Stephen" → "Stephen"
- "I'm Sarah" → "Sarah"
- "Stephen" (single word) → "Stephen"

Filters out: The, This, That, Yes, No, Sure, Thanks, Hello, Hi
```

#### **E. Email:**
```javascript
Pattern: /[\w.+-]+@[\w-]+\.[\w.-]+/
Example: "stephen@test.com" → "stephen@test.com"
```

#### **F. Business Needs:**
```javascript
If message:
- Contains "need", "help with", or "looking for"
- Is 10-200 words long
- User doesn't already have notes

→ Saves entire message as notes
```

---

### **5. Integration & Background Saving**

**File Modified:** `src/app/api/chat/route.ts` (Lines 820-842)

**Implementation:**
```javascript
// After AI response, extract and save data
if (userId && message) {
  try {
    const extractedData = extractLeadDataFromMessage(message, userData);
    
    if (extractedData && Object.keys(extractedData).length > 0) {
      console.log('🎯 Extracted lead data from conversation:', extractedData);
      
      // Save in background (don't await, let it run async)
      fetch(new URL('/api/chat/save-lead-data', request.url).toString(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          ...extractedData
        })
      }).catch(err => console.error('Background save error:', err));
    }
  } catch (extractError) {
    console.error('Data extraction error:', extractError);
  }
}
```

**Key Features:**
- ✅ Non-blocking (async fetch)
- ✅ Error handling (doesn't break chat if save fails)
- ✅ Detailed logging for debugging
- ✅ Automatic lead stage progression

---

## 📊 DATA FLOW DIAGRAM

```
User Message
    ↓
Chat API (/api/chat)
    ↓
Extract Data (extractLeadDataFromMessage)
    ↓
Background Save (/api/chat/save-lead-data)
    ↓
Supabase Tables:
    - users (company, industry, name, email, etc.)
    - lead_progress (status, notes)
```

---

## 🗄️ DATABASE REQUIREMENTS

### **Required Tables:**
```sql
✅ users                    -- User data
✅ lead_progress            -- Lead funnel status
✅ pricing_quotes           -- Quote data
✅ pricing_quote_roles      -- Specific roles in quotes
✅ user_page_visits         -- Page journey
✅ conversations            -- Chat conversations
✅ messages                 -- Individual chat messages
```

### **Critical Columns:**

**users table:**
```sql
user_id                  UUID PRIMARY KEY
company                  VARCHAR
industry_name            VARCHAR  ← Use this (not "industry")
desired_team_size        INTEGER  ← Must exist!
first_name               VARCHAR
last_name                VARCHAR
email                    VARCHAR
first_lead_capture       BOOLEAN
second_lead_capture      BOOLEAN
```

**lead_progress table:**
```sql
user_id                  VARCHAR  UNIQUE
status                   VARCHAR  ← new_lead, stage_1, stage_2, quoted, signed_up
notes                    TEXT     ← MUST EXIST! (business needs)
previous_status          VARCHAR
changed_by               VARCHAR
change_reason            TEXT
created_at               TIMESTAMPTZ
```

**pricing_quote_roles table:**
```sql
id                       UUID PRIMARY KEY
quote_id                 UUID FOREIGN KEY
role_title               VARCHAR  ← "Senior Developer"
role_description         TEXT
experience_level         VARCHAR  ← "entry", "mid", "senior"
workspace_type           VARCHAR  ← "wfh", "hybrid", "office"
monthly_cost             DECIMAL
total_cost               DECIMAL
```

---

## 🔧 KNOWN ISSUES & FIXES NEEDED

### **Issue 1: Server Won't Start**
**Status:** 🚨 BLOCKING TESTING

**Symptoms:**
- Browser shows spinning/loading
- Port 3000 may be in use
- Next.js cache might be corrupted

**Attempted Fixes:**
- ✅ Killed all Node processes (`pkill -9 node`)
- ✅ Cleared Next.js cache (`rm -rf .next`)
- ❌ Still not working

**Next Steps to Try:**
```bash
# 1. Kill processes on port 3000 specifically
lsof -ti:3000 | xargs kill -9

# 2. Clear all caches
rm -rf .next
rm -rf node_modules/.cache

# 3. Check for compilation errors
npm run dev | tee server.log

# 4. Try different port
PORT=3001 npm run dev

# 5. Check for TypeScript errors
npx tsc --noEmit
```

---

### **Issue 2: Supabase Permissions (Might Exist)**
**Status:** ⚠️ NEEDS VERIFICATION

**Potential Problems:**
- `anon` role might not have permissions on tables
- Row Level Security (RLS) might be enabled
- `lead_progress.notes` column might not exist

**SQL Fixes to Run in Supabase:**

```sql
-- 1. Add notes column if missing
ALTER TABLE lead_progress 
ADD COLUMN IF NOT EXISTS notes TEXT;

-- 2. Disable RLS for testing
ALTER TABLE users DISABLE ROW LEVEL SECURITY;
ALTER TABLE lead_progress DISABLE ROW LEVEL SECURITY;
ALTER TABLE pricing_quotes DISABLE ROW LEVEL SECURITY;
ALTER TABLE pricing_quote_roles DISABLE ROW LEVEL SECURITY;

-- 3. Grant permissions
GRANT ALL ON TABLE users TO anon, authenticated;
GRANT ALL ON TABLE lead_progress TO anon, authenticated;
GRANT ALL ON TABLE pricing_quotes TO anon, authenticated;
GRANT ALL ON TABLE pricing_quote_roles TO anon, authenticated;
```

---

### **Issue 3: Prisma Sync (Unknown Status)**
**Status:** ❓ NEEDS CHECKING

**Command to Check:**
```bash
cd shoreagents-main
npx prisma migrate status
```

**If Out of Sync:**
```bash
npx prisma db push
npx prisma generate
```

---

## 🧪 TESTING CHECKLIST (Once Server Works)

### **Test 1: Basic Extraction**
```
1. Open chat
2. Say: "I work at Test Corp"
3. Say: "We're in real estate"
4. Say: "Need 3 people"

Expected Console Logs:
📝 Extracted company: Test Corp
💾 Saving conversational lead data: { company: 'Test Corp' }
✅ User data updated successfully

Expected in Supabase users table:
- company = "Test Corp"
- industry_name = "Real Estate"
- desired_team_size = 3
- first_lead_capture = true

Expected in Supabase lead_progress table:
- status = "stage_1"
- notes = (business needs message)
```

---

### **Test 2: Stage 2 Capture**
```
4. Say: "My name is Stephen"
5. Say: "stephen@test.com"

Expected Console Logs:
📝 Extracted first name: Stephen
📝 Extracted email: stephen@test.com
✅ Lead progress updated to: stage_2

Expected in Supabase users table:
- first_name = "Stephen"
- email = "stephen@test.com"
- second_lead_capture = true

Expected in Supabase lead_progress table:
- status = "stage_2"
```

---

### **Test 3: Personalization**
```
6. Say: "What can you help with?"

Expected Maya Response:
"Hey Stephen! [rest of response]"
or
"Thanks Stephen! [rest of response]"

✅ Maya MUST use the name!
```

---

### **Test 4: Quote Role Awareness**
```
Prerequisite: User has a quote with "Senior Developer" role

1. Say: "Show me some candidates"

Expected Maya Response:
"I see you were looking for a Senior Developer. Want to see matching profiles?"

✅ Maya references the specific role from the quote!
```

---

### **Test 5: Page Journey Awareness**
```
Prerequisite: User visited /construction-outsourcing page

1. Say: "Tell me about your services"

Expected Maya Response:
"I saw you were checking out our construction page! [...]"

✅ Maya references the page visit!
```

---

## 📁 FILES MODIFIED SUMMARY

### **Core API Files:**
1. ✅ `src/app/api/chat/route.ts` (Lines 9-122, 292-365, 820-842)
   - Added data extraction function
   - Enhanced user data fetching (quotes, lead progress, page journey, past conversations)
   - Integrated background saving

2. ✅ `src/lib/ai-config.ts` (Lines 72-278)
   - Complete AI prompt overhaul
   - Conversational lead capture instructions
   - Quote history, page journey, lead status context builders

### **New Files:**
3. ✅ `src/app/api/chat/save-lead-data/route.ts` (NEW)
   - Background data capture endpoint
   - Updates users and lead_progress tables

### **Documentation Files:**
4. ✅ `MAYA_CONVERSATIONAL_UPGRADE_COMPLETE.md` (512 lines)
5. ✅ `MAYA_ACTUAL_IMPLEMENTATION_AND_GAPS.md` (586 lines)
6. ✅ `MAYA_CONVERSATIONAL_INTELLIGENCE_PLAN.md` (full plan)
7. ✅ `MAYA_DATABASE_STATUS_CHECK.md` (diagnostic guide)
8. ✅ `MAYA_LIVE_TEST_GUIDE.md` (testing instructions)
9. ✅ `MAYA_CONVERSATIONAL_IMPLEMENTATION_HANDOFF.md` (THIS FILE)

---

## 🎯 IMMEDIATE NEXT ACTIONS

### **Priority 1: Fix Server Startup** 🚨
```bash
# Try these in order:
1. Kill all Node: pkill -9 node
2. Clear caches: rm -rf .next node_modules/.cache
3. Check errors: npm run dev 2>&1 | tee debug.log
4. Try alt port: PORT=3001 npm run dev
5. Check TypeScript: npx tsc --noEmit
```

### **Priority 2: Verify Database**
```sql
-- In Supabase SQL Editor:
-- 1. Check tables exist
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public';

-- 2. Check lead_progress has notes column
SELECT column_name FROM information_schema.columns 
WHERE table_name = 'lead_progress';

-- 3. Run permission fixes if needed
-- (See Issue 2 above)
```

### **Priority 3: Test Maya**
```
Once server works:
1. Follow MAYA_LIVE_TEST_GUIDE.md
2. Watch console logs
3. Check Supabase for data
4. Verify all 5 tests pass
```

---

## 💡 KEY INSIGHTS FOR DEBUGGING

### **Console Logs to Watch For:**

**Good Signs:**
```
📝 Extracted company: [name]
📝 Extracted industry: [industry]
📝 Extracted team size: [number]
🎯 Extracted lead data from conversation: {...}
💾 Saving conversational lead data: {...}
✅ User data updated successfully
✅ Lead progress updated to: stage_1
```

**Bad Signs:**
```
❌ Error updating user: [error]
❌ Error updating lead progress: [error]
Background save error: [error]
permission denied for schema public
column "notes" does not exist
column "desired_team_size" does not exist
```

---

## 📞 HANDOFF SUMMARY

**What's Done:**
- ✅ Maya has full conversational intelligence
- ✅ Data extraction working (code-wise)
- ✅ Background saving implemented
- ✅ AI prompt completely overhauled
- ✅ All context fetching in place

**What's Blocked:**
- ❌ Server won't start properly
- ❓ Database sync status unknown
- ❓ Supabase permissions unknown
- ❓ Testing not possible yet

**What's Needed:**
1. Fix dev server startup issue
2. Verify Supabase schema and permissions
3. Test all 5 test scenarios
4. Confirm data flow works end-to-end

---

## 🎯 SUCCESS CRITERIA

Maya is **FULLY WORKING** when:

1. ✅ Dev server starts without errors
2. ✅ Chat opens and Maya responds
3. ✅ Console shows extraction logs
4. ✅ Data appears in Supabase `users` table
5. ✅ Data appears in Supabase `lead_progress` table
6. ✅ Maya uses user's name after they provide it
7. ✅ Maya references past quotes and roles
8. ✅ Maya references page visits
9. ✅ No "permission denied" errors
10. ✅ No "column does not exist" errors

---

## 🚀 FOR THE NEXT AI ASSISTANT

**Start Here:**
1. Read this entire document
2. Fix the server startup issue first
3. Then verify database schema/permissions
4. Then run the 5 tests in MAYA_LIVE_TEST_GUIDE.md
5. Report results back to user

**Key Files to Know:**
- `src/app/api/chat/route.ts` - Maya's brain
- `src/lib/ai-config.ts` - Maya's personality/instructions
- `src/app/api/chat/save-lead-data/route.ts` - Data saving

**The Goal:**
Make Maya work as a conversational lead capture agent that:
- Asks questions naturally
- Extracts data from chat
- Saves to Supabase automatically
- Remembers everything
- Uses names
- References history

**Good luck! 🎉**




