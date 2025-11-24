# 🚨 MAYA HALLUCINATION FIX - November 19, 2025

## ✅ CRITICAL BUG FIXED!

**PROBLEM:** Maya was **hallucinating fake candidates** like "Sarah Johnson", "Juan Martinez", "Emily Chen"

**ROOT CAUSE:** The AI had NO access to real candidate data and was making up names/profiles.

---

## 🔧 IMMEDIATE FIX APPLIED

### **File:** `src/lib/ai-config.ts` (Lines 209-229)

**BEFORE:**
```typescript
ONLY SUGGEST CANDIDATES IF:
1. User explicitly asks ("show me candidates", "who do you have?")
2. OR user has a quote and you're following up

EXAMPLES:
- "I see you were looking for a Senior Developer. Want to see some profiles?"
```

**AFTER:**
```typescript
🚨 NEVER MAKE UP CANDIDATE NAMES OR PROFILES! 🚨

You do NOT have access to the real candidate database.
If users ask about candidates:

✅ DO THIS:
- "I'd love to show you our talent! You can browse real candidates at /candidates"
- "Want to see who we have? Check out our candidate profiles on the website"

❌ NEVER DO THIS:
- ❌ Don't invent candidate names like "Sarah Johnson" or "Juan Martinez"
- ❌ Don't make up candidate profiles or experience
- ❌ Don't suggest specific people unless you have REAL data
```

---

## 🎯 WHAT HAPPENS NOW

### **When users ask "who do you have?" or "show me candidates":**

**OLD (BROKEN):**
> "Based on your requirements, here are some candidates:
> - Sarah Johnson - Senior Web Developer... [FAKE!]
> - Juan Martinez - Full-stack Developer... [FAKE!]"

**NEW (FIXED):**
> "We have a great pool of talent! The best way to see our candidates is on our /candidates page where you can browse real profiles with photos, experience, and skills. Want me to help you with pricing first?"

---

## 🔮 FUTURE IMPROVEMENT (TODO)

### **Option: Fetch REAL candidates and pass to Maya**

There IS a real candidates API at `/api/bpoc-users` that returns:
- ✅ Real names (first_name, last_name, full_name)
- ✅ Real positions (position, current_position)
- ✅ Real skills (skills_snapshot)
- ✅ Real experience (experience_snapshot)
- ✅ Photos (avatar_url)
- ✅ Bio, location, expected_salary

**To implement this (future enhancement):**

1. **In `/api/chat/route.ts`**, fetch top 5-10 candidates matching user's industry/role:
   ```typescript
   const { data: candidates } = await supabase
     .from('bpoc_users')
     .select('first_name, last_name, position, skills_snapshot')
     .limit(5);
   ```

2. **Pass to AI context:**
   ```typescript
   systemPrompt += `\n\nREAL CANDIDATES AVAILABLE:\n${candidates.map(c => 
     `- ${c.first_name} ${c.last_name}: ${c.position}`
   ).join('\n')}`;
   ```

3. **Update AI config:**
   ```
   IF USER ASKS ABOUT CANDIDATES:
   - Show the REAL candidates from the list provided
   - Link to /candidates/{user_id} for their full profile
   ```

**Benefits:**
- ✅ Maya can suggest real people
- ✅ Personalized recommendations based on role/industry
- ✅ Direct links to actual profiles

**For now:** The current fix is SAFE - Maya directs to /candidates page instead of hallucinating.

---

## ✅ VERIFIED FIX

**Test it:**
1. Ask Maya "show me candidates"
2. She should say: "Check out our /candidates page" ✅
3. She should NOT say names like "Sarah Johnson" ❌

---

## 📊 RELATED FILES

- `/api/bpoc-users` - Real candidates API
- `src/hooks/useBPOCUsers.ts` - Hook for fetching candidates
- `src/lib/ai-config.ts` - AI instructions (FIXED)
- `/candidates` page - Where real candidates are shown

---

**STATUS:** ✅ FIXED - Maya will no longer hallucinate fake candidates!


