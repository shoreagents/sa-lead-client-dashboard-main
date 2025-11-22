# 🌍 SITE-WIDE TRACKING - HOW IT WORKS

## ✅ YES! Tracking is 100% SITE-WIDE

### **The Magic Component: `<GlobalEngagementTracker />`**

Located in: `src/app/layout.tsx` (line 143)

```tsx
<GlobalEngagementTracker />
```

This component is rendered **ONCE** at the root level, which means:
- ✅ Works on **ALL pages** automatically
- ✅ Tracks **every navigation** (using Next.js `usePathname()`)
- ✅ No need to add tracking code to individual pages
- ✅ Automatically resets tracking when page changes

---

## 🔄 HOW IT WORKS

### **1. User Visits Any Page**
```
User visits /pricing
↓
GlobalEngagementTracker detects pathname change
↓
userEngagementTracker.resetForNewPage('/pricing')
↓
savePageVisit('/pricing', ipAddress, 0) → /api/track
↓
✅ Page visit logged in database
```

### **2. Automatic Tracking**
The tracker automatically monitors:
- ⏱️ **Time spent** on page
- 📜 **Scroll percentage**
- 🖱️ **Button clicks** & interactions
- 👁️ **Tab visibility** changes
- 📱 **Page unload** (when leaving)

### **3. Database Saves**
Tracking is saved to database:
- **On page load** (initial visit with 0 seconds)
- **On page unload** (final save with accumulated time)
- **On navigation** (when moving to another page)

---

## 🧪 WHY YOUR PRICING PAGE ISN'T TRACKING

Let me check the logs and database to diagnose...

### **Possible Issues:**

1. **Browser Console Errors?**
   - Check console for any JavaScript errors
   - Look for "❌" error messages

2. **Anonymous User Not Created?**
   - Check console for: "✅ User created via API: device_xxxxx"
   - If missing, the tracking will fail

3. **API Endpoint Issues?**
   - Check Network tab for failed `/api/track` requests
   - Look for 500 errors or timeouts

4. **Supabase Connection?**
   - Check if `/api/track` endpoint is accessible
   - Verify Prisma connection is working

---

## 🔍 DEBUG STEPS

### **1. Open Browser Console on /pricing page**
Look for these logs in order:

```javascript
// User creation
✅ User created via API: device_xxxxx

// Global tracker
🌍 Global tracker: Starting tracking for: /pricing

// Tracker starts
🚀 Tracker: Starting tracking for page: /pricing

// Page visit saved
📄 [savePageVisit] User: device_xxxxx, Page: /pricing, Time: 0s
✅ [savePageVisit] created: /pricing
```

### **2. Check Network Tab**
Filter for: `track`

You should see:
```
POST /api/track
Status: 200
Response: { "success": true, "action": "created", "data": {...} }
```

### **3. Check Supabase**
Open `user_page_visits` table:
- Should have entry for `/pricing`
- `user_id` should match device ID
- `visit_count` should be 1 (or increment on revisits)

---

## 🐛 COMMON ISSUES & FIXES

### **Issue 1: Server Not Running**
```bash
cd shoreagents-main
npm run dev -- -p 3005
```

### **Issue 2: API Route Not Found (404)**
Check that file exists:
```
src/app/api/track/route.ts
```

### **Issue 3: Prisma Not Connected**
Run in terminal:
```bash
cd shoreagents-main
npx prisma generate
```

### **Issue 4: Anonymous User Not Created**
Check that:
- `<AnonymousUserInitializer />` is uncommented in `layout.tsx` (line 142) ✅
- `/api/test-user-creation` endpoint exists ✅
- Network request to create user succeeds

---

## 📊 WHAT DATA IS TRACKED

### **Every Page Visit Logs:**
```typescript
{
  user_id: "device_ab12cd34",      // Anonymous user fingerprint
  page_path: "/pricing",            // Current page
  visit_count: 2,                   // Number of times visited
  time_spent_seconds: 45,           // Accumulated time on page
  ip_address: "123.456.789.0",     // User's IP (optional)
  visit_timestamp: "2025-11-22...", // First visit time
  last_visit_timestamp: "2025..."   // Most recent visit
}
```

---

## 💡 TO TEST RIGHT NOW

### **1. Clear Everything**
```javascript
// In browser console:
localStorage.clear()
sessionStorage.clear()
```

### **2. Hard Refresh**
```
Cmd+Shift+R (Mac)
Ctrl+Shift+R (Windows)
```

### **3. Navigate to Pricing**
```
Go to: http://localhost:3005/pricing
```

### **4. Watch Console**
Look for the tracking logs mentioned above

### **5. Check Database**
Open Supabase → `user_page_visits` table
You should see a new row for `/pricing`

---

## 🎯 SUMMARY

**Q: Does tracking work on all pages?**
**A: YES! 100% site-wide via `<GlobalEngagementTracker />`**

**Q: Do I need to add code to each page?**
**A: NO! It's automatic for ALL pages**

**Q: Why isn't /pricing showing up?**
**A: Likely an issue with:**
- Server not running
- Anonymous user not created
- Console errors blocking tracking
- Check debug steps above to diagnose

**Q: How do I verify it's working?**
**A: Check browser console for "✅ [savePageVisit]" logs**

---

**The tracking IS site-wide and SHOULD work on /pricing!**
**Let's debug together - send me the console logs from /pricing page! 🔍**

---

Last Updated: 2025-11-22
Status: ✅ SITE-WIDE TRACKING ENABLED

