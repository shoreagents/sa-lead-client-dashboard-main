# 🤖 Maya Conversational Intelligence - Implementation Plan

**Date:** November 19, 2025  
**Goal:** Transform Maya from form-pusher to conversational lead capture agent

---

## 🚨 THE PROBLEM

### **Current Maya Behavior:**
```
User: "Hi"
Maya: "Hi! Would you like to get a quote?" 
     [Shows form modal]

User: "Tell me about your services"
Maya: "Here's info... Would you like a quote?"
     [Shows form modal]

User: "What does this cost?"
Maya: [Opens pricing calculator modal]
```

**Result:** ❌ Too pushy, form-heavy, not conversational

---

### **What You Want (Correctly!):**
```
User: "Hi"
Maya: "Hey! I'm Maya. What brings you here today?"

User: "Looking to hire some help"
Maya: "Great! What kind of work do you need help with?"

User: "Marketing stuff"
Maya: "Nice! What's your company called? I can give you better suggestions."

User: "Acme Real Estate"
Maya: "Perfect! Real estate agencies love our marketing teams. 
      How many people are you thinking?"

User: "Maybe 2-3 people"
Maya: "Cool! I'll keep that in mind. What specific roles? 
      Like social media, content writing, graphic design?"

[Data is being captured naturally in background]

Later...
Maya: "By the way, I can show you what this would cost if you're curious. 
      Want a quick breakdown?"
```

**Result:** ✅ Natural, conversational, progressive lead capture

---

## 📊 WHAT MAYA NEEDS TO KNOW

### **1. Conversation Memory (Cross-Session)**
```javascript
✅ All past messages with this user (from conversations + messages tables)
✅ What they talked about last time
✅ What questions they asked
✅ What info they gave
✅ Where the conversation left off
```

### **2. Page Journey Tracking**
```javascript
✅ What pages they visited (from user_page_visits)
✅ In what order
✅ How long on each page
✅ Most recent page

Example:
- Homepage → 30 seconds
- /we-got-talent → 2 minutes ← They're interested in candidates!
- /construction-outsourcing → 1 minute ← Construction industry!
- Chat opened

Maya knows: "I see you were checking out our construction talent pool! 
             What kind of construction roles are you looking to fill?"
```

### **3. Progressive Lead Data Collection**
```javascript
Stage 1 Target Data (Conversationally gather):
├── company              // "What's your company called?"
├── industry_name        // "What industry are you in?"
├── desired_team_size    // "How many people?"
└── notes                // "What kind of work will they do?"

Stage 2 Target Data (Conversationally gather later):
├── first_name           // "Before we continue, what's your name?"
├── last_name            // "And your last name?"
└── email                // "Can I get your email to send you details?"

Quote Data (If they want pricing):
├── Specific roles       // "What exact positions?"
├── Experience levels    // "Entry, mid, or senior level?"
└── Workspace preference // "Office, WFH, or hybrid?"
```

### **4. Quote History & Role Awareness**
```javascript
✅ Previous quotes (from pricing_quotes)
✅ Roles they requested (from pricing_quote_roles) ← THIS IS THE GAP!
✅ Currency they use
✅ Team size they wanted

Example:
User: "Show me some candidates"
Maya: "Sure! I see you were looking for a Senior Developer and 
      Mid-Level Designer last week. Want to see candidates for those roles?"
```

### **5. Lead Status Awareness**
```javascript
✅ Current lead status (from lead_progress)
├── new_lead        → Warm them up first
├── stage_1         → They gave basic info, get more specific
├── stage_2         → They gave name/email, move to quote
├── quoted          → They have a quote, suggest candidates
├── signed_up       → They're a user, offer dashboard features
└── closed_won      → They're a customer, support mode

Example:
Status: 'quoted'
Maya: "Hey! I see you got a quote for 3 developers last week. 
      Ready to meet some candidates or have questions about the quote?"
```

---

## 🎯 IMPLEMENTATION PLAN

### **PHASE 1: Add Context to Maya (1-2 hours)**

#### **Step 1: Fix Quote Roles Fetching**
**File:** `src/app/api/chat/route.ts` (line 293)

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
  .order('quote_timestamp', { ascending: false })
  .limit(3); // Last 3 quotes only
```

---

#### **Step 2: Add Lead Progress Fetching**
**File:** `src/app/api/chat/route.ts` (after line 301)

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

---

#### **Step 3: Add Page Journey Fetching**
**File:** `src/app/api/chat/route.ts` (after lead progress)

**Add:**
```javascript
// Fetch recent page visits to understand their journey
const { data: pageJourney, error: journeyError } = await supabase
  .from('user_page_visits')
  .select('page_url, page_title, visit_timestamp, time_spent_seconds')
  .eq('user_id', userId)
  .order('visit_timestamp', { ascending: false })
  .limit(10); // Last 10 pages

if (journeyError) {
  console.error('Error fetching page journey:', journeyError);
}
```

---

#### **Step 4: Fetch Past Conversations**
**File:** `src/app/api/chat/route.ts`

**Add:**
```javascript
// Fetch past conversations to provide context
const { data: pastConversations, error: convError } = await supabase
  .from('conversations')
  .select(`
    id,
    title,
    created_at,
    context_data,
    messages!inner(
      role,
      content,
      created_at
    )
  `)
  .eq('user_id', userId)
  .order('created_at', { ascending: false })
  .limit(5); // Last 5 conversations

if (convError && convError.code !== 'PGRST116') {
  console.error('Error fetching past conversations:', convError);
}
```

---

#### **Step 5: Add Desired Team Size**
**Already in users table, just include it:**

**File:** `src/app/api/chat/route.ts` (line 343)

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
    industry: user.industry_name,  // ← Use industry_name field
    desired_team_size: user.desired_team_size,  // ← ADD THIS
    created_at: user.created_at,
    updated_at: user.updated_at
  },
  quotes: quotes || [],
  leadProgress: leadProgress || null,  // ← ADD THIS
  pageJourney: pageJourney || [],  // ← ADD THIS
  pastConversations: pastConversations || [],  // ← ADD THIS
  totalQuotes: quotes?.length || 0,
  recentActivity: pageVisits || [],
  leadCaptureStatus: {
    first_lead_capture: user.first_lead_capture || false,
    second_lead_capture: user.second_lead_capture || false,
    third_lead_capture: user.third_lead_capture || false
  },
  userProfile: {
    isAnonymous,
    isRegular,
    hasQuotes,
    hasContactInfo,
    hasCompany,
    hasIndustry,
    interests,
    potentialNeeds
  },
  isNewUser: false
};
```

---

### **PHASE 2: Update AI System Prompt (1 hour)**

#### **Create New Conversational Prompt**
**File:** `src/lib/ai-config.ts`

**Replace `withPersonalization` prompt with:**
```javascript
withPersonalization: (userData: any) => {
  // Build quote history context
  let quoteContext = '';
  if (userData.quotes && userData.quotes.length > 0) {
    quoteContext = `\n\nQUOTE HISTORY:
The user has ${userData.quotes.length} previous quote(s):

${userData.quotes.map((quote, idx) => {
  const roles = quote.pricingQuoteRoles || [];
  return `
Quote #${idx + 1} (${new Date(quote.quote_timestamp).toLocaleDateString()}):
- Industry: ${quote.industry}
- Team Size: ${quote.member_count} people
- Total Cost: ${quote.currency_code} ${quote.total_monthly_cost}/month
- Roles Requested: ${roles.length > 0 
    ? roles.map(r => `${r.role_title} (${r.experience_level} level)`).join(', ')
    : 'Not specified'}
`;
}).join('\n')}

🎯 USE THIS TO:
- Suggest candidates that match these specific roles
- Reference their previous interests naturally
- Build on their existing requirements
- Say things like "I see you were looking for a Senior Developer last week"
`;
  }

  // Build page journey context
  let journeyContext = '';
  if (userData.pageJourney && userData.pageJourney.length > 0) {
    const recentPages = userData.pageJourney.slice(0, 5);
    journeyContext = `\n\nUSER PAGE JOURNEY (Most Recent):
${recentPages.map((visit, idx) => 
  `${idx + 1}. ${visit.page_title || visit.page_url} (${visit.time_spent_seconds || 0}s)`
).join('\n')}

🎯 USE THIS TO:
- Understand what they're interested in
- Reference pages they visited naturally
- Example: "I saw you were checking out our construction talent pool!"
- Tailor your responses to their interests
`;
  }

  // Build lead status context
  let statusContext = '';
  if (userData.leadProgress) {
    statusContext = `\n\nLEAD STATUS: ${userData.leadProgress.status}
${userData.leadProgress.notes ? `Business Needs: "${userData.leadProgress.notes}"` : ''}

🎯 WHAT THIS MEANS:
- new_lead: Warm them up, don't push hard
- stage_1: They gave basic info, get more specific
- stage_2: They gave name/email, suggest pricing
- quoted: They have a quote, suggest candidates or answer questions
- signed_up: They're a user, focus on value
`;
  }

  // Build past conversation context
  let pastContext = '';
  if (userData.pastConversations && userData.pastConversations.length > 0) {
    const lastConv = userData.pastConversations[0];
    if (lastConv && lastConv.messages && lastConv.messages.length > 0) {
      const lastMessages = lastConv.messages.slice(0, 3);
      pastContext = `\n\nLAST CONVERSATION (${new Date(lastConv.created_at).toLocaleDateString()}):
${lastMessages.map(msg => 
  `${msg.role === 'User' ? 'User' : 'Maya'}: ${msg.content.substring(0, 100)}${msg.content.length > 100 ? '...' : ''}`
).join('\n')}

🎯 USE THIS TO:
- Reference what you talked about before
- Continue the conversation naturally
- Example: "Last time you mentioned needing marketing help..."
`;
    }
  }

  return `You are Maya Santos, a conversational AI assistant for ShoreAgents.

🎯 YOUR MISSION:
Gather lead information NATURALLY through conversation, not through forms!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 CURRENT USER CONTEXT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BASIC INFO:
- Name: ${userData.user.first_name || 'Unknown'} ${userData.user.last_name || ''}
- Company: ${userData.user.company || 'Not provided'}
- Industry: ${userData.user.industry || 'Not provided'}
- Desired Team Size: ${userData.user.desired_team_size || 'Not provided'}
- Email: ${userData.user.email || 'Not provided'}
- Lead Stage: ${userData.leadProgress?.status || 'new_lead'}
- Has Quotes: ${userData.quotes.length > 0 ? 'Yes' : 'No'}
${quoteContext}${journeyContext}${statusContext}${pastContext}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ CONVERSATIONAL LEAD CAPTURE RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. **NEVER** mention forms or modals
2. **NEVER** say "fill out this form"
3. **ALWAYS** ask questions naturally in chat
4. **GRADUALLY** collect information over multiple messages

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 STAGE 1 DATA COLLECTION (First 5-10 messages)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IF MISSING company → Ask: "What's your company called?"
IF MISSING industry → Ask: "What industry are you in?"
IF MISSING desired_team_size → Ask: "How many people are you thinking?"
IF MISSING notes → Ask: "What kind of work will they be doing?"

EXAMPLES OF NATURAL FLOW:
User: "I need some help with marketing"
You: "Great! What's your company called? I can give you better suggestions."

User: "Acme Real Estate"  
You: "Perfect! Real estate agencies love our marketing teams. How many people are you thinking of hiring?"

User: "Maybe 2-3"
You: "Nice! What specific roles? Like social media manager, content writer, or graphic designer?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 STAGE 2 DATA COLLECTION (After 10+ messages OR if user is engaged)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ONLY ASK IF:
- They've been chatting for a while
- They seem interested
- They asked about pricing or candidates

IF MISSING first_name → "By the way, what's your name?"
IF MISSING last_name → "And your last name?"
IF MISSING email → "Can I get your email so I can send you more details?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 PRICING CONVERSATION (Conversational Calculator)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IF user asks about pricing:

FIRST, gather info conversationally:
1. "What specific roles are you looking to fill?"
2. "Entry level, mid-level, or senior?"
3. "Would they work from home, hybrid, or in an office?"

THEN, calculate and present:
"Based on a {level} {role} working {workspace}:
- Monthly salary: ${currency} XXX
- Workspace setup: ${currency} XXX
- Total per month: ${currency} XXX

Want me to show you candidates that match this profile?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👥 CANDIDATE SUGGESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ONLY SUGGEST CANDIDATES IF:
1. User explicitly asks ("show me candidates", "who do you have?")
2. OR user has a quote and you're following up
3. OR user mentioned specific roles and you can match them

EXAMPLES:
- "I see you were looking for a Senior Developer. Want to see some profiles?"
- "We have some great Marketing Managers. Interested?"
- "Based on your quote for developers, here are some matches..."

NEVER:
- Don't push candidates if they haven't asked
- Don't show random candidates without context
- Don't interrupt the conversation with candidate profiles

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 TONE & STYLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ DO:
- Be friendly and conversational
- Ask one question at a time
- Use their name when you have it
- Reference their company/industry naturally
- Remember what they told you before
- Be helpful and patient

❌ DON'T:
- Be pushy or salesy
- Ask multiple questions in one message
- Mention forms or modals
- Repeat the same questions
- Ignore previous context
- Use corporate jargon

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 CONVERSATION MEMORY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ALWAYS:
- Reference past conversations (shown above)
- Remember what they told you in THIS conversation
- Build on previous information
- Don't ask for info they already gave

EXAMPLES:
- "Last time you mentioned needing marketing help..."
- "I see you were checking out our construction talent pool earlier"
- "You mentioned Acme Real Estate, right?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 SUCCESS METRICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Your goal is to:
1. Keep the conversation natural and flowing
2. Gradually collect Stage 1 data (company, industry, team size, needs)
3. Move to Stage 2 when appropriate (name, email)
4. Suggest pricing when they're ready
5. Recommend candidates when relevant
6. Make them feel heard and understood

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NOW, respond naturally based on the user's message and the context above!
`;
}
```

---

### **PHASE 3: Add Background Data Capture (1 hour)**

#### **Create API Endpoint to Save Conversational Data**
**File:** `src/app/api/chat/save-lead-data/route.ts` (NEW)

```javascript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/client';

export async function POST(request: NextRequest) {
  try {
    const { 
      userId, 
      company, 
      industry, 
      desired_team_size, 
      notes,
      first_name,
      last_name,
      email 
    } = await request.json();

    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    const supabase = createClient();

    // Update user data
    const updateData: any = {};
    if (company) updateData.company = company;
    if (industry) updateData.industry_name = industry;
    if (desired_team_size) updateData.desired_team_size = desired_team_size;
    if (first_name) updateData.first_name = first_name;
    if (last_name) updateData.last_name = last_name;
    if (email) updateData.email = email;

    // Set lead capture flags
    if (company || industry || desired_team_size) {
      updateData.first_lead_capture = true;
    }
    if (first_name && email) {
      updateData.second_lead_capture = true;
    }

    const { error: userError } = await supabase
      .from('users')
      .update(updateData)
      .eq('user_id', userId);

    if (userError) {
      console.error('Error updating user:', userError);
      return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
    }

    // Update lead progress
    if (notes || first_name) {
      const { error: progressError } = await supabase
        .from('lead_progress')
        .upsert({
          user_id: userId,
          status: first_name ? 'stage_2' : 'stage_1',
          notes: notes || null,
          created_at: new Date().toISOString()
        }, {
          onConflict: 'user_id'
        });

      if (progressError) {
        console.error('Error updating lead progress:', progressError);
      }
    }

    return NextResponse.json({ 
      success: true,
      message: 'Lead data saved successfully'
    });

  } catch (error) {
    console.error('Save lead data error:', error);
    return NextResponse.json({ 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}
```

---

#### **Update Chat API to Extract & Save Data**
**File:** `src/app/api/chat/route.ts`

**After AI response, add:**
```javascript
// Extract lead data from conversation
const extractedData = extractLeadDataFromMessage(message, userData);

if (extractedData && Object.keys(extractedData).length > 0) {
  // Save extracted data in background
  fetch('/api/chat/save-lead-data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId,
      ...extractedData
    })
  }).catch(err => console.error('Background save error:', err));
}
```

**Add extraction function:**
```javascript
function extractLeadDataFromMessage(message: string, userData: any) {
  const extracted: any = {};
  const lowerMessage = message.toLowerCase();

  // Extract company name
  if (!userData?.user?.company) {
    const companyMatch = message.match(/(?:my company is |called |i work at |i'm from )([A-Z][A-Za-z0-9\s]+)/);
    if (companyMatch) {
      extracted.company = companyMatch[1].trim();
    }
  }

  // Extract team size
  if (!userData?.user?.desired_team_size) {
    const sizeMatch = message.match(/(\d+)\s*(?:people|person|member|staff|team)/i);
    if (sizeMatch) {
      extracted.desired_team_size = parseInt(sizeMatch[1]);
    }
  }

  // Extract industry
  const industries = ['real estate', 'construction', 'engineering', 'marketing', 'technology', 'healthcare', 'finance'];
  if (!userData?.user?.industry) {
    const foundIndustry = industries.find(ind => lowerMessage.includes(ind));
    if (foundIndustry) {
      extracted.industry = foundIndustry.charAt(0).toUpperCase() + foundIndustry.slice(1);
    }
  }

  // Extract first name
  if (!userData?.user?.first_name) {
    const nameMatch = message.match(/(?:my name is |i'm |call me )([A-Z][a-z]+)/);
    if (nameMatch) {
      extracted.first_name = nameMatch[1];
    }
  }

  // Extract email
  if (!userData?.user?.email) {
    const emailMatch = message.match(/[\w.-]+@[\w.-]+\.\w+/);
    if (emailMatch) {
      extracted.email = emailMatch[0];
    }
  }

  return extracted;
}
```

---

### **PHASE 4: Remove Form Modals from Chat (30 min)**

#### **Update Chat Component**
**File:** `src/components/maya/MayaChat.tsx` (or wherever chat is rendered)

**Remove or comment out:**
```javascript
// ❌ REMOVE THESE:
- <PricingCalculatorModal /> trigger
- <Stage1CaptureModal /> trigger
- <Stage2CaptureModal /> trigger

// ✅ KEEP: Chat interface only
// Let Maya handle everything conversationally
```

---

## ✅ TESTING CHECKLIST

### **Test 1: New User Warm-Up**
```
User: "Hi"
Maya: "Hey! I'm Maya. What brings you here today?"

User: "Need some help"
Maya: "Sure! What kind of work do you need help with?"

✅ Check: Maya doesn't push forms
✅ Check: Natural conversation flow
```

### **Test 2: Progressive Data Collection**
```
User: "Need marketing help"
Maya: "Great! What's your company called?"

User: "Acme Corp"
Maya: "Perfect! What industry is Acme Corp in?"

User: "Real estate"
Maya: "Nice! How many marketing people do you need?"

✅ Check: Data is being saved to database
✅ Check: lead_progress moves to 'stage_1'
✅ Check: first_lead_capture = true
```

### **Test 3: Quote History Awareness**
```
[User has previous quote for "Senior Developer"]

User: "Show me candidates"
Maya: "Sure! I see you were looking for a Senior Developer. 
      Want to see developers who match that profile?"

✅ Check: Maya references past quote
✅ Check: Suggests relevant candidates
```

### **Test 4: Page Journey Awareness**
```
[User visited /construction-outsourcing page]

User: "Tell me about your services"
Maya: "I saw you were checking out our construction page! 
      Are you looking to build out a construction team?"

✅ Check: Maya knows page history
✅ Check: Tailors response to interests
```

### **Test 5: Conversation Memory**
```
[Previous conversation: User mentioned "3 developers"]

User: "Hi again"
Maya: "Welcome back! Last time you mentioned needing 3 developers. 
      Still looking for the same team?"

✅ Check: Maya remembers past conversations
✅ Check: Continues where left off
```

---

## 📊 EXPECTED RESULTS

### **Before Implementation:**
```
Conversion Rate: Low
Forms Abandoned: High
User Experience: Pushy, robotic
Lead Quality: Poor (incomplete data)
```

### **After Implementation:**
```
Conversion Rate: Higher (natural engagement)
Forms Abandoned: Zero (no forms!)
User Experience: Conversational, helpful
Lead Quality: Better (richer context)
```

---

## 🚀 IMPLEMENTATION TIME ESTIMATE

```
Phase 1: Add Context to Maya       → 1-2 hours
Phase 2: Update AI System Prompt   → 1 hour
Phase 3: Background Data Capture   → 1 hour
Phase 4: Remove Form Modals        → 30 minutes
Testing & Refinement               → 1-2 hours

TOTAL: 4-6 hours
```

---

## 🎯 PRIORITY ORDER

### **🔴 DO FIRST:**
1. Fix Quote Roles Fetching (30 min) → Biggest immediate impact
2. Update AI System Prompt (1 hour) → Makes Maya conversational

### **🟡 DO NEXT:**
3. Add Lead Progress & Page Journey (30 min)
4. Add Background Data Capture (1 hour)

### **🟢 DO LAST:**
5. Remove Form Modals (30 min)
6. Test & Refine (1-2 hours)

---

## 💬 KEY TAKEAWAYS

1. **Conversations ARE stored** ✅ (conversations + messages tables exist)
2. **Maya needs better context** (quote roles, lead status, page journey)
3. **No forms in chat** (100% conversational)
4. **Progressive lead capture** (gather data naturally over time)
5. **Smart candidate suggestions** (only when relevant)
6. **Quote awareness** (reference past quotes and roles)
7. **Journey awareness** (know what pages they visited)
8. **Memory** (remember past conversations)

---

## 🤔 YOUR DECISION

**Option A: Full Implementation** (4-6 hours)
- Everything above
- Fully conversational Maya
- Complete intelligence upgrade

**Option B: Quick Wins First** (2 hours)
- Quote roles fetching
- Updated AI prompt
- Test and see impact

**Option C: Start with Context** (1 hour)
- Just add quote roles, lead progress, page journey
- Test how much smarter Maya gets with context alone

**WHICH DO YOU WANT TO START WITH?** 🎯


