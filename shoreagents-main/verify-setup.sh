#!/bin/bash

# Maya AI Agent Setup Verification Script
# Run this after following the setup steps

echo "🔍 Verifying Maya AI Agent Setup..."
echo ""

# Check if OpenAI API key is set
echo "1️⃣  Checking OpenAI API Key..."
if grep -q "OPENAI_API_KEY" .env.local; then
    echo "   ✅ OpenAI API key found in .env.local"
else
    echo "   ❌ OpenAI API key NOT found in .env.local"
    echo "   Add: OPENAI_API_KEY=sk-..."
    exit 1
fi

# Check if LangChain packages are installed
echo ""
echo "2️⃣  Checking npm packages..."
if [ -d "node_modules/@langchain/openai" ] && [ -d "node_modules/langchain" ]; then
    echo "   ✅ LangChain packages installed"
else
    echo "   ❌ LangChain packages NOT installed"
    echo "   Run: npm install --legacy-peer-deps"
    exit 1
fi

# Check if embedding service exists
echo ""
echo "3️⃣  Checking embedding service..."
if [ -f "src/lib/embedding-service.ts" ]; then
    echo "   ✅ Embedding service created"
else
    echo "   ❌ Embedding service NOT found"
    exit 1
fi

# Check if SQL migration exists
echo ""
echo "4️⃣  Checking SQL migration..."
if [ -f "supabase/migrations/20251119_vector_embeddings.sql" ]; then
    echo "   ✅ SQL migration file exists"
    echo "   ⚠️  Remember to run this in Supabase Dashboard!"
else
    echo "   ❌ SQL migration NOT found"
    exit 1
fi

# Check if Prisma schema is updated
echo ""
echo "5️⃣  Checking Prisma schema..."
if grep -q "KnowledgeEmbedding" prisma/schema.prisma; then
    echo "   ✅ Prisma schema updated with vector models"
else
    echo "   ❌ Prisma schema NOT updated"
    exit 1
fi

# Check if embedding script exists
echo ""
echo "6️⃣  Checking embedding script..."
if [ -f "src/scripts/embed-knowledge-base.ts" ]; then
    echo "   ✅ Knowledge base embedding script created"
else
    echo "   ❌ Embedding script NOT found"
    exit 1
fi

echo ""
echo "════════════════════════════════════════"
echo "✅ ALL FILES VERIFIED!"
echo "════════════════════════════════════════"
echo ""
echo "📋 NEXT STEPS:"
echo ""
echo "1. Run SQL migration in Supabase Dashboard:"
echo "   https://supabase.com/dashboard → SQL Editor"
echo "   → Paste supabase/migrations/20251119_vector_embeddings.sql"
echo ""
echo "2. Regenerate Prisma client:"
echo "   npx prisma generate"
echo ""
echo "3. Embed knowledge base (one-time):"
echo "   npx ts-node src/scripts/embed-knowledge-base.ts"
echo ""
echo "4. Restart dev server:"
echo "   npm run dev"
echo ""
echo "════════════════════════════════════════"

