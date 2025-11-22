# 🚀 ShoreAgents Dashboard - Setup Instructions

## 📋 Prerequisites

Before you start, make sure you have:
- **Node.js 18+** installed ([Download here](https://nodejs.org/))
- **npm** or **yarn** package manager
- **Git** installed
- **Supabase** account (for database)
- Access to the GitHub repository

---

## 🔧 Initial Setup (Fresh Clone)

### 1. Clone the Repository

```bash
# Clone the repo
git clone https://github.com/shoreagents/sa-lead-client-dashboard-main.git

# Navigate to project
cd sa-lead-client-dashboard-main/shoreagents-main

# Switch to your branch (or stay on main)
git checkout stepten-new-pc
```

---

### 2. Install Dependencies

```bash
# Install all npm packages
npm install

# This will install:
# - Next.js 14 (App Router)
# - React 18
# - TypeScript
# - Tailwind CSS
# - Prisma (database ORM)
# - Supabase client
# - Anthropic SDK (for Claude AI)
# - OpenAI SDK (for embeddings)
# - framer-motion (animations)
# - And many more...
```

---

### 3. Environment Variables Setup

Create a `.env.local` file in the `shoreagents-main` directory:

```bash
# Copy the example file
cp .env.example .env.local
```

**Edit `.env.local` and fill in these values:**

```env
# Supabase (Database)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Database URLs (for Prisma)
# Use port 6543 for pooler connection (for queries)
DATABASE_URL="postgresql://postgres.xxxxx:password@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Use port 5432 for direct connection (for migrations)
DIRECT_URL="postgresql://postgres.xxxxx:password@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres"

# AI Services
ANTHROPIC_API_KEY=sk-ant-api03-xxxxx
OPENAI_API_KEY=sk-xxxxx

# BPOC API (for candidate data)
NEXT_PUBLIC_BPOC_API_BASE_URL=https://api.bpoc.com.au/api
NEXT_PUBLIC_BPOC_API_KEY=your-bpoc-api-key

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3005
```

**Where to get these values:**

1. **Supabase Keys**: Go to your Supabase project → Settings → API
2. **Database URLs**: Go to Supabase → Settings → Database → Connection String
3. **Anthropic API Key**: [Get it here](https://console.anthropic.com/)
4. **OpenAI API Key**: [Get it here](https://platform.openai.com/api-keys)
5. **BPOC API**: Ask the BPOC team for credentials

---

### 4. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Sync your local Prisma schema with Supabase
npx prisma db pull

# Generate Prisma client again (to pick up changes)
npx prisma generate
```

**Important Database Notes:**
- The database schema is in `prisma/schema.prisma`
- All migrations are handled in Supabase directly
- Use `npx prisma studio` to view/edit data locally

---

### 5. Generate Content Embeddings (for AI Recommendations)

```bash
# This will:
# - Read all page metadata from page-metadata-config.ts
# - Generate OpenAI embeddings for each page
# - Store embeddings in Supabase (content_embeddings table)
npm run generate-embeddings

# Or manually:
npx tsx scripts/generate-content-embeddings.ts
```

**This is required for:**
- AI-powered content recommendations
- Semantic search in the AI drawer
- Personalized user journey suggestions

---

### 6. Start the Development Server

```bash
# Start on default port (3000)
npm run dev

# Or specify port 3005
PORT=3005 npm run dev
```

The app will be available at:
- **http://localhost:3005** (if using PORT=3005)
- **http://localhost:3000** (default)

---

## 🎯 Key Features & How They Work

### 1. **Anonymous User Tracking**
- Every visitor gets a unique `device_XXX` ID stored in localStorage
- All interactions are tracked: page visits, content views, candidate views, pricing quotes
- Tracked in these tables: `users`, `user_page_visits`, `content_views`, `candidate_views`, `pricing_quotes`

### 2. **AI Recommendation Engine**
- Uses **Claude 3.5 Sonnet** for personalized recommendations
- **Vector Database** (pgvector) for semantic content search
- Analyzes user behavior to suggest next steps
- Located in: `src/app/api/ai/recommendations/route.ts`

### 3. **Pricing Calculator**
- 6-step modular architecture
- Real-time PHP salary estimation using AI
- Currency-aware (AUD, USD, GBP, CAD, NZD, EUR)
- Located in: `src/components/pricing-calculator/`

### 4. **Unified Tracking System**
- All tracking goes through server-side API: `/api/track`
- Prevents client-side Supabase hanging issues
- Supports: page visits, content views, candidate views, pricing quotes, interview requests

### 5. **Lead Capture Funnel**
- **Stage 1**: Industry, Company, Business Goals (tracked in `lead_progress`)
- **Stage 2**: Name, Email (tracked in `lead_progress` and `users`)
- Progressive capture throughout user journey

---

## 📂 Project Structure

```
shoreagents-main/
├── src/
│   ├── app/                          # Next.js 14 App Router
│   │   ├── api/                      # API routes (server-side)
│   │   │   ├── ai/recommendations/   # AI recommendation engine
│   │   │   ├── track/                # Unified tracking endpoint
│   │   │   ├── autocomplete/         # AI industry/role autocomplete
│   │   │   └── ...
│   │   ├── (case-studies)/           # Case study pages (flat URLs)
│   │   ├── (blogs)/                  # Blog pages (flat URLs)
│   │   ├── employee/[id]/            # Candidate profile pages
│   │   └── ...
│   ├── components/
│   │   ├── pricing-calculator/       # Modular pricing calculator
│   │   ├── layout/                   # Layout components (Header, Footer, BottomNav)
│   │   └── ui/                       # Reusable UI components (shadcn/ui)
│   ├── lib/                          # Utility functions & services
│   │   ├── quoteCalculationService.ts      # Real pricing logic
│   │   ├── fixedPricingService.ts          # Fixed pricing tables
│   │   ├── contentVectorService.ts         # Vector DB semantic search
│   │   ├── userEngagementService.ts        # User tracking
│   │   ├── candidateTrackingService.ts     # Candidate tracking
│   │   ├── contentTrackingService.ts       # Content tracking
│   │   └── ...
│   └── ...
├── prisma/
│   └── schema.prisma                 # Database schema
├── scripts/
│   ├── generate-content-embeddings.ts # Generate AI embeddings
│   └── ...
├── public/                           # Static assets (images, videos)
└── ...
```

---

## 🔍 Common Issues & Solutions

### Issue 1: "Can't reach database server"
**Solution:** Check your `DATABASE_URL` and `DIRECT_URL` in `.env.local`. Make sure you're using:
- Port **6543** with `?pgbouncer=true` for `DATABASE_URL`
- Port **5432** for `DIRECT_URL`

### Issue 2: "Module not found: @/..."
**Solution:** Run `npm install` again. TypeScript path aliases are configured in `tsconfig.json`.

### Issue 3: "Prisma Client not generated"
**Solution:** Run `npx prisma generate`.

### Issue 4: "AI recommendations not working"
**Solution:** 
1. Check `ANTHROPIC_API_KEY` in `.env.local`
2. Run `npm run generate-embeddings` to create content embeddings
3. Check console logs in `/api/ai/recommendations/route.ts`

### Issue 5: "Tracking not working"
**Solution:**
1. Check browser console for errors
2. Verify anonymous user is created (check localStorage for `shore_user_id`)
3. Check Supabase `users` table for `device_XXX` entries
4. All tracking uses `/api/track` endpoint - check server logs

---

## 🧪 Testing

### Test AI Recommendations
```bash
# Run the test script
./test-ai-recommendations.sh

# Or manually:
curl http://localhost:3005/api/ai/recommendations
```

### Test Tracking
1. Open browser DevTools → Console
2. Visit any page
3. You should see: `✅ Page visit tracked: /some-page`

### Test Pricing Calculator
1. Open pricing calculator
2. Fill out all 6 steps
3. Check console for detailed quote calculation logs
4. Verify quote is saved in `pricing_quotes` table

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Add all environment variables from `.env.local`
5. Deploy!

**Vercel will automatically:**
- Build your Next.js app
- Set up serverless functions for API routes
- Configure environment variables
- Provide a production URL

---

## 📞 Support

If you get stuck:
1. Check the console logs (both browser and server)
2. Review the documentation files in the repo:
   - `TRACKING_SYSTEM_FIX.md`
   - `AI_RECOMMENDATION_ENGINE_V2.md`
   - `UNIFIED_TRACKING_ARCHITECTURE.md`
3. Check Supabase logs for database errors

---

## 🔥 Quick Start Checklist

- [ ] Clone the repo
- [ ] Run `npm install`
- [ ] Create `.env.local` with all keys
- [ ] Run `npx prisma generate`
- [ ] Run `npm run generate-embeddings`
- [ ] Run `PORT=3005 npm run dev`
- [ ] Open http://localhost:3005
- [ ] Test pricing calculator
- [ ] Check tracking in Supabase

**YOU'RE READY TO GO! 🚀**

