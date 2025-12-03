# 📋 TODO: Train Maya from Sales Calls

**Goal:** Extract knowledge from real sales conversations to make Maya smarter

---

## 🎯 **QUICK REFERENCE:**

**Main Guide:** `TRAINING_MAYA_FROM_SALES_CALLS.md`  
**Knowledge Guide:** `ADD_CUSTOM_KNOWLEDGE_GUIDE.md`  
**Knowledge File:** `src/lib/knowledge-base.ts`

---

## ✅ **STEP-BY-STEP CHECKLIST:**

### **Phase 1: Gather Materials**

- [ ] Collect Zoom transcripts from meetings
- [ ] Get YouTube video transcripts
- [ ] Find audio recordings of sales calls
- [ ] Create folder: `transcripts/sales_calls/`
- [ ] Organize files by date/client type

**Time estimate:** 1-2 hours

---

### **Phase 2: Transcribe Audio** *(if needed)*

If you have audio files without transcripts:

- [ ] Install Whisper: `pip install openai-whisper`
- [ ] Transcribe files: `whisper audio.mp3 --model medium --output_format txt`
- [ ] Save transcripts to `transcripts/` folder
- [ ] Review for accuracy

**Time estimate:** 30 mins setup + 5 mins per recording

---

### **Phase 3: Analyze 5-10 Calls**

Read through transcripts and identify:

- [ ] Common questions prospects ask
- [ ] Objections that come up repeatedly
- [ ] Your responses that work
- [ ] Specific numbers/examples you use
- [ ] What closes deals vs what doesn't

**Create a spreadsheet:**

| Pattern | Your Response | Frequency | Priority |
|---------|---------------|-----------|----------|
| "Too expensive" | [Your response] | 8/10 calls | HIGH |
| "Time zones?" | [Your response] | 6/10 calls | HIGH |
| "Quality?" | [Your response] | 7/10 calls | HIGH |

**Time estimate:** 2-3 hours

---

### **Phase 4: Extract Top 10 Patterns**

Start with highest priority:

- [ ] **Pattern 1:** Price objections
- [ ] **Pattern 2:** Quality concerns  
- [ ] **Pattern 3:** Time zone worries
- [ ] **Pattern 4:** Management questions
- [ ] **Pattern 5:** Competitor comparisons
- [ ] **Pattern 6:** Decision timeline
- [ ] **Pattern 7:** Success stories
- [ ] **Pattern 8:** ROI calculations
- [ ] **Pattern 9:** Guarantees/trials
- [ ] **Pattern 10:** Onboarding process

**Time estimate:** 3-4 hours for 10 items

---

### **Phase 5: Write Knowledge Items**

For each pattern, create detailed knowledge:

```typescript
{
  id: 'unique-id',
  title: 'Pattern Title',
  content: 'Detailed response with specifics, numbers, examples...',
  keywords: ['relevant', 'keywords', 'prospects', 'use'],
  category: 'process'
}
```

**Tips:**
- Include exact numbers you use
- Add real client quotes if available
- Be specific, not vague
- Use language prospects use

**Time estimate:** 20-30 mins per item

---

### **Phase 6: Add to Knowledge Base**

- [ ] Open `src/lib/knowledge-base.ts`
- [ ] Add new items to the array
- [ ] Save file
- [ ] Re-embed: `curl -X POST http://localhost:3000/api/embed-knowledge`
- [ ] Verify count increased

**Time estimate:** 30 mins

---

### **Phase 7: Test Maya**

Test each knowledge item:

- [ ] Ask Maya the objection/question
- [ ] Check if response matches your approach
- [ ] Verify specific numbers are included
- [ ] Test variations of the question
- [ ] Refine if needed

**Example tests:**
- "This seems too expensive"
- "How do I know the quality will be good?"
- "What about the time difference?"

**Time estimate:** 1 hour

---

### **Phase 8: Iterate & Improve**

- [ ] Document what works
- [ ] Note what doesn't work
- [ ] Refine knowledge items
- [ ] Add more edge cases
- [ ] Test with real prospects (if possible)

**Time estimate:** Ongoing

---

## 🎯 **PRIORITY ORDER:**

### **Week 1: Critical Objections**
1. ✅ Price/cost (most common)
2. ✅ Quality concerns
3. ✅ Time zones
4. ✅ Communication

### **Week 2: Deal Closers**
5. ⏳ Success stories
6. ⏳ ROI examples
7. ⏳ Guarantees
8. ⏳ Onboarding

### **Week 3: Differentiation**
9. ⏳ vs Competitors
10. ⏳ Your approach
11. ⏳ Testimonials
12. ⏳ Industry-specific

### **Week 4: Advanced**
13. ⏳ Edge cases
14. ⏳ Complex scenarios
15. ⏳ Rare objections

---

## 🛠️ **TOOLS YOU NEED:**

### **Already Have:**
- ✅ YouTube videos
- ✅ Zoom transcripts
- ✅ Audio recordings

### **Need to Install:**
- [ ] Whisper (for audio transcription)
  ```bash
  pip install openai-whisper
  ```

### **Optional:**
- [ ] Python (for helper scripts)
- [ ] Spreadsheet software (for analysis)

---

## 📊 **TRACKING PROGRESS:**

**Current Status:**
- Knowledge items: 33 (27 basic + 6 custom)
- Sales calls transcribed: 0
- Patterns extracted: 6 (example objections)
- To add: ~20-50 more from your real calls

**Goal:**
- Knowledge items: 50-80
- Covering: All common objections + success stories
- Quality: Detailed, specific, proven responses

---

## 💡 **QUICK WINS:**

Start with these for fastest impact:

1. **Find your best 3 sales calls** (ones that closed)
2. **Extract the 3 objections you overcame**
3. **Write knowledge items for those 3**
4. **Test Maya → See immediate improvement**

**Time:** 2-3 hours for huge impact!

---

## 🚨 **COMMON MISTAKES TO AVOID:**

❌ Being too vague: "We have good service"  
✅ Being specific: "95% retention rate, 30-day guarantee"

❌ No numbers: "We save you money"  
✅ With numbers: "$94K saved per developer per year"

❌ Generic: "We're different"  
✅ Specific: "We handle HR, payroll, legal - you just manage work"

---

## 📝 **NOTES SECTION:**

Use this space to track insights as you work:

```
Date: ___________
Calls reviewed: ___
Patterns found: ___
Knowledge items added: ___
What worked: _______________
What didn't work: _______________
Next steps: _______________
```

---

## 🎯 **COMPLETION CRITERIA:**

You're done when:

- ✅ Transcribed 10+ sales calls
- ✅ Extracted 20+ knowledge items
- ✅ Added to knowledge-base.ts
- ✅ Re-embedded everything
- ✅ Tested with real objections
- ✅ Maya responses match your approach
- ✅ Set up weekly review process

---

## 🔗 **HELPFUL COMMANDS:**

```bash
# Transcribe audio
whisper call.mp3 --model medium --output_format txt

# Re-embed knowledge
curl -X POST http://localhost:3000/api/embed-knowledge

# Check count
curl http://localhost:3000/api/embed-knowledge

# Test Maya
# Open http://localhost:3000 and chat
```

---

## 📅 **SUGGESTED SCHEDULE:**

**Monday (2 hours):**
- Gather all transcripts
- Install Whisper
- Transcribe any audio files

**Tuesday (3 hours):**
- Read through 5-10 transcripts
- Mark patterns and objections
- Create analysis spreadsheet

**Wednesday (4 hours):**
- Write 10 knowledge items
- Focus on high-impact patterns
- Be detailed and specific

**Thursday (1 hour):**
- Add to knowledge-base.ts
- Re-embed
- Test Maya

**Friday (2 hours):**
- Refine based on testing
- Document results
- Plan next batch

**Total:** ~12 hours for massive improvement

---

## ✅ **DONE!**

When complete, Maya will:
- Handle objections like YOU
- Use YOUR proven responses  
- Share YOUR success stories
- Quote YOUR specific numbers
- Sound like YOUR brand

**Your sales expertise, automated!** 🚀

---

## 📚 **REFERENCE:**

- **Full Guide:** `TRAINING_MAYA_FROM_SALES_CALLS.md`
- **Knowledge Guide:** `ADD_CUSTOM_KNOWLEDGE_GUIDE.md`
- **Technical Docs:** `COMPLETE_AI_AGENT_UPGRADE_SUMMARY.md`

