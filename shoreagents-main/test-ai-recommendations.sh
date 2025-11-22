#!/bin/bash

echo "🧪 Testing AI Recommendation Engine V2.0"
echo "=========================================="
echo ""

# Test with a mock user ID
USER_ID="test-user-$(date +%s)"

echo "📝 Testing with User ID: $USER_ID"
echo ""

# Make the API call
RESPONSE=$(curl -s -X POST http://localhost:3005/api/ai/recommendations \
  -H "Content-Type: application/json" \
  -d "{\"userId\": \"$USER_ID\"}")

# Check if we got a response
if [ -z "$RESPONSE" ]; then
  echo "❌ No response from API"
  exit 1
fi

# Pretty print the response
echo "📊 API Response:"
echo "$RESPONSE" | jq '.'

# Extract key metrics
SUCCESS=$(echo "$RESPONSE" | jq -r '.success')
REC_COUNT=$(echo "$RESPONSE" | jq -r '.recommendations | length')
HERO_INSIGHT=$(echo "$RESPONSE" | jq -r '.heroInsight')

echo ""
echo "🎯 Results:"
echo "  Success: $SUCCESS"
echo "  Recommendations: $REC_COUNT cards"
echo "  Hero Insight: ${HERO_INSIGHT:0:100}..."
echo ""

# Check if URLs are real (not hallucinated)
echo "🔍 Validating URLs (checking for hallucinations)..."
URLS=$(echo "$RESPONSE" | jq -r '.recommendations[].url' | grep -v null)

if [ -z "$URLS" ]; then
  echo "  ⚠️  No URLs to validate"
else
  for url in $URLS; do
    if [[ $url == http* ]]; then
      # External URL
      echo "  ✅ $url (external)"
    else
      # Internal URL - check if page exists
      STATUS=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3005$url")
      if [ "$STATUS" = "200" ]; then
        echo "  ✅ $url (exists)"
      else
        echo "  ❌ $url (404 - HALLUCINATED!)"
      fi
    fi
  done
fi

echo ""
echo "✨ Test complete!"

