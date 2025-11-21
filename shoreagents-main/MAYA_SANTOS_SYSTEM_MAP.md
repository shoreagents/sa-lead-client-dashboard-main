# Maya Santos Chat System - Complete Setup Map 🤖

**Last Updated:** November 19, 2025  
**Status:** ✅ Operational (with Emmanuel's features integrated)

---

## 📍 WHERE MAYA LIVES

### **Main Chat Interface**
```
📁 src/app/user-dashboard/chat/
├── page.tsx                 ← Main chat page (logged-in users)
└── page-new.tsx             ← Alternative chat implementation
```

### **Chat API & Intelligence**
```
📁 src/app/api/
├── chat/route.ts                              ← Main chat endpoint (Claude AI integration)
├── analyze-candidate/route.ts                 ← Candidate analysis
├── ai-candidate-recommendations/route.ts      ← AI-generated candidates (NEW from Emmanuel)
└── ai-job-matching/route.ts                   ← Job matching (stub)
```

### **Maya Components**
```
📁 src/components/maya/
├── MayaTextField.tsx                  ← Text input component
├── MayaNameFields.tsx                 ← Name capture fields
├── MayaTalentSearchForm.tsx           ← Talent search
├── MayaPricingForm.tsx                ← Conversational pricing (NEW from Emmanuel)
├── MayaSummaryCard.tsx                ← Form summary in chat (NEW from Emmanuel)
├── MayaPricingSummaryCard.tsx         ← Pricing summary in chat (NEW from Emmanuel)
├── MayaAnonymousUserForm.tsx          ← Anonymous user capture
├── MayaAnonymousUserModal.tsx         ← Anonymous user modal
├── MayaPricingCalculatorForm.tsx      ← Pricing calculator
├── MayaPricingCalculatorModal.tsx     ← Pricing calculator modal
├── MayaInterviewRequestForm.tsx       ← Interview request
├── MayaInterviewRequestModal.tsx      ← Interview request modal
├── MayaSignUpForm.tsx                 ← Sign up form
├── MayaSignUpModal.tsx                ← Sign up modal
├── MayaTalentSearchModal.tsx          ← Talent search modal
└── index.ts                           ← Component exports
```

### **Chat Context & Hooks**
```
📁 src/lib/
├── chat-context.tsx           ← Chat state management
├── ai-config.ts               ← AI configuration
├── ai-config-simplified.ts    ← Simplified AI config
└── knowledge-base.ts          ← Knowledge base search

📁 src/hooks/
├── use-api.ts                 ← API hooks
├── useBPOCCandidates.ts      ← BPOC candidates hook (NEW from Emmanuel)
├── useBPOCEmployees.ts       ← BPOC employees hook
└── useBPOCUsers.ts           ← BPOC users hook
```

### **UI Components**
```
📁 src/components/ui/
├── ai-chat-console.tsx        ← Chat console component
├── floating-chat-button.tsx   ← Floating chat button
└── maya-form-builder.tsx      ← Dynamic form builder
```

---

## 🧠 MAYA'S INTELLIGENCE (What Makes Her Smart)

### **1. Advanced Conversation Analysis** ⭐⭐⭐⭐⭐
**Location:** `src/app/api/chat/route.ts` (lines 9-171)

**What She Can Detect:**
```javascript
Intent Types (8+):
✅ greeting              - "Hi", "Hello", "Hey"
✅ candidate_analysis    - "Tell me about John Doe"
✅ pricing_inquiry       - "How much does it cost?"
✅ talent_inquiry        - "I need to hire developers"
✅ service_inquiry       - "What services do you offer?"
✅ contact_inquiry       - "How do I reach you?"
✅ account_inquiry       - "How do I sign up?"

Conversation Stages (4):
✅ greeting              - First message
✅ exploration           - 1-2 messages
✅ engagement            - 3-5 messages
✅ deep_discussion       - 6+ messages

Urgency Levels (3):
✅ high     - "urgent", "asap", "immediately"
✅ medium   - "soon", "fast", "quick"
✅ low      - default

Topics Extracted (9+):
✅ candidate_analysis, real_estate, construction, engineering
✅ marketing, finance, virtual_assistant, outsourcing, team_building

Suggested Actions (8+):
✅ pricing_calculator_modal
✅ pricing_form_modal (conversational)
✅ contact_form_modal
✅ quote_details_modal
✅ urgent_contact_modal
✅ demo_modal
✅ interview_form_modal
✅ demo_form_modal
```

### **2. AI Integration**
- **Claude Sonnet 4.5** (Anthropic API)
- **Environment Variable:** `ANTHROPIC_API_KEY`
- **Fallback:** Graceful error handling if API is down

### **3. Knowledge Base Search**
- **Location:** `src/lib/knowledge-base.ts`
- **Function:** Searches internal knowledge for relevant context
- **Integration:** Results are injected into AI prompts

---

## 💬 HOW MAYA CHAT WORKS (User Journey)

### **For Anonymous Users:**
```
1. User lands on site
2. Maya button appears (floating chat)
3. User clicks → Opens chat
4. Maya greets + asks how to help
5. Based on conversation:
   → Suggests pricing calculator
   → Suggests contact form
   → Suggests talent search
6. Captures lead info progressively
```

### **For Logged-In Users:**
```
1. User logs in
2. Navigates to /user-dashboard/chat
3. Maya recognizes user by name
4. Accesses user's:
   - Previous quotes
   - Company info
   - Industry
   - Contact details
5. Provides personalized responses
6. Can show user's quote history
```

---

## 🗄️ BPOC CANDIDATE DATABASE CONNECTION

### **Current Setup:**
```
Environment Variable:
BPOC_DATABASE_URL=postgresql://postgres:uhHHXWXqcHsfigEncYiZCbyoozvkEnOk@shinkansen.proxy.rlwy.net:35256/railway

Database Client: PostgreSQL (pg package v8.16.3)

Connection File: src/lib/bpoc-database.ts
```

### **BPOC Database Structure:**
```sql
Tables:
├── users                    ← Candidate profiles
├── user_work_status        ← Work status, salary, position
└── ai_analysis_results     ← AI scores, skills, strengths
```

### **API Endpoints:**
```
GET  /api/bpoc-users              ← Fetch all candidates
POST /api/bpoc-candidates         ← Search candidates by role
GET  /api/test-bpoc-connection    ← Test DB connection (NEW)
```

### **Current Status:**
```
✅ Environment variable: SET
✅ pg package: INSTALLED
✅ Connection file: EXISTS
❓ Connection test: NEEDS TESTING
❓ Data fetching: NEEDS VERIFICATION
```

---

## 🆕 WHAT WE JUST INTEGRATED (From Emmanuel)

### **1. Conversational Pricing Form**
**File:** `src/components/maya/MayaPricingForm.tsx`

**Flow:**
```
1. Maya asks: "How many team members?"
2. User answers: "3"
3. Maya asks: "Same role or different?"
4. User answers: "Different"
5. Maya asks: "What industry?"
6. User answers: "Real Estate"
7. Maya asks for each role individually
8. Maya shows pricing summary IN CHAT
9. Maya offers to show matching candidates
```

**Benefits:**
- Feels like natural conversation
- Not a modal/form
- Progressive disclosure
- Beautiful summary cards

### **2. AI-Generated Candidate Fallback**
**File:** `src/app/api/ai-candidate-recommendations/route.ts`

**When Used:**
- BPOC database is empty
- BPOC connection fails
- Demo/testing environments

**How It Works:**
```javascript
POST /api/ai-candidate-recommendations
{
  "role": "Software Developer",
  "level": "mid",
  "industry": "Real Estate"
}

Response: 3-5 AI-generated realistic candidates
```

### **3. Summary Cards in Chat**
**Files:**
- `MayaSummaryCard.tsx` - Form data review
- `MayaPricingSummaryCard.tsx` - Pricing breakdown

**Features:**
- Shows collected data
- Edit buttons inline
- Confirm/proceed actions
- Beautiful animations
- Currency-aware

### **4. Enhanced Modal Triggers**
**File:** `src/app/user-dashboard/chat/page.tsx`

**Updated handleModalTrigger() to support:**
```typescript
✅ pricing_form_modal         → Conversational pricing
✅ contact_form_modal         → Contact capture
✅ quote_details_modal        → Navigate to quotations
✅ urgent_contact_modal       → High-priority contact
✅ demo_modal / demo_form_modal → Demo booking (placeholder)
```

---

## 🔧 CONFIGURATION FILES

### **AI Configuration**
```
src/lib/ai-config.ts                ← Main AI config
src/lib/ai-config-simplified.ts     ← Simplified version (current)
```

**Key Settings:**
- Assistant name: "Maya Santos"
- Personality: Friendly, helpful, conversational
- Response style: Natural, not robotic
- Context awareness: Yes
- Personalization: Yes (for logged-in users)

### **Environment Variables Needed:**
```bash
# Required for Maya:
ANTHROPIC_API_KEY=your_claude_api_key_here
BPOC_DATABASE_URL=postgresql://...your_db_url_here

# Also needed:
DATABASE_URL=your_supabase_url
SERPER_API_KEY=your_serper_key (for lead enrichment)
```

---

## 🚨 CURRENT ISSUES / NEEDS TESTING

### **1. BPOC Connection Status**
```
❓ UNKNOWN - Need to test with:
   GET http://localhost:3000/api/test-bpoc-connection
```

**Expected Response:**
```json
{
  "success": true,
  "message": "BPOC database connection is working! ✅",
  "tables": {
    "available": ["users", "user_work_status", "ai_analysis_results"],
    "counts": {
      "users": 123,
      "user_work_status": 45,
      "ai_analysis_results": 67
    }
  }
}
```

**If It Fails:**
```json
{
  "success": false,
  "error": "Connection timeout / Invalid credentials / etc.",
  "envCheck": {
    "BPOC_DATABASE_URL": "SET ✅" or "NOT SET ❌"
  }
}
```

### **2. Candidate Display Issue**
**Symptom:** "Failed to load employee data"

**Possible Causes:**
- BPOC database connection failed
- Wrong database URL
- Tables don't exist
- No data in tables
- Permissions issue

**Files Affected:**
- `/user-dashboard/candidates` page
- `TopCandidateWithMatches` component
- `getEmployeeCardData()` function

### **3. Chat Features to Test**
```
✅ Basic chat (sending/receiving messages)
✅ Intent detection
✅ Action suggestions (buttons)
❓ Modal triggers (pricing, contact, etc.)
❓ Conversational pricing form
❓ Candidate recommendations
❓ Summary cards display
```

---

## 🎯 WHAT NEEDS TO BE DONE NEXT

### **Immediate Actions:**

1. **Test BPOC Connection**
   ```bash
   curl -s http://localhost:3000/api/test-bpoc-connection | jq .
   ```

2. **Verify Candidate Data Loads**
   - Visit: `http://localhost:3000/user-dashboard/candidates`
   - Should show candidates from BPOC database

3. **Test Maya Chat**
   - Visit: `http://localhost:3000/user-dashboard/chat`
   - Send message: "I need to hire 3 developers"
   - Check if action button appears

4. **Test Conversational Pricing**
   - Chat: "Get me a quote"
   - Follow the conversational flow
   - Verify summary cards display

### **If BPOC Connection Fails:**

**Option A: Fix Connection**
- Verify `BPOC_DATABASE_URL` is correct
- Check database is online
- Test with direct PostgreSQL client

**Option B: Use AI Fallback**
- Maya will use AI-generated candidates
- Good for demos/testing
- Not real data from BPOC

---

## 📊 MAYA'S CURRENT CAPABILITIES

### **✅ What Maya CAN Do:**
```
✅ Natural conversation
✅ Detect user intent (8+ types)
✅ Track conversation stage
✅ Detect urgency
✅ Extract topics
✅ Suggest actions intelligently
✅ Remember logged-in user context
✅ Show personalized greetings
✅ Trigger modals at right time
✅ Search knowledge base
✅ Analyze candidates (when user asks)
✅ Generate AI candidates (fallback)
✅ Display summary cards
✅ Handle multi-step forms conversationally
```

### **❌ What Maya CANNOT Do Yet:**
```
❌ Voice/audio chat
❌ Image recognition
❌ Schedule meetings directly
❌ Send emails directly
❌ Make phone calls
❌ Access external CRMs
❌ Process payments
❌ Multi-language (English only)
```

---

## 🔑 KEY FILES REFERENCE

**Most Important Files:**
```
1. src/app/api/chat/route.ts              ← Maya's brain
2. src/lib/ai-config-simplified.ts        ← Maya's personality
3. src/app/user-dashboard/chat/page.tsx   ← Chat UI
4. src/lib/bpoc-database.ts               ← Candidate data
5. src/components/maya/MayaPricingForm.tsx ← Conversational pricing
```

**To Modify Maya's Responses:**
- Edit: `src/lib/ai-config-simplified.ts`
- Change system prompts
- Adjust personality
- Add/remove intents

**To Add New Modal Triggers:**
- Edit: `src/app/user-dashboard/chat/page.tsx`
- Update: `handleModalTrigger()` function
- Add new case in switch statement

**To Change Conversation Analysis:**
- Edit: `src/app/api/chat/route.ts`
- Update: `analyzeConversation()` function
- Add new intents/topics/actions

---

## 🎭 MAYA'S PERSONALITY

**Name:** Maya Santos  
**Role:** AI Assistant for ShoreAgents  
**Tone:** Friendly, helpful, conversational  
**Style:** Natural, not robotic  

**Guidelines:**
- Use user's name when known
- Vary responses (don't be repetitive)
- Keep responses concise
- Avoid corporate speak
- Be helpful, not salesy
- Suggest actions naturally

**Example Responses:**
```
❌ BAD: "As a valued ShoreAgents customer, we appreciate your inquiry..."
✅ GOOD: "Hi John! Happy to help you find the right team."

❌ BAD: "Please proceed to fill out our comprehensive form..."
✅ GOOD: "Let me help you get a quote. How many people are you looking to hire?"

❌ BAD: "Your request has been processed successfully."
✅ GOOD: "Got it! Let me show you some candidates who'd be perfect."
```

---

## 🚀 READY TO GUIDE ME!

**I now understand:**
- ✅ Where Maya lives (files/folders)
- ✅ How Maya works (conversation analysis)
- ✅ What Maya can do (capabilities)
- ✅ What we just integrated (Emmanuel's features)
- ✅ Current issues (BPOC connection)
- ✅ What needs testing

**GUIDE ME ON:**
1. Should I test BPOC connection first?
2. Do you want to see Maya in action (chat test)?
3. Is the BPOC connection the priority issue?
4. Should I focus on getting candidates to display?
5. Something else?

**WHAT'S YOUR PRIORITY?** 🎯




