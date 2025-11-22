# PRISMA + PGVECTOR SETUP GUIDE 🔧

**The Right Way to Keep Everything In Sync**

---

## 🎯 **THE APPROACH:**

Since Prisma doesn't fully support `VECTOR` types, we're using a **HYBRID** approach:

1. ✅ Run SQL migration directly (creates tables with vector columns)
2. ✅ Add models to Prisma schema (with `Unsupported` type for vectors)
3. ✅ Regenerate Prisma client (gets TypeScript types)
4. ✅ Use raw SQL for vector operations, Prisma for everything else

---

## 📝 **STEP-BY-STEP INSTRUCTIONS:**

### **Step 1: Run the SQL Migration First**

**Option A: Using Supabase Dashboard (Easiest)**

1. Go to: https://supabase.com/dashboard
2. Select your project
3. Click **SQL Editor** (left sidebar)
4. Click **New Query**
5. Copy/paste the ENTIRE contents of:
   ```
   supabase/migrations/20251119_vector_embeddings.sql
   ```
6. Click **Run** (or press Cmd/Ctrl + Enter)

**Expected Success Message:**
```
Success. No rows returned
```

**What This Does:**
- ✅ Enables `pgvector` extension
- ✅ Creates `knowledge_embeddings` table
- ✅ Creates `conversation_memory` table
- ✅ Creates vector indexes (for fast search)
- ✅ Creates search functions (`match_knowledge`, `match_memories`)

---

**Option B: Using Supabase CLI (If You Have It)**

```bash
cd /Users/stephenatcheler/Documents/GitHub/sa-lead-client-dashboard-main/shoreagents-main

# Push migration to Supabase
supabase db push
```

---

### **Step 2: Verify Tables Were Created**

**In Supabase Dashboard:**
1. Go to **Table Editor**
2. You should see 2 new tables:
   - `knowledge_embeddings`
   - `conversation_memory`
3. Click on each table and verify columns exist

---

### **Step 3: Regenerate Prisma Client**

**This gives you TypeScript types for the new tables!**

```bash
cd /Users/stephenatcheler/Documents/GitHub/sa-lead-client-dashboard-main/shoreagents-main

# Generate Prisma client with updated schema
npx prisma generate
```

**Expected Output:**
```
✔ Generated Prisma Client (v5.x.x) to ./node_modules/@prisma/client in 123ms

✨ 2 new models added:
  - KnowledgeEmbedding
  - ConversationMemory
```

**What This Does:**
- ✅ Updates `@prisma/client` with new TypeScript types
- ✅ You can now use `prisma.knowledgeEmbedding` in your code
- ✅ Full autocomplete and type safety (except for the `embedding` field)

---

### **Step 4: Verify Everything Is In Sync**

```bash
# Check if Prisma schema matches database
npx prisma db pull

# This should say "No changes detected" or minor formatting changes
```

If it detects major changes, something went wrong!

---

## 💻 **HOW TO USE IN CODE:**

### **✅ CORRECT: Using Prisma for Non-Vector Operations**

```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Insert knowledge (without embedding) - WORKS
await prisma.knowledgeEmbedding.create({
  data: {
    content: "ShoreAgents provides offshore teams",
    title: "About Us",
    url: "/about",
    metadata: { category: "company" }
  }
});

// Get all knowledge articles - WORKS
const articles = await prisma.knowledgeEmbedding.findMany({
  select: {
    id: true,
    title: true,
    content: true,
    url: true
    // Note: Don't select 'embedding' - it's Unsupported type
  }
});

// Get memory by ID - WORKS
const memory = await prisma.conversationMemory.findUnique({
  where: { id: memoryId },
  select: {
    id: true,
    user_id: true,
    memory_type: true,
    content: true,
    importance_score: true
  }
});
```

---

### **❌ WRONG: Trying to Use Prisma for Vector Operations**

```typescript
// DON'T DO THIS - Won't work with Unsupported type
await prisma.knowledgeEmbedding.create({
  data: {
    content: "...",
    embedding: [0.1, 0.2, 0.3, ...] // ❌ ERROR! Unsupported type
  }
});
```

---

### **✅ CORRECT: Use Raw SQL for Vector Operations**

```typescript
import { createClient } from '@/lib/supabase/client';

const supabase = createClient();

// Insert with embedding - USE RAW SQL or embedding-service.ts
import { storeKnowledgeWithEmbedding } from '@/lib/embedding-service';

await storeKnowledgeWithEmbedding(
  "Content here",
  "Title here",
  "https://url.com"
);

// Search with embeddings - USE the helper functions
import { searchKnowledgeWithEmbeddings } from '@/lib/embedding-service';

const results = await searchKnowledgeWithEmbeddings(
  "How much does it cost?",
  { matchThreshold: 0.78, matchCount: 5 }
);
```

---

## 🔍 **WHAT EACH TOOL DOES:**

| Operation | Use | Example |
|-----------|-----|---------|
| **Read data** | Prisma ✅ | `prisma.knowledgeEmbedding.findMany()` |
| **Insert (no vector)** | Prisma ✅ | `prisma.conversationMemory.create()` |
| **Update (no vector)** | Prisma ✅ | `prisma.knowledgeEmbedding.update()` |
| **Delete** | Prisma ✅ | `prisma.conversationMemory.delete()` |
| **Insert with embedding** | Raw SQL/Helper ⚠️ | `storeKnowledgeWithEmbedding()` |
| **Vector search** | Raw SQL/Helper ⚠️ | `searchKnowledgeWithEmbeddings()` |
| **Vector similarity** | Raw SQL/Helper ⚠️ | `supabase.rpc('match_knowledge')` |

---

## 📊 **PRISMA SCHEMA CHANGES:**

**We Added:**

```prisma
// NEW: Knowledge embeddings table
model KnowledgeEmbedding {
  id         String                    @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  content    String
  title      String?
  url        String?
  embedding  Unsupported("vector(1536)")? // ⚠️ Can't query directly in Prisma
  metadata   Json?
  created_at DateTime                  @default(now()) @db.Timestamptz(6)
  updated_at DateTime                  @default(now()) @db.Timestamptz(6)

  @@map("knowledge_embeddings")
}

// NEW: Conversation memory table
model ConversationMemory {
  id                String                    @id
  user_id           String
  conversation_id   String?
  memory_type       MemoryType
  content           Json
  embedding         Unsupported("vector(1536)")? // ⚠️ Can't query directly in Prisma
  importance_score  Int                       @default(5)
  created_at        DateTime                  @default(now())
  expires_at        DateTime?
  metadata          Json?

  @@map("conversation_memory")
}

// NEW: Memory type enum
enum MemoryType {
  summary
  entity
  buffer
  vector
}
```

**Why `Unsupported("vector(1536)")`?**
- Prisma doesn't understand `VECTOR` type (yet)
- Using `Unsupported` tells Prisma "this column exists, but don't try to use it"
- You get type safety for other fields
- Use raw SQL for vector operations

---

## ⚠️ **IMPORTANT NOTES:**

### **1. Don't Select `embedding` Field in Prisma**

```typescript
// ❌ BAD - Will cause errors
const knowledge = await prisma.knowledgeEmbedding.findMany({
  select: { embedding: true }
});

// ✅ GOOD - Omit embedding field
const knowledge = await prisma.knowledgeEmbedding.findMany({
  select: {
    id: true,
    content: true,
    title: true
  }
});
```

---

### **2. Use Helper Functions for Vector Operations**

We already created these for you in `src/lib/embedding-service.ts`:

- ✅ `generateEmbedding(text)` - Create embedding
- ✅ `searchKnowledgeWithEmbeddings(query)` - Semantic search
- ✅ `storeKnowledgeWithEmbedding(...)` - Insert with embedding
- ✅ `searchMemories(userId, query)` - Search conversation memories
- ✅ `storeMemory(...)` - Store memory with embedding

**USE THESE** instead of direct Prisma calls!

---

### **3. Migration Order Matters**

**ALWAYS:**
1. Run SQL migration FIRST ⬆️
2. Update Prisma schema ⬆️
3. Generate Prisma client ⬆️
4. Use in code ⬆️

**NEVER:**
1. ❌ Update Prisma schema first
2. ❌ Run `prisma db push` (it doesn't support vector types)
3. ❌ Try to create vector columns through Prisma

---

## 🚀 **QUICK START COMMANDS:**

```bash
# 1. Run SQL migration (choose one):
# - Option A: Supabase Dashboard (recommended)
# - Option B: Supabase CLI: supabase db push

# 2. Regenerate Prisma client
cd /Users/stephenatcheler/Documents/GitHub/sa-lead-client-dashboard-main/shoreagents-main
npx prisma generate

# 3. Verify sync
npx prisma db pull

# 4. Embed knowledge base (one-time)
npx ts-node src/scripts/embed-knowledge-base.ts

# 5. Restart dev server
npm run dev
```

---

## ✅ **VERIFICATION CHECKLIST:**

After running the commands:

- [ ] SQL migration executed in Supabase (no errors)
- [ ] Tables visible in Supabase Table Editor
- [ ] Prisma client regenerated (`npx prisma generate`)
- [ ] No TypeScript errors in VSCode
- [ ] Knowledge base embedded (42 articles)
- [ ] Dev server running (no console errors)

---

## 🐛 **TROUBLESHOOTING:**

### **Issue: "Table knowledge_embeddings does not exist"**
**Solution:** Run SQL migration first in Supabase Dashboard

### **Issue: "Type 'Unsupported' is not assignable"**
**Solution:** Don't select or use the `embedding` field directly in Prisma

### **Issue: "prisma.knowledgeEmbedding is not defined"**
**Solution:** Run `npx prisma generate` to regenerate client

### **Issue: "Enum 'MemoryType' does not exist"**
**Solution:** SQL migration creates the enum. Run migration first.

---

## 📚 **REFERENCES:**

- **Prisma Unsupported Types:** https://www.prisma.io/docs/concepts/components/prisma-schema/data-model#unsupported-types
- **pgvector Docs:** https://github.com/pgvector/pgvector
- **Supabase pgvector:** https://supabase.com/docs/guides/ai/vector-columns

---

**✨ EVERYTHING IS NOW IN SYNC! Prisma manages what it can, SQL handles vectors!**

