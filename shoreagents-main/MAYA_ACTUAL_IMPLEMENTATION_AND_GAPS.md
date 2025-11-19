# Maya Santos - Actual Implementation & Critical Gaps 🚨

**Date:** November 19, 2025  
**Status:** Partially Implemented - Significant Gaps Identified

---

## 🗄️ WHERE CONVERSATIONS ARE ACTUALLY STORED

### **Database Tables:**

#### **1. Conversations Table**
```sql
TABLE: public.conversations
├── id                  UUID (Primary Key)
├── user_id             VARCHAR(255) ← Device ID or Auth User ID
├── conversation_type   ENUM ('Anonymous', 'Authenticated')
├── title               VARCHAR(255)
├── context_data        JSONB ← Custom context data
├── created_at          TIMESTAMPTZ
├── updated_at          TIMESTAMPTZ
└── migrated_at         TIMESTAMPTZ ← For legacy data migration
```

#### **2. Messages Table**
```sql
TABLE: public.messages
├── id                  UUID (Primary Key)
├── conversation_id     UUID (Foreign Key → conversations.id)
├── user_id             VARCHAR(255)
├── role                ENUM ('User', 'Assistant')
├── content             TEXT ← The actual message
├── context_snapshot    JSONB ← Snapshot of context at time of message
└── created_at          TIMESTAMPTZ
```

**Key Point:** ✅ Conversations ARE persisted in PostgreSQL (via Supabase)

---

## 📊 WHAT DATA MAYA CURRENTLY HAS ACCESS TO

### **User Data (From `users` table):**
```javascript
✅ user_id              // Device fingerprint or auth user ID
✅ user_type            // Anonymous, Regular, Admin
✅ first_name           // Stage 2 capture
✅ last_name            // Stage 2 capture
✅ email                // Stage 2 capture
✅ company              // Stage 1 capture
✅ industry             // Stage 1 capture (industry_name field)
✅ created_at
✅ updated_at
✅ first_lead_capture   // Stage 1 complete flag
✅ second_lead_capture  // Stage 2 complete flag
✅ third_lead_capture   // Stage 3 complete flag
```

### **Quotes Data (From `pricing_quotes` table):**
```javascript
✅ id
✅ user_id
✅ member_count         // How many people they want
✅ industry             // What industry
✅ total_monthly_cost   // Total cost
✅ currency_code        // AUD, USD, PHP, etc.
✅ quote_timestamp
✅ candidate_recommendations  // JSONB array of recommended candidates
```

### **Activity Data:**
```javascript
✅ recentActivity       // Last 5 page visits
✅ totalQuotes          // Count of quotes
```

---

## 🚨 CRITICAL GAPS - WHAT MAYA DOES NOT HAVE

### **❌ GAP #1: Quote Role Details**

**Problem:**
Maya fetches quotes with `select('*')` but **DOES NOT** fetch the related `pricing_quote_roles` table!

**What She's Missing:**
```sql
TABLE: pricing_quote_roles
├── role_title           ← "Software Developer", "Marketing Manager", etc.
├── role_description     ← AI-generated description
├── experience_level     ← "entry", "mid", "senior"
├── workspace_type       ← "wfh", "hybrid", "office"
├── base_salary_php      ← Expected salary
├── monthly_cost         ← Calculated cost
└── total_cost           ← Total with workspace
```

**Impact:** 🔴 **CRITICAL**
- Maya doesn't know WHAT SPECIFIC ROLES the user requested
- She can't suggest candidates based on previously requested roles
- She can't say "I see you requested a Senior Developer last time"
- She can't intelligently match candidates to their needs

**Current Code (lines 293-297 in chat/route.ts):**
```javascript
const { data: quotes, error: quotesError } = await supabase
  .from('pricing_quotes')
  .select('*')  // ❌ Only fetches quote header, not roles!
  .eq('user_id', userId)
  .order('quote_timestamp', { ascending: false });
```

**What It SHOULD Be:**
```javascript
const { data: quotes, error: quotesError } = await supabase
  .from('pricing_quotes')
  .select(`
    *,
    pricingQuoteRoles:pricing_quote_roles(*)
  `)  // ✅ Fetch quote + all requested roles
  .eq('user_id', userId)
  .order('quote_timestamp', { ascending: false });
```

---

### **❌ GAP #2: Lead Progress Status**

**Problem:**
Maya **DOES NOT** fetch the `lead_progress` table!

**What She's Missing:**
```sql
TABLE: lead_progress
├── user_id
├── status              ← 'new_lead', 'stage_1', 'stage_2', 'quoted', 'meeting_booked', 'signed_up', 'closed_won'
├── previous_status
├── changed_by
├── change_reason
├── notes               ← Business needs from Stage 1 form
└── created_at
```

**Impact:** 🟡 **MEDIUM**
- Maya doesn't know where the user is in the funnel
- She can't adapt her conversation based on lead status
- She can't see the business needs notes from Stage 1

---

### **❌ GAP #3: User Enrichment Data**

**Problem:**
Maya **DOES NOT** fetch the `user_enrichment` table (Serper API data)!

**What She's Missing:**
```sql
TABLE: user_enrichment
├── full_name
├── job_title
├── company_name
├── company_website
├── company_industry
├── linkedin_url
├── bio
└── ... (tons of enriched data from Serper API)
```

**Impact:** 🟢 **LOW**
- She could use this for more personalized responses
- But it's not critical for basic functionality

---

### **❌ GAP #4: Desired Team Size**

**Problem:**
Maya has access to `member_count` from quotes, but **NOT** the `desired_team_size` from the users table!

**What She's Missing:**
```javascript
users.desired_team_size  // Set in Stage 1 form (employeeCount field)
```

**Impact:** 🟡 **MEDIUM**
- She doesn't know how many people they want BEFORE they get a quote
- She knows after quote, but not during initial conversations

---

## 🎯 WHAT MAYA SHOULD BE DOING (But Isn't)

### **1. Role-Aware Conversations**
```javascript
// ❌ Current: Maya doesn't know what roles user requested
User: "Show me some candidates"
Maya: "What kind of role are you looking for?"

// ✅ With Role Data: Maya knows they requested "Senior Developer" last week
User: "Show me some candidates"
Maya: "I see you were interested in a Senior Developer last time. 
      Would you like to see matching candidates for that role?"
```

### **2. Funnel-Aware Conversations**
```javascript
// ❌ Current: Maya doesn't know lead status
User: "Tell me about pricing"
Maya: Generic pricing response

// ✅ With Lead Progress: Maya knows they're in 'quoted' status
User: "Tell me about pricing"
Maya: "I see you already have a quote for 3 developers in Real Estate! 
      Would you like to review it or create a new one?"
```

### **3. Context-Aware Candidate Matching**
```javascript
// ❌ Current: Maya shows random candidates
User: "Show me talent"
Maya: Shows generic candidates

// ✅ With Quote Roles: Maya matches based on previous requests
User: "Show me talent"
Maya: "Based on your recent quote for a Senior Marketing Manager 
      and Mid-Level Graphic Designer, here are the top matches..."
```

---

## 📝 WHAT MAYA CURRENTLY KNOWS VS WHAT SHE SHOULD KNOW

### **Stage 1 Data (45-Second Form):**
```javascript
Current Access:
✅ company             // From users.company
✅ industry            // From users.industry_name
❌ desired_team_size   // Field exists but Maya doesn't fetch it
❌ notes/message       // Business needs - stored in lead_progress.notes
```

### **Stage 2 Data (3-Minute Delayed):**
```javascript
Current Access:
✅ first_name          // From users.first_name
✅ last_name           // From users.last_name
✅ email               // From users.email
✅ second_lead_capture // Flag that Stage 2 is complete
```

### **Quote Data:**
```javascript
Current Access:
✅ member_count        // How many people
✅ industry            // What industry
✅ total_monthly_cost  // Total cost
✅ currency_code       // Their currency
❌ role_title          // MISSING - What specific roles
❌ experience_level    // MISSING - What experience levels
❌ workspace_type      // MISSING - WFH, hybrid, office
```

### **Lead Status:**
```javascript
Current Access:
❌ lead_progress.status        // Where they are in funnel
❌ lead_progress.notes         // Business needs message
```

---

## 🔧 HOW TO FIX THESE GAPS

### **Fix #1: Fetch Quote Roles (HIGH PRIORITY)**
**File:** `src/app/api/chat/route.ts` (Line 293)

**Current:**
```javascript
const { data: quotes, error: quotesError } = await supabase
  .from('pricing_quotes')
  .select('*')
  .eq('user_id', userId)
  .order('quote_timestamp', { ascending: false });
```

**Fixed:**
```javascript
const { data: quotes, error: quotesError } = await supabase
  .from('pricing_quotes')
  .select(`
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
  .eq('user_id', userId)
  .order('quote_timestamp', { ascending: false });
```

**Impact:**
- Maya now knows EXACTLY what roles user requested
- Can match candidates based on role + experience level
- Can reference previous requests in conversation

---

### **Fix #2: Fetch Lead Progress (MEDIUM PRIORITY)**
**File:** `src/app/api/chat/route.ts` (After line 300)

**Add:**
```javascript
// Fetch lead progress
const { data: leadProgress, error: progressError } = await supabase
  .from('lead_progress')
  .select('*')
  .eq('user_id', userId)
  .single();

if (progressError && progressError.code !== 'PGRST116') {
  console.error('Error fetching lead progress:', progressError);
}
```

**Then add to userData object:**
```javascript
userData = {
  user: { ... },
  quotes: quotes || [],
  leadProgress: leadProgress || null,  // ← ADD THIS
  ...
}
```

**Impact:**
- Maya knows where user is in the funnel
- Can adapt conversation based on status
- Can see business needs notes from Stage 1

---

### **Fix #3: Fetch Desired Team Size (LOW PRIORITY)**
**Already in users table, just need to include it:**

**File:** `src/app/api/chat/route.ts` (Line 343)

**Add to userData.user:**
```javascript
userData = {
  user: {
    user_id: user.user_id,
    user_type: user.user_type,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    company: user.company,
    industry: user.industry,
    desired_team_size: user.desired_team_size,  // ← ADD THIS
    ...
  },
  ...
}
```

---

### **Fix #4: Update AI System Prompt**
**File:** `src/lib/ai-config-simplified.ts`

**Add to the system prompt:**
```javascript
QUOTE HISTORY CONTEXT:
${userData.quotes && userData.quotes.length > 0 ? `
The user has ${userData.quotes.length} previous quote(s):

${userData.quotes.map((quote, idx) => {
  const roles = quote.pricingQuoteRoles || [];
  return `
Quote #${idx + 1} (${quote.quote_timestamp}):
- Industry: ${quote.industry}
- Team Size: ${quote.member_count} people
- Roles Requested: ${roles.map(r => `${r.role_title} (${r.experience_level})`).join(', ')}
- Total Cost: ${quote.currency_code} ${quote.total_monthly_cost}/month
`;
}).join('\n')}

Use this information to:
1. Suggest candidates that match their previously requested roles
2. Reference their previous interests naturally
3. Build on their existing requirements
` : 'No previous quotes'}

LEAD STATUS:
${userData.leadProgress ? `
Current Status: ${userData.leadProgress.status}
${userData.leadProgress.notes ? `Business Needs: ${userData.leadProgress.notes}` : ''}
` : 'New lead'}
```

---

## 💡 EMBEDDINGS QUESTION

### **Should We Use Embeddings for Conversations?**

**Current Implementation:**
- ❌ No embeddings
- ❌ No vector search
- ✅ Just basic keyword matching in `analyzeConversation()`

**Benefits of Adding Embeddings:**
```
✅ Semantic search through past conversations
✅ Find similar questions/topics
✅ Better context retrieval
✅ More intelligent responses
✅ "Remember" things across sessions better
```

**Downsides:**
```
❌ Additional cost (OpenAI/Anthropic embeddings API)
❌ Need vector database (pgvector or Pinecone)
❌ More complex implementation
❌ May be overkill for current scale
```

**Recommendation:**
```
🟡 NOT URGENT - Current keyword-based system works fine

✅ ADD LATER when:
   - User base grows (1000+ conversations)
   - Need better cross-session memory
   - Want to surface similar past conversations
   - Have budget for embeddings API
```

**If You DO Add Embeddings:**
1. Use Supabase's `pgvector` extension
2. Embed each message as it's saved
3. Store embeddings in `messages.embedding` column
4. Use cosine similarity for retrieval
5. Cost: ~$0.0001 per 1K tokens

---

## 🎯 PRIORITY ACTION ITEMS

### **🔴 IMMEDIATE (Do First):**
1. **Fix Quote Roles Fetching**
   - Update `select()` to include `pricing_quote_roles`
   - Pass role data to AI system prompt
   - Enable role-aware conversations
   
   **Impact:** Maya becomes 10x more intelligent about user needs
   **Time:** 30 minutes
   **Difficulty:** Easy

### **🟡 MEDIUM (Do Next):**
2. **Add Lead Progress Context**
   - Fetch `lead_progress` table
   - Include status in AI prompt
   - Adapt conversation based on funnel stage
   
   **Impact:** More contextual conversations
   **Time:** 1 hour
   **Difficulty:** Easy

3. **Add Desired Team Size**
   - Include in user data fetching
   - Use in early conversations
   
   **Impact:** Better pre-quote conversations
   **Time:** 15 minutes
   **Difficulty:** Trivial

### **🟢 FUTURE (Nice to Have):**
4. **Add Embeddings**
   - Set up pgvector
   - Implement embedding pipeline
   - Add semantic search
   
   **Impact:** Advanced context retrieval
   **Time:** 4-8 hours
   **Difficulty:** Medium

5. **Add User Enrichment Context**
   - Fetch enrichment data
   - Include in AI prompt
   
   **Impact:** More personalized responses
   **Time:** 30 minutes
   **Difficulty:** Easy

---

## 📊 CURRENT MAYA INTELLIGENCE LEVEL

### **What She Does Well:**
```
✅ Natural conversation
✅ Intent detection (8+ types)
✅ Conversation stage tracking
✅ Urgency detection
✅ Basic user context (name, company, industry)
✅ Quote count awareness
✅ Knowledge base search
✅ Candidate analysis (when asked)
```

### **What She's Missing:**
```
❌ Role-specific candidate matching
❌ Previous quote role awareness
❌ Lead funnel status awareness
❌ Business needs context
❌ Desired team size (pre-quote)
❌ User enrichment data
❌ Semantic search / embeddings
```

### **Intelligence Score:**
```
Current: 6/10 ⭐⭐⭐⭐⭐⭐☆☆☆☆

With Fixes: 9/10 ⭐⭐⭐⭐⭐⭐⭐⭐⭐☆
(Only missing embeddings for perfect score)
```

---

## 🔑 KEY TAKEAWAYS

1. **Conversations ARE stored** ✅
   - PostgreSQL tables: `conversations` + `messages`
   - Persistent across sessions
   
2. **Maya HAS basic user data** ✅
   - Stage 1 data (company, industry)
   - Stage 2 data (name, email)
   - Quote summaries (count, cost, industry)
   
3. **Maya is MISSING critical context** ❌
   - Quote role details (BIGGEST GAP)
   - Lead progress status
   - Business needs notes
   
4. **Embeddings NOT urgent** 🟡
   - Current system works fine
   - Add later when scale demands it
   
5. **Quick wins available** 🚀
   - 30-minute fix for quote roles = 10x smarter Maya
   - 1-hour fix for full context = Complete Maya

---

## 🎯 WHAT DO YOU WANT TO DO?

**Option A: Fix Quote Roles Now** (Recommended) ⭐
- 30 minutes
- Biggest impact
- Makes Maya role-aware
- Enables intelligent candidate matching

**Option B: Fix Everything** 
- 2 hours
- Complete context
- Maya becomes fully intelligent
- Quote roles + lead progress + team size

**Option C: Test BPOC Connection First**
- Verify candidates are loading
- Then come back to Maya improvements

**Option D: Something Else**
- Your call!

**WHICH PATH?** 🎯


