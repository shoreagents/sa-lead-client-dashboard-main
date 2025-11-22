# ⚡ ShoreAgents - QUICK START (5 Minutes)

**Got a new PC? Want to get this running FAST? Follow this!**

---

## 1️⃣ Clone & Install (2 mins)

```bash
# Clone
git clone https://github.com/shoreagents/sa-lead-client-dashboard-main.git
cd sa-lead-client-dashboard-main/shoreagents-main

# Checkout your branch
git checkout stepten-new-pc

# Install
npm install
```

---

## 2️⃣ Setup Environment Variables (1 min)

Create `.env.local`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://iqhttgfoxwufxiwdappq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<GET_FROM_SUPABASE>
SUPABASE_SERVICE_ROLE_KEY=<GET_FROM_SUPABASE>

# Database
DATABASE_URL="postgresql://postgres.xxxxx:<PASSWORD>@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.xxxxx:<PASSWORD>@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres"

# AI
ANTHROPIC_API_KEY=<YOUR_KEY>
OPENAI_API_KEY=<YOUR_KEY>

# BPOC
NEXT_PUBLIC_BPOC_API_BASE_URL=https://api.bpoc.com.au/api
NEXT_PUBLIC_BPOC_API_KEY=<YOUR_KEY>

# App
NEXT_PUBLIC_APP_URL=http://localhost:3005
```

**Get the actual keys from:**
- Supabase: Project Settings → API
- Database URLs: Project Settings → Database → Connection String
- Anthropic: https://console.anthropic.com/
- OpenAI: https://platform.openai.com/api-keys

---

## 3️⃣ Setup Database (1 min)

```bash
npx prisma generate
npx prisma db pull
npx prisma generate
```

---

## 4️⃣ Generate Embeddings (Optional, 1 min)

```bash
# Only needed if you want AI recommendations to work
npm run generate-embeddings
```

---

## 5️⃣ RUN IT! (10 seconds)

```bash
PORT=3005 npm run dev
```

**Open:** http://localhost:3005

---

## ✅ Verify It Works

1. Homepage loads ✅
2. Pricing calculator opens ✅
3. Check browser console - no errors ✅
4. Check Supabase `users` table - you should see a `device_XXX` entry ✅

---

## 🚨 If Shit Breaks

### Database Connection Error
```bash
# Check your DATABASE_URL and DIRECT_URL
# Make sure password is correct
# Port 6543 for DATABASE_URL, port 5432 for DIRECT_URL
```

### "Module not found"
```bash
npm install
```

### Prisma errors
```bash
npx prisma generate
```

### Nothing tracks
- Check `.env.local` has correct Supabase keys
- Check browser console for errors
- Hard refresh (Cmd+Shift+R)

---

## 🔥 THAT'S IT! YOU'RE DONE!

**Total time: 5 minutes**

For detailed docs, see `SETUP_INSTRUCTIONS.md`

