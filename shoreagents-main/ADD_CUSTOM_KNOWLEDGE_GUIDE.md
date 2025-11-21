# 📚 ADDING CUSTOM KNOWLEDGE TO MAYA - COMPLETE GUIDE

**Make Maya smarter with your own expertise!**

---

## 🎯 **WHAT YOU CAN ADD:**

Maya can learn from ANY text-based knowledge you have:

### **1. Sales & Objection Handling**
- How to handle "too expensive" objections
- Responses to competitor comparisons
- Handling time zone concerns
- Quality assurance questions
- Trial period explanations

### **2. Industry-Specific Knowledge**
- Real estate market trends
- Construction industry insights
- Legal compliance requirements
- Finance best practices
- Marketing strategies

### **3. Your Personal Strategies**
- Your proven sales scripts
- Success stories and case studies
- Client testimonials
- Common FAQ responses
- Onboarding process details

### **4. Company Policies**
- Refund policies
- Trial period terms
- Contract details
- Payment terms
- Service level agreements

### **5. Product/Service Details**
- Specific service offerings
- Pricing tiers and packages
- Team composition options
- Technology stack
- Tools and platforms used

---

## ✅ **HOW TO ADD KNOWLEDGE (3 WAYS):**

### **Method 1: Edit Knowledge Base File (Best for Permanent Knowledge)**

**File:** `src/lib/knowledge-base.ts`

**Add items like this:**

```typescript
{
  id: 'your-unique-id',
  title: 'Title of Knowledge Item',
  content: 'The full text that Maya should know about. Be detailed and specific. Include examples, numbers, and actionable information. The more context, the better Maya can help users.',
  keywords: ['keyword1', 'keyword2', 'related', 'terms'],
  category: 'process' // or 'service', 'company', 'pricing', 'team'
}
```

**Example - Handling Refund Requests:**

```typescript
{
  id: 'refund-policy-detailed',
  title: 'Refund Policy and Guarantees',
  content: 'We offer a 30-day money-back guarantee for all new clients. If you\'re not satisfied with your team member within the first 30 days, we provide a full refund. Our process: 1) Client submits refund request with reason. 2) We conduct exit interview to understand issues. 3) We offer replacement team member (most clients choose this). 4) If client still wants refund, we process within 5-7 business days. Our refund rate is less than 2% because we focus on proper matching and ongoing support. We also offer free replacements anytime if a team member isn\'t working out.',
  keywords: ['refund', 'money back', 'guarantee', 'not satisfied', 'return', 'cancel'],
  category: 'process'
}
```

**After adding, re-embed:**

```bash
curl -X POST http://localhost:3000/api/embed-knowledge
```

---

### **Method 2: Direct API Call (Quick Testing)**

**Use this to test knowledge before adding permanently:**

```bash
curl -X POST http://localhost:3000/api/embed-knowledge \
  -H "Content-Type: application/json" \
  -d '{
    "content": "Your knowledge text here",
    "title": "Knowledge Title",
    "metadata": {"temporary": true}
  }'
```

---

### **Method 3: Bulk Upload from Files (Advanced)**

**Create a script to import from CSV or JSON:**

```typescript
// scripts/import-knowledge.ts
import { batchStoreKnowledge } from '@/lib/embedding-service';
import fs from 'fs';

const knowledgeFromFile = JSON.parse(
  fs.readFileSync('knowledge.json', 'utf-8')
);

await batchStoreKnowledge(knowledgeFromFile);
```

---

## 📝 **KNOWLEDGE WRITING BEST PRACTICES:**

### **1. Be Specific and Detailed**

❌ **Bad:**
```typescript
content: 'We have good customer service.'
```

✅ **Good:**
```typescript
content: 'Our customer service team responds within 2 hours during business hours (8am-6pm PST). For urgent issues, we have a 24/7 emergency hotline. Our average resolution time is 4 hours for technical issues and 24 hours for process questions. We assign each client a dedicated account manager who knows your team and business needs.'
```

### **2. Include Numbers and Specifics**

❌ **Bad:**
```typescript
content: 'We save you money.'
```

✅ **Good:**
```typescript
content: 'Clients save an average of 60-70% compared to US hires. For example, a US full-stack developer costs $100,000/year + $30,000 benefits = $130,000 total. Our Philippine-based developer costs $36,000/year all-inclusive (salary + benefits + HR + payroll). That\'s $94,000 in savings per developer, per year. For a team of 5 developers, annual savings exceed $470,000.'
```

### **3. Add Context and Examples**

❌ **Bad:**
```typescript
content: 'We have developers.'
```

✅ **Good:**
```typescript
content: 'We have 200+ vetted developers across various specializations: Full-stack (React, Node, Python), Frontend (React, Vue, Angular), Backend (Python, Java, .NET), Mobile (React Native, Flutter, Swift), and QA Engineers. Recent placements include: A SaaS startup hired 3 full-stack developers who built their MVP in 4 months. An e-commerce company hired 2 React developers who increased site performance by 40%. All developers have 3-10 years experience and portfolios available for review.'
```

### **4. Answer the "Why" and "How"**

Include:
- Why this matters to the customer
- How it works in practice
- What they can expect
- Common follow-up questions

### **5. Use Keywords Strategically**

Think about how people will ask questions:

```typescript
keywords: [
  'expensive', 'cost', 'price', 'too much', // What they say
  'budget', 'afford', 'roi', 'savings',     // Related concepts
  'worth it', 'value', 'investment'         // How they think
]
```

---

## 🎯 **EXAMPLES OF KNOWLEDGE YOU SHOULD ADD:**

### **Example 1: Competitor Comparison**

```typescript
{
  id: 'competitor-upwork-fiverr',
  title: 'How We Compare to Upwork/Fiverr',
  content: 'Unlike platforms like Upwork or Fiverr where you manage freelancers yourself, we provide fully managed team members. Key differences: 1) Commitment - Our team members are long-term employees (avg 3+ years), not project-based freelancers. 2) Management - We handle all HR, payroll, equipment, and benefits. You just manage the work. 3) Quality - We screen candidates (5% acceptance rate) vs open platforms. 4) Support - Dedicated account manager and replacement guarantee. 5) Legal - Proper employment contracts and IP protection. While Upwork might seem cheaper hourly, the time you spend managing, replacing, and quality-checking costs more. Our clients report 10-15 hours/week saved in management overhead.',
  keywords: ['upwork', 'fiverr', 'freelancer', 'platform', 'vs', 'compare', 'difference', 'better than'],
  category: 'process'
}
```

### **Example 2: Security & Confidentiality**

```typescript
{
  id: 'security-nda-confidentiality',
  title: 'Data Security and Confidentiality',
  content: 'Security is our top priority. All team members sign NDAs and confidentiality agreements before starting. Our measures include: 1) Secure office environment with 24/7 surveillance and restricted access. 2) All computers use encrypted hard drives and VPNs for connections. 3) No USB ports enabled, no phone cameras in work areas. 4) Regular security audits and compliance reviews. 5) SOC 2 Type II compliant infrastructure. 6) Team members cannot take work home or use personal devices. For highly sensitive work, we offer dedicated private offices with additional security. We\'ve never had a data breach in 10 years of operation. Many Fortune 500 companies trust us with their confidential data.',
  keywords: ['security', 'safe', 'confidential', 'nda', 'data protection', 'privacy', 'secure', 'trust'],
  category: 'company'
}
```

### **Example 3: Onboarding Process**

```typescript
{
  id: 'onboarding-process-detailed',
  title: 'Detailed Onboarding Process',
  content: 'Our streamlined onboarding gets team members productive fast. Week 1: Account setup, tools access, introduction calls, initial training on your processes. Week 2: Shadow existing team, practice tasks, regular check-ins. Week 3: Start small projects with supervision. Week 4: Full productivity expected. We provide: 1) Onboarding checklist customized to your role. 2) Daily check-ins first week, then weekly. 3) Training documentation and video walkthroughs. 4) Direct Slack/Zoom access to their US team counterparts. 5) Performance reviews at 30, 60, 90 days. Most clients report team members are 70% productive by week 2, 100% by week 4. We handle all equipment setup, software licenses, and technical issues.',
  keywords: ['onboarding', 'start', 'training', 'how long', 'productive', 'setup', 'process'],
  category: 'process'
}
```

### **Example 4: Your Personal Sales Strategy**

```typescript
{
  id: 'stephen-sales-approach',
  title: 'Stephen\'s Proven Sales Approach',
  content: 'When talking to prospects, I always start with understanding their pain points, not pitching our services. Ask: "What\'s the biggest bottleneck in your business right now?" Common answers: Can\'t find qualified local talent, costs too high, need to scale fast. Then position offshore team as the solution. My framework: 1) Identify pain (5 min) - Ask about their business, current team, challenges. 2) Quantify cost (3 min) - Show specific savings with numbers. 3) Address concerns (10 min) - Usually quality, communication, time zones. 4) Show proof (5 min) - Share similar client success story. 5) Next steps (2 min) - Schedule candidate review or create pricing quote. Don\'t hard sell - educate and consult. Prospects who feel informed close 3x more than those who feel pressured.',
  keywords: ['sales', 'approach', 'pitch', 'strategy', 'convince', 'close', 'sell'],
  category: 'process'
}
```

### **Example 5: Common Mistakes to Avoid**

```typescript
{
  id: 'maya-mistakes-avoid',
  title: 'Mistakes Maya Should Avoid',
  content: 'DO NOT: 1) Promise exact timelines without qualification ("We can start tomorrow" - NO, onboarding takes 1-2 weeks). 2) Guarantee specific candidates without checking availability. 3) Compare us negatively to competitors by name. 4) Share pricing without understanding needs first. 5) Push for commitment too early in conversation. 6) Give discounts without approval. INSTEAD: 1) Set realistic expectations with buffer time. 2) Say "Let me check availability for candidates matching your needs." 3) Focus on our strengths, not others\' weaknesses. 4) Ask qualifying questions before pricing. 5) Build trust through education, not pressure. 6) Explain value to justify full price. Remember: We\'re consultants helping them make the right decision, not salespeople pushing a product.',
  keywords: ['mistakes', 'avoid', 'don\'t', 'never', 'wrong', 'error', 'guidelines'],
  category: 'process'
}
```

---

## 🚀 **AFTER ADDING KNOWLEDGE:**

### **1. Re-embed the Knowledge Base:**

```bash
curl -X POST http://localhost:3000/api/embed-knowledge
```

### **2. Test Maya:**

```bash
# Test objection handling
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"This seems too expensive","userId":"test","conversationHistory":[]}'

# Test competitor comparison
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"How are you different from Upwork?","userId":"test","conversationHistory":[]}'
```

### **3. Verify in Browser:**

- Open http://localhost:3000
- Click Maya chat
- Ask questions that should trigger your new knowledge
- Check if responses include your specific information

---

## 📊 **MONITORING KNOWLEDGE USAGE:**

Check server logs for:

```bash
🔍 Vector search found 3 relevant articles (similarity > 0.75)
```

This shows Maya is finding and using your knowledge!

---

## 🎓 **ADVANCED: KNOWLEDGE CATEGORIES:**

Organize knowledge by category for better context:

### **Category: 'service'**
Use for: Service descriptions, what you offer, capabilities

### **Category: 'company'**
Use for: Company info, team, history, values, culture

### **Category: 'pricing'**
Use for: Pricing models, packages, costs, ROI calculations

### **Category: 'process'**
Use for: How things work, procedures, timelines, steps

### **Category: 'team'**
Use for: Team member profiles, leadership, expertise

---

## ✅ **CHECKLIST FOR ADDING NEW KNOWLEDGE:**

- [ ] Knowledge is detailed and specific (not vague)
- [ ] Includes numbers, examples, and context
- [ ] Answers "why" and "how"
- [ ] Keywords cover all ways people might ask
- [ ] Category is appropriate
- [ ] Unique ID that won't conflict
- [ ] Re-embedded after adding (`curl -X POST /api/embed-knowledge`)
- [ ] Tested with actual queries
- [ ] Verified Maya uses it in responses

---

## 💡 **PRO TIPS:**

### **1. Think Like Your Customers**
What questions do they actually ask? Add knowledge for those specific questions.

### **2. Update Regularly**
As you learn what works in sales conversations, add that knowledge to Maya.

### **3. Use Real Conversations**
Take your best sales calls and extract the key points into knowledge items.

### **4. Test Thoroughly**
Ask Maya questions in different ways to ensure knowledge is being found.

### **5. Be Specific**
"We're fast" → "We onboard team members in 5-10 days on average"

### **6. Include Objection Handling**
For every service/feature, add the common objections and your best responses.

---

## 🎯 **WHAT TO ADD NEXT:**

Prioritize adding knowledge for:

1. ✅ **Most Common Objections** (price, quality, time zones)
2. ✅ **Competitor Comparisons** (Upwork, Fiverr, other agencies)
3. ✅ **Process Questions** (onboarding, security, management)
4. ⏳ **Success Stories** (specific client wins with numbers)
5. ⏳ **Industry-Specific** (real estate, construction, etc.)
6. ⏳ **Your Personal Strategies** (what works for you in sales)

---

## 📚 **CURRENT KNOWLEDGE BASE:**

**Total Articles:** 33
- Company info: 5
- Services: 15
- Process: 7
- Custom (how to handle questions): 6

**To view all knowledge:**
```bash
# Check knowledge-base.ts file
cat src/lib/knowledge-base.ts | grep "id:" | wc -l
```

---

## 🚀 **RESULT:**

With your custom knowledge, Maya will:
- ✅ Handle objections like you would
- ✅ Answer questions with your specific approach
- ✅ Share your proven strategies
- ✅ Stay on-brand and on-message
- ✅ Convert more prospects using YOUR methods

---

**🎓 MAYA LEARNS FROM YOU - ADD YOUR EXPERTISE AND WATCH HER GET SMARTER!**

