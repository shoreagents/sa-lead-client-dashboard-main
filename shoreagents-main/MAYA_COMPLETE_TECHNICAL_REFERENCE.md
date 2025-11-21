# MAYA COMPLETE TECHNICAL REFERENCE

**Version:** 2.0  
**Date:** November 19, 2025  
**Status:** Production Ready  
**Purpose:** Complete technical documentation for Maya conversational AI system

---

# TABLE OF CONTENTS

1. [System Overview](#system-overview)
2. [Architecture](#architecture)
3. [File Structure](#file-structure)
4. [API Endpoints](#api-endpoints)
5. [Database Schema](#database-schema)
6. [Data Flow](#data-flow)
7. [Frontend Components](#frontend-components)
8. [AI Configuration](#ai-configuration)
9. [Bugs Fixed](#bugs-fixed)
10. [Current Functionality](#current-functionality)
11. [Known Issues](#known-issues)
12. [Future Plans](#future-plans)

---

# SYSTEM OVERVIEW

## What is Maya?

Maya Santos is a **conversational AI lead capture agent** that:
- Lives in the footer chat button (accessible sitewide)
- Asks questions naturally in chat (NO FORMS/MODALS)
- Extracts data from conversation using regex
- Saves data to Supabase automatically in background
- Remembers everything (conversations, page visits, quotes, candidates)
- Suggests REAL candidates from `/we-got-talent` database

## Key Goals

1. **Conversational Lead Capture** - Get company, industry, team size, name, email naturally
2. **Background Data Saving** - Extract and save without interrupting chat
3. **Memory & Context** - Remember past conversations, quotes, page visits
4. **Real Candidate Suggestions** - Show actual talent from database
5. **No Modals/Forms** - Pure conversational interface

---

# ARCHITECTURE

```
┌─────────────────────────────────────────────────────────────┐
│                         USER BROWSER                         │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Footer Chat Button (ai-chat-console.tsx)             │ │
│  │  - Visible on all pages                                │ │
│  │  - Opens chat modal                                    │ │
│  │  - Sends messages to /api/chat                         │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                            ↓ POST
┌─────────────────────────────────────────────────────────────┐
│                     API ROUTE: /api/chat                     │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  src/app/api/chat/route.ts                             │ │
│  │  - Receives user message + conversation history        │ │
│  │  - Fetches user context from Supabase:                 │ │
│  │    • User data (company, industry, team size)          │ │
│  │    • Quotes with role details                          │ │
│  │    • Lead progress status                              │ │
│  │    • Page journey (visited pages)                      │ │
│  │    • Past conversations                                │ │
│  │    • REAL candidates from bpoc_users                   │ │
│  │  - Builds AI prompt with context                       │ │
│  │  - Calls OpenAI GPT-4                                  │ │
│  │  - Extracts lead data from message (regex)             │ │
│  │  - Saves data in background (non-blocking)             │ │
│  │  - Saves conversation to messages table                │ │
│  │  - Returns AI response                                 │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                ↓ Background POST (non-blocking)
┌─────────────────────────────────────────────────────────────┐
│            API ROUTE: /api/chat/save-lead-data               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  src/app/api/chat/save-lead-data/route.ts              │ │
│  │  - Receives extracted data (company, industry, etc.)   │ │
│  │  - Updates users table                                 │ │
│  │  - Updates lead_progress table                         │ │
│  │  - Sets lead capture flags                             │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    SUPABASE DATABASE                         │
│  Tables:                                                     │
│  - users (company, industry, desired_team_size, etc.)       │
│  - lead_progress (status, notes, timestamps)                │
│  - conversations (chat sessions)                             │
│  - messages (individual chat messages)                       │
│  - pricing_quotes (quotes created)                           │
│  - pricing_quote_roles (roles in quotes)                     │
│  - user_page_visits (page journey tracking)                  │
│  - bpoc_users (REAL CANDIDATES)                              │
└─────────────────────────────────────────────────────────────┘
```

---

# FILE STRUCTURE

## Core Files

### **1. Main Chat API**
```
📁 src/app/api/chat/
├── route.ts                    ← MAIN CHAT ENDPOINT (647 lines)
└── save-lead-data/
    └── route.ts                ← BACKGROUND DATA SAVER (117 lines)
```

**`route.ts`** is Maya's brain:
- **Lines 1-100:** Imports, types, rate limiting setup
- **Lines 101-200:** Helper functions (extractLeadDataFromMessage)
- **Lines 201-610:** Main POST handler:
  - Fetch user context from Supabase (users, quotes, lead progress, page journey, conversations, candidates)
  - Build userData object
  - Generate AI prompt with personalized context
  - Call OpenAI API
  - Extract data from user message
  - Save data in background
  - Save conversation to database
  - Return AI response
- **Lines 611-647:** Error handling, response formatting

### **2. AI Configuration**
```
📁 src/lib/
└── ai-config.ts                ← MAYA'S PERSONALITY & RULES (390 lines)
```

**Contains:**
- Maya's system prompt base
- `withPersonalization()` function - adds user context
- Conversational lead capture rules
- Stage 1 & 2 data collection rules
- Candidate suggestion rules
- Tone & style guidelines

**Key Sections:**
- Lines 1-80: Imports, base config
- Lines 81-157: `withPersonalization()` - builds dynamic prompt with user data
- Lines 158-180: Stage 1 collection rules (company, industry, team size)
- Lines 181-207: Stage 2 collection rules (name, email)
- Lines 208-242: Candidate suggestion rules
- Lines 243-390: Tone, style, and conversation guidelines

### **3. Frontend Chat Component**
```
📁 src/components/ui/
└── ai-chat-console.tsx         ← CHAT INTERFACE (856 lines)
```

**Key Sections:**
- Lines 1-100: Imports, state setup
- Lines 101-200: Event handlers, message sending
- Lines 201-450: Message handling logic
  - Line 283: ❌ DISABLED direct team creation modal
  - Line 341: ❌ DISABLED contact info modal
  - Line 405: ❌ DISABLED pricing form modal
  - Line 439: ❌ DISABLED industry selection modal
- Lines 451-856: UI rendering (chat bubbles, input, modals)

**Lives in:** Every page footer via layout wrapper

### **4. Supporting Files**
```
📁 src/lib/
├── chat-context.tsx            ← Chat state management
├── supabase.ts                 ← Database client
└── utils.ts                    ← Helper functions

📁 src/hooks/
├── useBPOCUsers.ts             ← Fetch candidates
└── use-api.ts                  ← API hooks
```

---

# API ENDPOINTS

## `/api/chat` (POST)

**File:** `src/app/api/chat/route.ts`

**Request:**
```typescript
{
  message: string,              // User's message
  conversationHistory: Array<{  // Previous messages
    role: 'user' | 'assistant',
    content: string
  }>,
  userId?: string              // Device ID or user ID
}
```

**Process:**
1. Rate limit check (10 requests/minute per IP)
2. Fetch user data from Supabase:
   - User record (users table)
   - Quotes with roles (pricing_quotes + pricing_quote_roles)
   - Lead progress (lead_progress table)
   - Page journey (user_page_visits table)
   - Past conversations (conversations table)
   - Real candidates (bpoc_users table)
3. Build userData context object
4. Generate AI prompt using `withPersonalization(userData)`
5. Call OpenAI GPT-4 with prompt + message + history
6. Extract lead data from message using regex
7. Background save extracted data to `/api/chat/save-lead-data`
8. Save conversation & messages to database
9. Return AI response

**Response:**
```typescript
{
  response: string,             // Maya's reply
  suggestedComponents?: string[]  // Optional UI components to show
}
```

**Debug Logs:**
```
🔍 MAYA DEBUG - Incoming message: { ... }
🔍 MAYA CONTEXT DEBUG: { userId, userName, company, industry, candidatesCount, ... }
🔍 MAYA AI PROMPT DEBUG: { hasUserData, promptLength, ... }
🔍 MAYA DATA EXTRACTION DEBUG: { extractedData, hasData }
💾 Conversation saved to database: [id]
```

---

## `/api/chat/save-lead-data` (POST)

**File:** `src/app/api/chat/save-lead-data/route.ts`

**Request:**
```typescript
{
  userId: string,
  company?: string,
  industry?: string,
  desiredTeamSize?: number,
  firstName?: string,
  lastName?: string,
  email?: string,
  businessNeeds?: string
}
```

**Process:**
1. Validate userId exists
2. Update users table with extracted data
3. Update lead_progress table:
   - Set status (stage_1, stage_2, etc.)
   - Save business_needs to notes field
4. Set lead capture flags (first_lead_capture, second_lead_capture)

**Response:**
```typescript
{
  success: true,
  userId: string,
  updatedFields: string[]
}
```

---

## `/api/bpoc-users` (GET)

**File:** `src/app/api/bpoc-users/route.ts`

**Purpose:** Fetch real candidates for Maya to suggest

**Returns:**
```typescript
{
  success: true,
  users: Array<{
    user_id: string,
    first_name: string,
    last_name: string,
    full_name: string,
    position: string,
    current_position: string,
    location: string,
    avatar_url: string,
    bio: string,
    skills_snapshot: string[],
    experience_snapshot: any[],
    expected_salary: string,
    overall_score: number
  }>
}
```

**Used by:** `/api/chat` to fetch candidates for Maya's context

---

# DATABASE SCHEMA

## Critical Tables

### **users**
```sql
CREATE TABLE users (
  user_id UUID PRIMARY KEY,
  user_type TEXT,              -- 'Anonymous' or 'Regular'
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  company TEXT,                -- ← Captured in conversation
  industry TEXT,               -- ← Deprecated, use industry_name
  industry_name TEXT,          -- ← Captured in conversation
  desired_team_size INTEGER,   -- ← Captured in conversation
  first_lead_capture BOOLEAN DEFAULT FALSE,
  second_lead_capture BOOLEAN DEFAULT FALSE,
  third_lead_capture BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
);
```

### **lead_progress**
```sql
CREATE TABLE lead_progress (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(user_id),
  status TEXT,                 -- 'new_lead', 'stage_1', 'stage_2', 'quoted', 'signed_up'
  notes TEXT,                  -- Business needs captured in chat
  previous_status TEXT,
  changed_by UUID,
  change_reason TEXT,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
);
```

**CRITICAL:** Column is `status` NOT `stage`!

### **conversations**
```sql
CREATE TABLE conversations (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(user_id),
  title TEXT,
  context_data JSONB,          -- Additional metadata
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
);
```

### **messages**
```sql
CREATE TABLE messages (
  id UUID PRIMARY KEY,
  conversation_id UUID REFERENCES conversations(id),
  role TEXT,                   -- 'user' or 'assistant'
  content TEXT,
  created_at TIMESTAMPTZ
);
```

### **user_page_visits**
```sql
CREATE TABLE user_page_visits (
  id UUID PRIMARY KEY,
  user_id UUID,
  page_path TEXT,              -- CRITICAL: Column is 'page_path' NOT 'page_url'!
  visit_timestamp TIMESTAMPTZ,
  time_spent_seconds INTEGER,
  -- NOTE: No page_title column exists
);
```

### **pricing_quotes**
```sql
CREATE TABLE pricing_quotes (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(user_id),
  quote_timestamp TIMESTAMPTZ,
  total_monthly_cost DECIMAL,
  total_annual_cost DECIMAL,
  ...
);
```

### **pricing_quote_roles**
```sql
CREATE TABLE pricing_quote_roles (
  id UUID PRIMARY KEY,
  quote_id UUID REFERENCES pricing_quotes(id),
  role_title TEXT,
  role_description TEXT,
  experience_level TEXT,
  workspace_type TEXT,
  monthly_cost DECIMAL,
  total_cost DECIMAL,
  ...
);
```

### **bpoc_users (REAL CANDIDATES)**
```sql
CREATE TABLE bpoc_users (
  user_id UUID PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  full_name TEXT,
  position TEXT,
  current_position TEXT,
  location TEXT,
  avatar_url TEXT,
  bio TEXT,
  skills_snapshot TEXT[],      -- Array of skills
  experience_snapshot JSONB[], -- Array of experience objects
  expected_salary TEXT,
  overall_score INTEGER,       -- 0-100 quality score
  work_status_completed BOOLEAN, -- TRUE = profile complete
  ...
);
```

---

# DATA FLOW

## Conversation Flow

```
1. USER opens chat
   ↓
2. FRONTEND sends initial greeting request to /api/chat
   ↓
3. API ROUTE fetches user context:
   - SELECT * FROM users WHERE user_id = ?
   - SELECT * FROM pricing_quotes WHERE user_id = ?
   - SELECT * FROM lead_progress WHERE user_id = ?
   - SELECT * FROM user_page_visits WHERE user_id = ? ORDER BY visit_timestamp DESC LIMIT 10
   - SELECT * FROM conversations WHERE user_id = ? ORDER BY created_at DESC LIMIT 5
   - SELECT * FROM bpoc_users WHERE work_status_completed = true ORDER BY overall_score DESC LIMIT 8
   ↓
4. API ROUTE builds userData object with all context
   ↓
5. API ROUTE generates AI prompt using withPersonalization(userData)
   ↓
6. API ROUTE calls OpenAI with prompt + conversation history
   ↓
7. OPENAI returns response
   ↓
8. API ROUTE saves conversation:
   - INSERT INTO conversations (user_id, title) VALUES (?, ?)
   - INSERT INTO messages (conversation_id, role, content) VALUES (?, 'user', ?)
   - INSERT INTO messages (conversation_id, role, content) VALUES (?, 'assistant', ?)
   ↓
9. API ROUTE returns response to frontend
   ↓
10. FRONTEND displays Maya's message
```

## Data Extraction Flow

```
USER says: "I have a webdev company called WebTech and need 3 developers"
   ↓
API ROUTE receives message
   ↓
extractLeadDataFromMessage() runs regex patterns:
   - Company: /(?:company|business|firm)(?:'s| is)? (?:called |named )?([A-Z][A-Za-z0-9\s&]+)/
     → Extracts "WebTech"
   - Industry: /(webdev|real estate|accounting|marketing|...)/i
     → Extracts "webdev"
   - Team Size: /(\d+)\s*(?:people|developers|staff|team|members)/
     → Extracts "3"
   ↓
Extracted data: { company: "WebTech", industry: "webdev", desiredTeamSize: 3 }
   ↓
Background POST to /api/chat/save-lead-data (non-blocking)
   ↓
save-lead-data API:
   - UPDATE users SET company = 'WebTech', industry_name = 'webdev', desired_team_size = 3
   - UPDATE lead_progress SET status = 'stage_1', notes = 'need 3 developers'
   ↓
Data saved to database ✅
```

---

# FRONTEND COMPONENTS

## ai-chat-console.tsx

**Location:** `src/components/ui/ai-chat-console.tsx`

**Purpose:** Main chat interface component

**Key State:**
```typescript
const [messages, setMessages] = useState<Message[]>([])
const [inputValue, setInputValue] = useState('')
const [isLoading, setIsLoading] = useState(false)
const [isOpen, setIsOpen] = useState(false)
const [isMinimized, setIsMinimized] = useState(false)
```

**Key Functions:**
- `handleSubmit()` - Send message to API
- `generateAIResponse()` - Call /api/chat
- `scrollToBottom()` - Auto-scroll chat

**DISABLED Modal Triggers:**
- Line 283: Direct team creation → NO MODAL
- Line 341: Contact info form → NO MODAL
- Line 405: Pricing calculator → NO MODAL
- Line 439: Industry selection → NO MODAL

All wrapped in `if (false && ...)` to prevent execution.

**Renders:**
- Chat button in footer
- Chat modal with messages
- Message input
- Loading indicator
- Maya's avatar

---

# AI CONFIGURATION

## ai-config.ts Structure

**File:** `src/lib/ai-config.ts`

### Base System Prompt

```typescript
const baseSystemPrompt = `You are Maya Santos, a friendly and helpful AI assistant for ShoreAgents.

Be natural, conversational, and avoid repetitive phrases. Each response should feel fresh and personalized.
...`
```

### Personalization Function

```typescript
withPersonalization(userData: UserData): string {
  // Builds dynamic prompt with:
  // - User's name, company, industry, team size
  // - Quote details with role info
  // - Lead progress status
  // - Page journey (visited pages)
  // - Past conversations count
  // - REAL candidates from database
  
  return baseSystemPrompt + userContext + rules + candidatesList;
}
```

**Prompt Sections:**
1. **Basic Info** - Name, company, industry, team size, email, lead stage
2. **Quotes Context** - If user has quotes, show roles requested
3. **Page Journey** - Pages visited (shows interest areas)
4. **Lead Status** - Current stage with interpretation
5. **Real Candidates** - Top 5 candidates from bpoc_users with names, positions, skills
6. **Conversational Rules** - How to ask questions naturally
7. **Stage 1 Collection** - Company, industry, team size, needs
8. **Stage 2 Collection** - Name, email (only after rapport)
9. **Pricing Rules** - How to discuss pricing conversationally
10. **Candidate Rules** - When and how to suggest real people
11. **Tone & Style** - Be friendly, use names, no repetition

### Example Prompt Output

```
You are Maya Santos, a conversational AI assistant for ShoreAgents.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 CURRENT USER CONTEXT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BASIC INFO:
- Name: Danny Garcia
- Company: WebTech
- Industry: Webdev
- Desired Team Size: 3
- Email: Not provided
- Lead Stage: stage_1
- Has Quotes: No

🎯 REAL CANDIDATES AVAILABLE (Top 8):
1. **John Doe** - Full Stack Developer (Skills: React, Node.js, TypeScript)
2. **Jane Smith** - Senior Web Developer (Skills: JavaScript, Vue.js, CSS)
3. **Mike Johnson** - Front-end Developer (Skills: HTML, CSS, React)
...

LEAD STATUS: stage_1
Business Needs: "need some Full stack devs"

🎯 WHAT THIS MEANS:
- stage_1: They gave basic info, get more specific

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ CONVERSATIONAL LEAD CAPTURE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. **NEVER** push forms unless user explicitly asks
2. **ALWAYS** ask questions naturally in chat
3. **GRADUALLY** collect information over multiple messages
4. Be warm, friendly, and helpful

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 STAGE 1 DATA COLLECTION (First 5-10 messages)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IF MISSING company → Ask: "What's your company called?"
IF MISSING industry → Ask: "What industry are you in?"
IF MISSING desired_team_size → Ask: "How many people are you thinking?"
IF MISSING notes → Ask: "What kind of work will they be doing?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👥 CANDIDATE SUGGESTIONS - USE REAL DATA!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 YOU NOW HAVE ACCESS TO REAL CANDIDATES!

WHEN TO SUGGEST CANDIDATES:
1. User explicitly asks ("show me candidates", "who do you have?")
2. User has a quote and is ready to see people
3. User mentioned specific roles and you can match them

HOW TO SUGGEST CANDIDATES:
✅ Use the REAL candidates from the context provided
✅ Show their REAL name, position, and skills
✅ Match them to what the user needs
✅ Link to /we-got-talent to see all talent

...
```

---

# BUGS FIXED

## 1. Lead Progress Stage Not Loading ✅

**Problem:** Maya showed `leadProgressStage: 'No stage'` even though data was saved

**Root Cause:** Database column is `status` but code checked `stage`

**Fix:**
```typescript
// BEFORE (line 564):
leadProgressStage: leadProgress?.stage || 'No stage',

// AFTER:
leadProgressStage: leadProgress?.status || 'No stage',
```

**File:** `src/app/api/chat/route.ts` line 577

---

## 2. Page Journey Database Error ✅

**Problem:** Error: `column user_page_visits.page_url does not exist`

**Root Cause:** Query selected wrong column names

**Fix:**
```typescript
// BEFORE (lines 448-454):
const { data: pageJourney } = await supabase
  .from('user_page_visits')
  .select('page_url, page_title, visit_timestamp, time_spent_seconds')

// AFTER:
const { data: pageJourney } = await supabase
  .from('user_page_visits')
  .select('page_path, visit_timestamp, time_spent_seconds')
```

**File:** `src/app/api/chat/route.ts` lines 449-454

**Note:** Database has `page_path` column, NOT `page_url` or `page_title`

---

## 3. hasIndustry Flag Broken ✅

**Problem:** Showed `hasIndustry: false` even with `industry: 'Webdev'`

**Root Cause:** Only checked `user.industry`, not `user.industry_name`

**Fix:**
```typescript
// BEFORE (line 496):
const hasIndustry = !!user.industry;

// AFTER:
const hasIndustry = !!(user.industry_name || user.industry);
```

**File:** `src/app/api/chat/route.ts` line 508

---

## 4. Conversation Memory Not Saving ✅

**Problem:** No conversations or messages saved to database

**Fix:** Added conversation saving logic (lines 828-876):
```typescript
if (userId && message) {
  const supabase = createClient();
  
  // Create or get conversation
  const conversationTitle = message.length > 50 ? message.substring(0, 50) + '...' : message;
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const { data: existingConv } = await supabase
    .from('conversations')
    .select('id')
    .eq('user_id', userId)
    .gte('created_at', today.toISOString())
    .single();

  let conversationId = existingConv?.id;

  if (!conversationId) {
    const { data: newConv } = await supabase
      .from('conversations')
      .insert({ user_id: userId, title: conversationTitle })
      .select('id')
      .single();
    conversationId = newConv?.id;
  }

  // Save user message
  await supabase.from('messages').insert({
    conversation_id: conversationId,
    role: 'user',
    content: message
  });

  // Save AI response
  await supabase.from('messages').insert({
    conversation_id: conversationId,
    role: 'assistant',
    content: response
  });

  console.log('💾 Conversation saved to database:', conversationId);
}
```

**File:** `src/app/api/chat/route.ts` lines 828-876

---

## 5. Modal Popups Interrupting Chat ✅

**Problem:** Modals popped up asking "What's your team size?" instead of conversational flow

**Root Cause:** Frontend had 4 triggers that opened modals when certain keywords were detected

**Fix:** Disabled all 4 modal triggers by wrapping in `if (false && ...)`

**Triggers Disabled:**
1. Line 283: Direct team creation modal
2. Line 341: Contact info collection modal
3. Line 405: Pricing calculator modal
4. Line 439: Industry selection modal

**File:** `src/components/ui/ai-chat-console.tsx`

---

## 6. Maya Hallucinating Fake Candidates ✅

**Problem:** Maya made up fake people like "Sarah Johnson", "Juan Martinez"

**Root Cause:** AI had no access to real candidate data

**Fix Part 1:** Fetch real candidates from database (lines 490-500):
```typescript
const { data: candidates } = await supabase
  .from('bpoc_users')
  .select('first_name, last_name, full_name, position, current_position, location, skills_snapshot, expected_salary, overall_score, user_id')
  .eq('work_status_completed', true)
  .order('overall_score', { ascending: false })
  .limit(8);
```

**Fix Part 2:** Pass candidates to userData (line 549):
```typescript
userData = {
  ...
  candidates: candidates || [],
  ...
};
```

**Fix Part 3:** Add candidates to AI prompt (lines 151-157 in ai-config.ts):
```typescript
🎯 REAL CANDIDATES AVAILABLE (Top ${userData.candidates?.length || 0}):
${userData.candidates && userData.candidates.length > 0 
  ? userData.candidates.slice(0, 5).map((c, i) => 
    `${i + 1}. **${c.full_name}** - ${c.position} (Skills: ${c.skills_snapshot.slice(0, 3).join(', ')})`
  ).join('\n')
  : 'No candidates data available - direct user to /we-got-talent'
}
```

**Files:** 
- `src/app/api/chat/route.ts` lines 490-500, 549
- `src/lib/ai-config.ts` lines 151-157, 209-242

---

# CURRENT FUNCTIONALITY

## ✅ What Works

1. **Conversational Lead Capture**
   - Asks for company naturally: "What's your company called?"
   - Asks for industry: "What industry are you in?"
   - Asks for team size: "How many people do you need?"
   - Asks for business needs: "What will they be doing?"
   - Extracts data automatically using regex
   - Saves to database in background

2. **Stage 2 Contact Capture**
   - After rapport, asks for name: "By the way, what's your name?"
   - Asks for last name: "And your last name?"
   - Asks for email: "Can I get your email?"
   - Saves to users table

3. **Memory & Context**
   - ✅ Remembers user's name (uses it in responses)
   - ✅ Remembers company name
   - ✅ Remembers industry
   - ✅ Remembers team size
   - ✅ Remembers what pages user visited
   - ✅ Remembers past conversations
   - ✅ Remembers quotes user requested

4. **Real Candidate Suggestions**
   - ✅ Fetches top 8 candidates from bpoc_users
   - ✅ Shows real names, positions, skills
   - ✅ Links to /we-got-talent for full profiles
   - ✅ No more hallucinated fake names

5. **Lead Progress Tracking**
   - ✅ Tracks stage (new_lead → stage_1 → stage_2 → quoted → signed_up)
   - ✅ Saves business needs to notes
   - ✅ Updates automatically based on data collected

6. **Quote Awareness**
   - ✅ Knows if user has quotes
   - ✅ Knows what roles were in the quote
   - ✅ Can reference quote details in conversation

7. **Page Journey Awareness**
   - ✅ Knows what pages user visited
   - ✅ Can tailor conversation based on interests

8. **Debug Logging**
   - ✅ Comprehensive logs in terminal
   - ✅ Shows all context Maya has access to
   - ✅ Shows data extraction results
   - ✅ Shows conversation saves

---

# KNOWN ISSUES

## Minor Issues

### 1. Anonymous User ID Regeneration

**Issue:** Device fingerprint sometimes regenerates, losing conversation history

**Impact:** Low - mostly affects testing

**Workaround:** Use consistent device/browser for testing

**Future Fix:** Implement more robust fingerprinting or local storage persistence

---

### 2. Candidate Matching Not Smart

**Issue:** Maya shows top 8 candidates by score, doesn't filter by role/industry

**Impact:** Medium - might show irrelevant candidates

**Example:** User asks for "marketing" but sees developers in list

**Future Fix:** Filter candidates by:
```typescript
// Match industry
.ilike('position', `%${user.industry}%`)

// Match role keywords
.or('position.ilike.%developer%,current_position.ilike.%developer%')
```

Or use the existing `/api/bpoc-candidates` endpoint which has smart matching.

---

### 3. Rate Limiting Per IP Only

**Issue:** Rate limit is per IP (10 req/min), not per user

**Impact:** Low - unlikely to hit in normal use

**Future Fix:** Track by userId instead of IP:
```typescript
const rateLimitKey = userId || clientIp;
```

---

### 4. No Streaming Responses

**Issue:** Maya's responses appear all at once (not streamed character-by-character)

**Impact:** UX - feels less natural

**Future Fix:** Implement OpenAI streaming:
```typescript
const stream = await openai.chat.completions.create({
  ...
  stream: true
});
```

---

# FUTURE PLANS

## Phase 1: Intelligence Upgrades

### 1. Smart Candidate Matching ⭐⭐⭐
**Priority:** HIGH

**Goal:** Match candidates to user's specific needs

**Implementation:**
```typescript
// In /api/chat/route.ts after line 489
let candidatesQuery = supabase
  .from('bpoc_users')
  .select('*')
  .eq('work_status_completed', true);

// Filter by industry if available
if (user.industry) {
  candidatesQuery = candidatesQuery.or(
    `position.ilike.%${user.industry}%,current_position.ilike.%${user.industry}%`
  );
}

// Filter by role if mentioned in conversation
const messageText = conversationHistory.map(m => m.content).join(' ').toLowerCase();
if (messageText.includes('developer')) {
  candidatesQuery = candidatesQuery.or(
    `position.ilike.%developer%,current_position.ilike.%developer%`
  );
}

candidatesQuery = candidatesQuery
  .order('overall_score', { ascending: false })
  .limit(8);
```

**Alternative:** Use existing `/api/bpoc-candidates` endpoint:
```typescript
const response = await fetch('/api/bpoc-candidates', {
  method: 'POST',
  body: JSON.stringify({
    userInfo: { industry: user.industry },
    targetRoles: extractRolesFromMessage(message)
  })
});
```

---

### 2. Semantic Search / Embeddings ⭐⭐
**Priority:** MEDIUM

**Goal:** Better memory across conversations using vector search

**Why:** Current system only fetches last 5 conversations. With embeddings, Maya could search ALL past conversations semantically.

**Implementation:**
1. Store conversation embeddings in Supabase pgvector
2. On each message, search similar past conversations
3. Include relevant context in prompt

**Example:**
```typescript
// Generate embedding for current message
const embedding = await openai.embeddings.create({
  model: 'text-embedding-3-small',
  input: message
});

// Search similar past messages
const { data: similarMessages } = await supabase.rpc('match_messages', {
  query_embedding: embedding.data[0].embedding,
  match_threshold: 0.8,
  match_count: 5
});

// Add to prompt
systemPrompt += `\n\nRELEVANT PAST CONVERSATIONS:\n${similarMessages.map(m => m.content).join('\n')}`;
```

---

### 3. Quote Creation from Chat ⭐⭐⭐
**Priority:** HIGH

**Goal:** Maya can create pricing quotes directly from conversation

**Current:** Maya asks about roles/needs but doesn't create quotes

**Future:**
```typescript
// When Maya has enough info
if (hasCompany && hasIndustry && hasRoles && hasExperience) {
  // Call pricing API
  const quote = await fetch('/api/pricing-calculator', {
    method: 'POST',
    body: JSON.stringify({
      userId,
      roles: extractedRoles,
      experience: extractedExperience,
      workplaceType: extractedWorkplace
    })
  });
  
  // Return quote to user
  return `I've created a personalized quote for you! Here's what we're looking at:
  
  ${quote.roles.map(r => `- ${r.role}: ₱${r.monthly_cost}/month`).join('\n')}
  
  **Total: ₱${quote.total_monthly_cost}/month**
  
  Want to see the full breakdown?`;
}
```

---

### 4. Interview Request from Chat ⭐⭐
**Priority:** MEDIUM

**Goal:** Users can request interviews directly in chat

**Example Flow:**
```
User: "I like John Doe, can I interview him?"
Maya: "Great choice! John is available. What time works for you?"
User: "Next Tuesday at 2pm"
Maya: "Perfect! I've sent an interview request to our team. You'll get a confirmation email soon. His skills in React and Node.js are a perfect match for your team!"
```

**Implementation:**
- Detect interview intent in message
- Extract candidate name
- Extract date/time preferences
- Call interview scheduling API
- Send confirmation

---

### 5. Proactive Suggestions ⭐
**Priority:** LOW

**Goal:** Maya suggests next steps based on context

**Examples:**
- If user has quote but hasn't seen candidates: "Want to see some candidates who match this quote?"
- If user visited /pricing multiple times: "I noticed you've been checking pricing - want to get a personalized quote?"
- If user has email but no quote: "Ready to see some pricing for your team?"

---

## Phase 2: UX Improvements

### 1. Streaming Responses
**Goal:** Show Maya's response character-by-character (like ChatGPT)

**Benefit:** Feels more natural, reduces perceived latency

---

### 2. Rich Candidate Cards in Chat
**Goal:** Instead of text, show candidate cards with photos

**Example:**
```tsx
<CandidateCard
  name="John Doe"
  position="Full Stack Developer"
  avatar="/avatars/john.jpg"
  skills={['React', 'Node.js', 'TypeScript']}
  score={95}
  onRequestInterview={() => ...}
  onViewProfile={() => ...}
/>
```

---

### 3. Quick Reply Buttons
**Goal:** Show suggested responses for faster interaction

**Example:**
```
Maya: "What industry are you in?"

[Webdev] [Real Estate] [Marketing] [Other]
```

---

### 4. Voice Input
**Goal:** Users can speak to Maya instead of typing

**Implementation:** Web Speech API or Whisper API

---

## Phase 3: Analytics & Optimization

### 1. Conversation Analytics
**Goal:** Track conversation metrics

**Metrics:**
- Average messages to capture email
- Drop-off points
- Most common questions
- Conversion rate (chat → quote → sign up)

---

### 2. A/B Testing Prompts
**Goal:** Test different Maya personalities/approaches

**Example:**
- Variant A: Very friendly, casual tone
- Variant B: Professional, business tone
- Measure which converts better

---

### 3. Auto-Improve Regex Patterns
**Goal:** Track extraction failures, improve patterns automatically

**Example:**
```typescript
// Log when extraction fails
if (!extractedData.company && messageContains(['company', 'business'])) {
  logExtractionFailure('company', message);
}

// Analyze logs to improve patterns
```

---

# TROUBLESHOOTING

## Maya Not Responding

**Check:**
1. Server running? `npm run dev`
2. OpenAI API key set? Check `.env.local`
3. Supabase connected? Check database URL
4. Check terminal logs for errors

---

## Data Not Saving

**Check:**
1. Terminal logs - look for "💾 Conversation saved"
2. Supabase table permissions - need INSERT/UPDATE
3. userId valid - should be UUID or device_XXX format

---

## Wrong Candidate Names Showing

**If seeing fake names like "Sarah Johnson":**
1. Hard refresh browser (Cmd+Shift+R)
2. Check terminal logs for "candidatesCount"
3. Verify bpoc_users table has data
4. Check line 490-500 in route.ts fetching candidates

---

## Modals Still Popping Up

**If seeing team size modal:**
1. Hard refresh browser
2. Verify lines 283, 341, 405, 439 have `if (false &&`
3. Check if old code cached - clear Next.js cache: `rm -rf .next`

---

# DEVELOPER COMMANDS

```bash
# Start dev server
cd /Users/stephenatcheler/Documents/GitHub/sa-lead-client-dashboard-main/shoreagents-main
npm run dev

# Clear cache and restart
rm -rf .next
npm run dev

# Check TypeScript errors
npx tsc --noEmit

# View terminal logs in real-time
# (logs appear in terminal where npm run dev is running)

# Test database connection
# In Supabase SQL editor:
SELECT * FROM users WHERE user_id = 'device_g6y2nv';
SELECT * FROM lead_progress WHERE user_id = 'device_g6y2nv';
SELECT * FROM conversations WHERE user_id = 'device_g6y2nv';
SELECT * FROM bpoc_users WHERE work_status_completed = true ORDER BY overall_score DESC LIMIT 10;
```

---

# QUICK REFERENCE

## Key Files Cheat Sheet

| Purpose | File | Lines of Interest |
|---------|------|------------------|
| Main chat API | `src/app/api/chat/route.ts` | 490-500 (candidates), 549 (userData), 647-660 (OpenAI call) |
| Data extraction | `src/app/api/chat/route.ts` | 101-200 (regex patterns) |
| Background saver | `src/app/api/chat/save-lead-data/route.ts` | All |
| AI personality | `src/lib/ai-config.ts` | 81-157 (withPersonalization), 209-242 (candidate rules) |
| Chat UI | `src/components/ui/ai-chat-console.tsx` | 283, 341, 405, 439 (disabled modals) |
| Candidate fetch | `src/hooks/useBPOCUsers.ts` | All |

## Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
OPENAI_API_KEY=sk-xxx
```

## Database Tables Quick Ref

| Table | Key Columns | Purpose |
|-------|-------------|---------|
| users | company, industry_name, desired_team_size | User data |
| lead_progress | status, notes | Lead stages |
| conversations | user_id, title | Chat sessions |
| messages | conversation_id, role, content | Chat messages |
| bpoc_users | full_name, position, skills_snapshot | Real candidates |
| pricing_quotes | user_id, total_monthly_cost | Quotes |
| pricing_quote_roles | quote_id, role_title | Roles in quotes |
| user_page_visits | page_path, visit_timestamp | Page tracking |

---

# CONCLUSION

**Maya is now:**
- ✅ 100% conversational (no modals)
- ✅ Extracting data automatically
- ✅ Saving to database in background
- ✅ Remembering everything (conversations, page visits, quotes)
- ✅ Suggesting REAL candidates from /we-got-talent
- ✅ Using user's name and company context
- ✅ Tracking lead progress stages
- ✅ Production ready

**Future improvements:** Smart candidate matching, semantic search, quote creation from chat, streaming responses

**Critical files to know:**
1. `src/app/api/chat/route.ts` - Maya's brain
2. `src/lib/ai-config.ts` - Maya's personality
3. `src/components/ui/ai-chat-console.tsx` - Maya's UI

**Database tables to know:**
1. `users` - User data
2. `lead_progress` - Lead stages
3. `conversations` + `messages` - Chat history
4. `bpoc_users` - Real candidates

---

**NOW GO BUILD SOMETHING FUCKING AWESOME!** 🚀


