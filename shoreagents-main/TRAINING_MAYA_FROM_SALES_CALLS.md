# 🎥 TRAINING MAYA FROM REAL SALES CALLS - COMPLETE GUIDE

**Turn your best sales conversations into Maya's knowledge base!**

---

## 🎯 **WHY THIS IS POWERFUL:**

Your real sales calls contain:
- ✅ Actual objections from real prospects
- ✅ Your proven responses that work
- ✅ Natural conversation flow
- ✅ Industry-specific language
- ✅ Common patterns and questions
- ✅ Successful closing techniques

**This is GOLD for training Maya!**

---

## 📊 **WHAT YOU HAVE:**

| Source | What It Contains | How to Use |
|--------|------------------|------------|
| **YouTube Videos** | Recorded sales calls | Extract transcripts |
| **Zoom Recordings** | Video + transcriptions | Already transcribed! |
| **Audio Recordings** | Call recordings | Need transcription |

---

## 🚀 **STEP-BY-STEP PROCESS:**

### **Step 1: Get Transcriptions**

#### **Option A: Zoom Transcripts (Easiest)**

If Zoom already created transcripts:

1. Download transcript from Zoom meeting
2. File format: `.vtt` or `.txt`
3. Clean up formatting (remove timestamps if needed)

#### **Option B: YouTube Transcripts**

For YouTube videos:

1. Open video on YouTube
2. Click "..." → "Show transcript"
3. Copy all text
4. Paste into a text file

**OR use YouTube API:**
```bash
# Install youtube-transcript-api
pip install youtube-transcript-api

# Get transcript
youtube-transcript-api VIDEO_ID > transcript.txt
```

#### **Option C: Audio File Transcription**

For raw audio files:

**Free Tools:**
- **Whisper by OpenAI** (best quality, free)
- **Otter.ai** (free tier: 600 min/month)
- **Google Cloud Speech-to-Text** ($0.006/15 seconds)

**Using Whisper (Recommended):**
```bash
# Install Whisper
pip install openai-whisper

# Transcribe audio file
whisper sales_call.mp3 --model medium --output_format txt

# Creates: sales_call.txt
```

---

### **Step 2: Analyze the Transcript**

Read through and identify:

1. **Common Questions** - What prospects always ask
2. **Objections** - Price, quality, time, concerns
3. **Your Winning Responses** - What made them buy
4. **Red Flags** - What made them hesitate
5. **Decision Triggers** - What convinced them
6. **Industry Terms** - Specific language they use

**Create a spreadsheet:**

| Question/Objection | Your Response | Outcome | Extract for Maya? |
|-------------------|---------------|---------|-------------------|
| "Too expensive" | "ROI breakdown: $94K saved/year" | Closed | ✅ Yes |
| "Time zones?" | "Work while you sleep, 24/7 coverage" | Moved forward | ✅ Yes |
| "Quality concerns?" | "95% retention, 30-day guarantee" | Still thinking | ✅ Yes |

---

### **Step 3: Extract Knowledge Items**

For each pattern you find, create a knowledge item:

#### **Example 1: From Real Call**

**Transcript snippet:**
```
Prospect: "I'm concerned about managing a team in a different time zone."

You: "I totally understand that concern. Actually, most of our clients find it's an advantage. Your team works while you sleep, so you wake up to completed tasks. We've had clients tell us they love starting their day with progress already made. Plus, we can adjust schedules for 3-4 hours of overlap if you need real-time collaboration. For urgent issues, we use Slack and our team is very responsive. After the first month, most clients say the time difference is one of their favorite parts because it's like having a 24-hour business."

Prospect: "That's actually a good point I hadn't considered."
```

**Convert to knowledge item:**

```typescript
{
  id: 'timezone-advantage-real-example',
  title: 'Time Zone Advantage - Real Client Feedback',
  content: 'When prospects worry about time zones, reframe it as a competitive advantage. Real client feedback: "I love starting my day with progress already made while I was sleeping. It feels like my business runs 24/7." Most clients initially see it as a concern but within 1 month say it\'s their favorite feature. Key benefits: 1) Work continues overnight - tasks done by morning. 2) Faster project completion with round-the-clock productivity. 3) Can still do overlap hours (3-4 hours) for meetings if needed. 4) Emergency support available via Slack. 5) Clients report feeling like they have a 24-hour business. For day-to-day work, async communication actually increases focus and reduces meeting overhead.',
  keywords: ['time zone', 'timezone', 'hours', 'different time', 'sleep', 'overnight', 'availability', 'schedule'],
  category: 'process'
}
```

---

#### **Example 2: Price Objection with Numbers**

**Transcript snippet:**
```
Prospect: "Your pricing is higher than I expected."

You: "Let me break down the actual costs so you can compare apples to apples. A US developer costs about $100K salary plus $30K in benefits, office space, equipment, and HR overhead - that's $130K total. Our Philippine developer is $36K all-in. That's $94K in savings per developer per year. If you hire 3 developers, you're saving $282K annually. Most clients see ROI within 90 days when you factor in faster project completion and no recruiting/training costs."

Prospect: "When you put it that way, it actually seems like a great value."
```

**Convert to knowledge item:**

```typescript
{
  id: 'pricing-roi-calculator-real-numbers',
  title: 'Pricing ROI with Real Client Numbers',
  content: 'When prospects question pricing, show total cost comparison with real numbers that closed deals. US Developer: $100K salary + $20K benefits + $10K office/equipment = $130K/year total. Our Developer: $36K all-inclusive (salary, benefits, HR, payroll, management). Annual savings: $94K per developer. For 3 developers: $282K saved per year. For 5 developers: $470K saved per year. ROI timeline: Most clients break even within 90 days when factoring in: 1) No recruiting costs ($15K average per hire saved). 2) No training period (we onboard, you manage work). 3) Faster project completion with dedicated team. 4) No overhead management. Real example: SaaS client hired 3 developers for $108K/year total. Completed 18-month project in 12 months. Saved $300K+ in year one. Always phrase as "savings" not "cost" - it\'s an investment that pays for itself.',
  keywords: ['expensive', 'cost', 'price', 'too much', 'roi', 'savings', 'value', 'budget', 'worth it', 'investment'],
  category: 'pricing'
}
```

---

#### **Example 3: Quality Assurance**

**Transcript snippet:**
```
Prospect: "How do I know the quality will be good? I've heard horror stories about offshore teams."

You: "Great question. We're very selective - we only hire the top 5% of applicants. Every candidate goes through skills tests, English proficiency checks, and multiple interviews. Our current team retention rate is 95% which tells you clients are happy. We also offer a 30-day trial period with full money-back guarantee. If you're not satisfied, you get a full refund or we find you a different team member. We've only had 2 refund requests in the last 100 placements. We also provide regular performance reviews and direct feedback channels. You'll have their Slack, you can hop on Zoom anytime, it's just like having them in your office."

Prospect: "That's reassuring. The guarantee helps."
```

**Convert to knowledge item:**

```typescript
{
  id: 'quality-assurance-proven-stats',
  title: 'Quality Assurance - Real Statistics',
  content: 'Address quality concerns with specific numbers from real operations. Our screening: Only 5% of applicants are hired after skills tests, English proficiency, and interviews. Current stats: 95% retention rate (industry average is 70%), only 2 refund requests in last 100 placements (2% vs industry 15-20%). Quality guarantees: 1) 30-day money-back guarantee - no questions asked. 2) Free replacement if team member not working out. 3) Regular performance reviews at 30/60/90 days. 4) Direct communication (Slack/Zoom) - no middleman. 5) Dedicated account manager monitors quality. Client testimonial quote: "Our Philippine developer is more productive than our last 2 US hires. Wish we did this sooner." Red flags we screen for: Poor English, inconsistent work history, technical skill gaps, cultural misfit. Every team member has portfolio and references checked.',
  keywords: ['quality', 'qualified', 'good', 'skilled', 'experienced', 'capable', 'competent', 'reliable', 'trustworthy'],
  category: 'process'
}
```

---

### **Step 4: Identify Patterns Across Calls**

After reviewing 5-10 transcripts, you'll see patterns:

**Common Objection Clusters:**
1. **Cost** (appears in 80% of calls)
2. **Quality** (appears in 70% of calls)
3. **Communication** (appears in 60% of calls)
4. **Time zones** (appears in 50% of calls)
5. **Management** (appears in 40% of calls)

**For each cluster, create comprehensive knowledge:**

```typescript
{
  id: 'objection-cluster-cost-comprehensive',
  title: 'Complete Cost Objection Playbook from 50 Sales Calls',
  content: 'After analyzing 50 sales calls, here are the proven responses for cost objections. Initial response: "I understand cost is important. May I ask what budget range you were expecting?" Listen to their number, then: Approach 1 (If they mention $X/hour): "That hourly rate might be for freelancers which includes significant management overhead. Our model includes full-time dedicated team members, managed, with all benefits included. Let me show you total cost comparison..." [Insert full comparison]. Approach 2 (If they say "too expensive"): "I appreciate your directness. Let me make sure we\'re comparing the same thing. Are you looking at total employment cost or just base salary?" [Break down total costs]. Approach 3 (If they mention competitors): "Some services are cheaper upfront but charge for management, replacements, or have hidden fees. Our all-inclusive pricing covers..." [List everything included]. Close: "Would it help if I created a custom ROI analysis for your specific situation?" Success rate: 73% of prospects who raised cost objections closed after seeing ROI breakdown.',
  keywords: ['cost', 'expensive', 'price', 'budget', 'afford', 'too much', 'cheaper', 'roi'],
  category: 'process'
}
```

---

### **Step 5: Extract Success Stories**

Find deals that closed and extract the winning formula:

**Template:**

```typescript
{
  id: 'success-story-[industry]-[use-case]',
  title: '[Industry] Success Story - [Brief Description]',
  content: 'Client: [Industry/size]. Challenge: [What they needed]. Solution: [What we provided]. Results: [Specific numbers and outcomes]. Timeline: [How long]. Quote: "[Real client quote if available]". Key factors for success: [What made it work]. Applicable to: [Similar clients who would benefit].',
  keywords: ['[industry]', 'success', 'case study', 'example', 'results'],
  category: 'company'
}
```

**Real Example:**

```typescript
{
  id: 'success-story-saas-developers',
  title: 'SaaS Startup Saves $300K Year One',
  content: 'Client: B2B SaaS startup with $2M seed funding. Challenge: Needed to build MVP fast without burning through runway. Couldn\'t afford 3 US senior developers at $400K/year total. Solution: Hired 3 Philippine full-stack developers (React, Node.js, AWS) for $108K/year all-in. Results: 1) Launched MVP in 4 months vs projected 12 months with freelancers. 2) Saved $292K in year one vs US hires. 3) Extended runway by 8 months. 4) All 3 developers still with company after 18 months (promoted to lead roles). Timeline: 2 weeks from commitment to first developer starting. Client quote: "Our offshore team is our secret weapon. We execute faster than competitors spending 3x more on local talent." Key success factors: Clear project scope, daily standups, good documentation, treated remote team as core team. Applicable to: Any startup with technical needs and budget constraints.',
  keywords: ['saas', 'startup', 'developers', 'mvp', 'fast', 'save money', 'runway', 'success'],
  category: 'company'
}
```

---

## 🛠️ **TOOLS & SCRIPTS:**

### **Script 1: Transcribe Audio Files**

```bash
#!/bin/bash
# transcribe-calls.sh
# Usage: ./transcribe-calls.sh path/to/audio/files

for file in "$1"/*.{mp3,m4a,wav}; do
    echo "Transcribing: $file"
    whisper "$file" --model medium --output_format txt --output_dir transcripts/
done

echo "✅ All files transcribed to transcripts/ folder"
```

---

### **Script 2: Extract Knowledge Template**

```python
# extract_knowledge.py
# Helps create knowledge items from transcripts

import json

def create_knowledge_item():
    print("\n🎯 KNOWLEDGE ITEM EXTRACTOR")
    print("=" * 50)
    
    id = input("ID (e.g., 'objection-price-2024'): ")
    title = input("Title: ")
    content = input("Content (paste full text): ")
    keywords = input("Keywords (comma-separated): ").split(',')
    category = input("Category (service/company/pricing/process/team): ")
    
    knowledge = {
        "id": id,
        "title": title,
        "content": content.strip(),
        "keywords": [k.strip() for k in keywords],
        "category": category
    }
    
    # Format as TypeScript
    print("\n✅ Copy this into knowledge-base.ts:\n")
    print("{")
    print(f"  id: '{knowledge['id']}',")
    print(f"  title: '{knowledge['title']}',")
    print(f"  content: '{knowledge['content']}',")
    print(f"  keywords: {json.dumps(knowledge['keywords'])},")
    print(f"  category: '{knowledge['category']}'")
    print("},")
    
    # Save to file
    with open(f"knowledge_items/{id}.json", 'w') as f:
        json.dump(knowledge, f, indent=2)
    
    print(f"\n💾 Saved to: knowledge_items/{id}.json")

if __name__ == "__main__":
    create_knowledge_item()
```

---

## 📋 **WORKFLOW CHECKLIST:**

### **Phase 1: Collection (Do First)**
- [ ] Gather all Zoom transcripts
- [ ] Download YouTube video transcripts
- [ ] Transcribe audio files with Whisper
- [ ] Organize into folder: `transcripts/sales_calls/`

### **Phase 2: Analysis (Do Second)**
- [ ] Read through 5-10 transcripts
- [ ] Mark common questions/objections
- [ ] Highlight your winning responses
- [ ] Note specific numbers and examples
- [ ] Identify deal-closing moments

### **Phase 3: Extraction (Do Third)**
- [ ] Create knowledge item for each pattern
- [ ] Write detailed content with specifics
- [ ] Add all relevant keywords
- [ ] Include numbers and examples
- [ ] Categorize appropriately

### **Phase 4: Implementation (Do Fourth)**
- [ ] Add to `knowledge-base.ts`
- [ ] Re-embed: `curl -X POST /api/embed-knowledge`
- [ ] Test Maya with similar questions
- [ ] Verify responses match your approach
- [ ] Iterate based on results

---

## 🎯 **PRIORITIZATION:**

Start with these in order:

### **Week 1: High-Impact Objections**
1. Price/cost objections (most common)
2. Quality concerns
3. Time zone worries
4. Management questions

### **Week 2: Deal Closers**
5. Success stories with numbers
6. ROI calculations
7. Guarantee/trial explanations
8. Onboarding process

### **Week 3: Differentiation**
9. Competitor comparisons
10. Your unique approach
11. Client testimonials
12. Industry-specific knowledge

### **Week 4: Edge Cases**
13. Complex scenarios
14. Rare objections
15. Industry-specific concerns
16. Advanced questions

---

## 💡 **PRO TIPS:**

### **1. Quality Over Quantity**
Better to have 10 detailed knowledge items than 50 vague ones.

### **2. Use Exact Language**
If prospects always say "offshore" not "overseas", use their language.

### **3. Include What Didn't Work**
Learn from failed calls too - what objections you couldn't overcome?

### **4. Update Regularly**
As you refine your pitch, update Maya's knowledge.

### **5. Test Often**
After adding knowledge, test Maya with the same objection to see if response improved.

### **6. Version Control**
Keep notes on what worked: "Added ROI calculator 11/19/24 - increased close rate 15%"

---

## 🎬 **EXAMPLE WORKFLOW:**

**Monday:**
- Transcribe last week's 5 sales calls
- Read through transcripts
- Mark patterns

**Tuesday:**
- Extract 3-5 key objections
- Write detailed knowledge items
- Add numbers and examples

**Wednesday:**
- Add to knowledge-base.ts
- Re-embed knowledge
- Test with sample queries

**Thursday:**
- Refine based on testing
- Add more edge cases
- Update with any new insights

**Friday:**
- Document what worked
- Plan next week's additions
- Review Maya's performance

---

## 📊 **MEASURING SUCCESS:**

Track these metrics:

1. **Before Adding Knowledge:**
   - Maya's objection handling score: ___/10
   - Number of follow-up questions: ___
   - Prospect satisfaction: ___/10

2. **After Adding Knowledge:**
   - Maya's objection handling score: ___/10
   - Number of follow-up questions: ___
   - Prospect satisfaction: ___/10

**Goal:** Improve scores by 20%+ with each knowledge update.

---

## 🚀 **QUICK START:**

```bash
# 1. Create folders
mkdir -p transcripts/sales_calls
mkdir -p knowledge_items

# 2. Transcribe an audio file
whisper path/to/call.mp3 --model medium --output_format txt

# 3. Read transcript and extract patterns

# 4. Add to knowledge-base.ts (see examples above)

# 5. Re-embed
curl -X POST http://localhost:3000/api/embed-knowledge

# 6. Test Maya in browser
```

---

## 📚 **RESOURCES:**

### **Transcription Tools:**
- **Whisper (OpenAI):** https://github.com/openai/whisper
- **Otter.ai:** https://otter.ai
- **Rev.com:** https://www.rev.com (paid, human transcription)

### **Analysis Tools:**
- **Gong.io:** AI call analysis (expensive)
- **Chorus.ai:** Sales call intelligence (expensive)
- **DIY:** Spreadsheet + manual analysis (free, works great)

### **Knowledge Management:**
- Use `knowledge-base.ts` for source of truth
- Keep notes in `SALES_INSIGHTS.md`
- Version control with git

---

## ✅ **FINAL CHECKLIST:**

Before considering this "done":

- [ ] Transcribed 10+ sales calls
- [ ] Extracted 20+ knowledge items
- [ ] Added to knowledge-base.ts
- [ ] Re-embedded all knowledge
- [ ] Tested Maya with real objections
- [ ] Verified responses match your approach
- [ ] Documented what worked
- [ ] Set up regular review process

---

## 🎯 **EXPECTED OUTCOME:**

**After completing this process:**

Maya will:
- ✅ Handle objections like YOU do
- ✅ Use YOUR proven responses
- ✅ Share YOUR success stories
- ✅ Quote YOUR specific numbers
- ✅ Sound like YOUR brand voice
- ✅ Convert prospects using YOUR methods

**This is how you clone your sales expertise into AI!**

---

## 📝 **NEXT STEPS:**

1. **This Week:** Transcribe 3-5 of your best calls
2. **Next Week:** Extract patterns and create knowledge items
3. **Following Week:** Test and refine based on results
4. **Ongoing:** Add 2-3 new items per week from new calls

---

**🎥 YOUR SALES CALLS ARE YOUR BEST TRAINING DATA - LET'S PUT THEM TO WORK!**

---

## 🔗 **RELATED DOCS:**

- `ADD_CUSTOM_KNOWLEDGE_GUIDE.md` - How to write knowledge items
- `MAYA_AI_AGENT_PHASE1_2.md` - Technical setup
- `COMPLETE_AI_AGENT_UPGRADE_SUMMARY.md` - Full system overview

