# 🚀 DEPLOY MAYA AI AGENT - DO THESE 4 STEPS NOW!

---

## ✅ **Step 1: Run SQL Migration (2 minutes)**

**Go to:** https://supabase.com/dashboard

1. Select your project
2. Click **SQL Editor** (left sidebar)
3. Click **New Query**
4. Open file: `supabase/migrations/20251119_vector_embeddings.sql`
5. Copy **ALL** contents
6. Paste into SQL Editor
7. Click **Run** (or Cmd/Ctrl + Enter)

**✅ Success if you see:** `Success. No rows returned`

---

## ✅ **Step 2: Regenerate Prisma (30 seconds)**

```bash
cd /Users/stephenatcheler/Documents/GitHub/sa-lead-client-dashboard-main/shoreagents-main
npx prisma generate
```

**✅ Success if you see:** `✔ Generated Prisma Client`

---

## ✅ **Step 3: Embed Knowledge Base (1 minute, ONE-TIME)**

```bash
npx ts-node src/scripts/embed-knowledge-base.ts
```

**✅ Success if you see:** `✨ Knowledge base embedding complete!`

**Cost:** $0.01 (one-time)

---

## ✅ **Step 4: Restart Server (5 seconds)**

```bash
npm run dev
```

---

## 🧪 **TEST IT:**

1. Open Maya chat in browser
2. Ask: **"How much will it cost to hire developers?"**
3. Check terminal logs for: `🔍 Vector search found X relevant articles`
4. Ask: **"Show me candidates"**
5. Should see all 37 candidates from BPOC!

---

## 🐛 **If Something Breaks:**

Run verification:
```bash
./verify-setup.sh
```

---

## 📖 **Full Docs:**

- **COMPLETE_AI_AGENT_UPGRADE_SUMMARY.md** - Everything explained
- **PRISMA_VECTOR_SETUP.md** - Prisma + pgvector guide

---

## 💰 **Monthly Cost:**

- **Low traffic** (100 chats/day): ~$3/month
- **Medium** (500 chats/day): ~$15/month
- **High** (2000 chats/day): ~$60/month

---

## 🎉 **DONE!**

**Maya now has:**
- 🧠 Memory (remembers users)
- 🔍 Semantic search (understands meaning)
- 💾 Learning (saves conversations)
- 🎯 Full candidate access (37 from BPOC)

**Go test and watch the logs!** 🚀

