# 🤖 Content Vector Database Setup Guide

## Overview
This system uses **pgvector** for semantic content recommendations. It stores all website content as vector embeddings, enabling AI-powered recommendations based on user behavior and semantic similarity.

---

## 🎯 Features

- ✅ Semantic content search (no hallucinated URLs!)
- ✅ Industry-aware recommendations
- ✅ Behavior-driven suggestions
- ✅ Automatic categorization (Marketing, Real Estate, SEO, etc.)
- ✅ Smart CTAs based on user journey stage
- ✅ Tracks view counts and recommendation performance

---

## 📊 Architecture

```
User Behavior → Content Views → Semantic Categories
                      ↓
              Vector Embeddings (1536 dimensions)
                      ↓
              Similarity Search (cosine distance)
                      ↓
            Top 10 Similar Content (REAL URLs only)
                      ↓
              Claude AI → Personalized Recommendations
```

---

## 🚀 Setup Instructions

### Step 1: Run the SQL Migration

```bash
# Connect to your Supabase database
psql -h your-db-host -U postgres -d your-database

# Run the migration
\i prisma/migrations/add_content_embeddings.sql
```

### Step 2: Update Prisma Schema

The `ContentEmbedding` model has been added to `schema.prisma`. Generate Prisma client:

```bash
cd shoreagents-main
npx prisma generate
```

### Step 3: Set Environment Variables

Add to `.env`:

```bash
# OpenAI API Key for generating embeddings
OPENAI_API_KEY=sk-your-openai-api-key-here

# Anthropic API Key for Claude recommendations (already set)
ANTHROPIC_API_KEY=sk-ant-your-anthropic-api-key-here
```

### Step 4: Generate Content Embeddings

This script will:
- Read all 68 pages from `page-metadata-config`
- Categorize them semantically
- Generate OpenAI embeddings
- Store in `content_embeddings` table

```bash
# Install dependencies if needed
npm install openai

# Run the embedding generation script
npx ts-node scripts/generate-content-embeddings.ts
```

**Expected output:**
```
🚀 Starting Content Embedding Generation...
📊 Total pages to process: 68

📄 Processing: Real Estate Outsourcing: The $76,600 Reality Check | ShoreAgents
   Path: /real-estate-outsourcing
   Type: sub-pillar
   Categories: real-estate, outsourcing, guide
   🤖 Generating embedding...
   💾 Storing in database...
   ✅ Success! (1/68)

... (continues for all 68 pages)

====================================================================
📊 EMBEDDING GENERATION COMPLETE!
====================================================================
✅ Successfully processed: 68
❌ Errors: 0
📈 Success rate: 100.00%

🎉 Content embeddings are ready for AI recommendations!
```

**Time estimate:** ~2-3 minutes (with rate limiting)

---

## 🧪 Testing the Vector Search

You can test the semantic search directly:

```typescript
import { contentVectorService } from '@/lib/contentVectorService';

// Search for content semantically
const results = await contentVectorService.semanticContentSearch(
  'real estate pricing and cost reduction',
  {
    contentTypes: ['blog', 'case-study'],
    categories: ['real-estate'],
  },
  5
);

console.log('Top matches:', results);
```

---

## 📈 How It Works

### 1. Semantic Categories

Content is automatically categorized into:

**Industries:**
- real-estate, construction, property-management, mortgage, insurance, legal, architectural, engineering

**Services:**
- outsourcing, virtual-assistant, staff-leasing

**Specializations:**
- seo, marketing, accounting, bookkeeping, graphic-design, content-writing, drafting, estimating

**Content Types:**
- guide, case-study, pricing, comparison

### 2. Embedding Generation

Each piece of content is converted to a 1536-dimensional vector using OpenAI's `text-embedding-3-small` model.

### 3. Similarity Search

When a user opens the AI drawer:
1. System analyzes their behavior (pages viewed, candidates viewed, quotes created)
2. Converts behavior to a semantic query
3. Performs vector similarity search (cosine distance)
4. Returns top 10 most relevant content pieces
5. Passes ONLY these real URLs to Claude AI
6. Claude generates personalized recommendations

### 4. Smart Triggers

```typescript
// Examples of smart recommendation logic:

if (user.viewedPricing && !user.hasQuote) {
  → "Get Your Custom Quote" CTA
}

if (user.viewedCandidates >= 3 && !user.hasInterview) {
  → Top candidate + interview CTA
}

if (user.industry === 'real-estate' && user.stage === 'stage_1') {
  → Semantic search: real-estate + guide content
}
```

---

## 🔧 Maintenance

### Adding New Content

When you add new pages to `page-metadata-config.ts`, re-run the embedding generation:

```bash
npx ts-node scripts/generate-content-embeddings.ts
```

The script uses `ON CONFLICT` so it will update existing embeddings and add new ones.

### Monitoring Performance

Track which content is most recommended:

```sql
SELECT 
  title,
  url_path,
  view_count,
  recommendation_count,
  semantic_categories
FROM content_embeddings
ORDER BY recommendation_count DESC
LIMIT 10;
```

---

## 💡 Benefits Over Previous System

| Feature | Old System | New Vector DB System |
|---------|-----------|---------------------|
| URL Accuracy | ❌ Hallucinated URLs | ✅ Only real URLs |
| Content Awareness | ❌ Generic recommendations | ✅ Semantic matching |
| Industry Relevance | ❌ Random content | ✅ Industry-specific |
| Behavior-Driven | ❌ Rule-based | ✅ ML-powered similarity |
| Scalability | ❌ Hardcoded rules | ✅ Learns from data |
| SEO Impact | ❌ Broken links | ✅ Valid internal links |

---

## 🎉 Result

Users now get:
1. **Accurate recommendations** - No more 404s
2. **Relevant content** - Matched to their industry & interests
3. **Smart CTAs** - Based on journey stage
4. **Personalized experience** - Powered by ML + AI

**The AI now truly "knows" your content!** 🧠✨

