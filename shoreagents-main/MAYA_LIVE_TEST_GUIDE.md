# 🧪 Maya Live Test Guide - Simple & Quick

**Date:** November 19, 2025  
**Goal:** Verify Maya is capturing data conversationally

---

## 🚀 STEP-BY-STEP TEST

### **Step 1: Open Maya Chat**
```
1. Go to http://localhost:3000
2. Click the Maya chat icon (bottom right)
3. Chat should open
```

✅ **If chat opens:** Maya frontend is working!  
❌ **If no chat:** Dev server might not be running

---

### **Step 2: Say Hi & Test Extraction**
```
Type exactly this (one message at a time):

Message 1: "Hi"
Message 2: "I need marketing help"
Message 3: "My company is Test Corp"
Message 4: "We're in real estate"
Message 5: "Need about 3 people"
```

---

### **Step 3: Watch Console Logs**

**Open your terminal where dev server is running.**

You should see logs like this:
```
📝 Extracted company: Test Corp
🎯 Extracted lead data from conversation: { company: 'Test Corp' }
💾 Saving conversational lead data: { userId: '...', company: 'Test Corp' }
✅ User data updated successfully

📝 Extracted industry: Real Estate
🎯 Extracted lead data from conversation: { industry: 'Real Estate' }
💾 Saving conversational lead data: { userId: '...', industry: 'Real Estate' }
✅ User data updated successfully
✅ Lead progress updated to: stage_1

📝 Extracted team size: 3
🎯 Extracted lead data from conversation: { desired_team_size: 3 }
💾 Saving conversational lead data: { userId: '...', desired_team_size: 3 }
✅ User data updated successfully
```

✅ **If you see these logs:** Data extraction is working!  
❌ **If no logs:** Extraction function might not be running

---

### **Step 4: Check Supabase**

**Go to Supabase Dashboard → Table Editor → `users` table**

Look for a row where:
- `company` = "Test Corp"
- `industry_name` = "Real Estate"  
- `desired_team_size` = 3
- `first_lead_capture` = true

✅ **If row exists with this data:** MAYA IS WORKING! 🎉  
❌ **If no row:** Data isn't being saved

---

### **Step 5: Check Lead Progress**

**Supabase Dashboard → Table Editor → `lead_progress` table**

Look for a row where:
- `user_id` = (same as the user from Step 4)
- `status` = "stage_1"
- `notes` = "I need marketing help" (or similar)

✅ **If row exists:** Lead tracking is working! 🎉  
❌ **If no row:** Lead progress not updating

---

### **Step 6: Test Stage 2 (Name/Email)**
```
Continue the conversation:

Message 6: "My name is Stephen"
Message 7: "stephen@test.com"
```

**Check Console:**
```
📝 Extracted first name: Stephen
💾 Saving conversational lead data: { userId: '...', first_name: 'Stephen' }
✅ User data updated successfully

📝 Extracted email: stephen@test.com
💾 Saving conversational lead data: { userId: '...', email: 'stephen@test.com' }
✅ User data updated successfully
✅ Lead progress updated to: stage_2
```

**Check Supabase `users` table:**
- `first_name` = "Stephen"
- `email` = "stephen@test.com"
- `second_lead_capture` = true

**Check Supabase `lead_progress` table:**
- `status` = "stage_2"

✅ **If updated:** Stage 2 is working! 🎉

---

### **Step 7: Test Maya Uses Name**
```
Message 8: "What can you tell me about your services?"
```

**Maya should respond with:**
```
"Hey Stephen! [rest of response]"
or
"Thanks Stephen! [rest of response]"
```

✅ **If Maya uses your name:** Personalization is working! 🎉  
❌ **If Maya doesn't use name:** AI prompt might need adjustment

---

## 📊 QUICK DIAGNOSIS

### **✅ EVERYTHING WORKING IF:**
1. Chat opens ✅
2. Console shows extraction logs ✅
3. Data appears in Supabase `users` table ✅
4. Data appears in `lead_progress` table ✅
5. Maya uses your name after you provide it ✅

### **❌ PROBLEMS IF:**
1. Chat doesn't open → Frontend issue
2. No console logs → Extraction function not running
3. No data in Supabase → API connection issue or permissions
4. Data in users but not lead_progress → lead_progress permissions issue
5. Maya doesn't use name → AI prompt issue

---

## 🚨 COMMON ISSUES & FIXES

### **Issue 1: "Background save error"**
**Symptom:** Console shows error after extraction
**Fix:** Check Supabase permissions on `users` and `lead_progress` tables

---

### **Issue 2: "permission denied for schema public"**
**Symptom:** Error code 42501
**Fix:** Run `FIX_LEAD_PROGRESS_PERMISSIONS.sql` in Supabase SQL Editor

---

### **Issue 3: "column 'notes' does not exist"**
**Symptom:** Error when saving to lead_progress
**Fix:** Run `ADD_LEAD_PROGRESS_NOTES.sql` in Supabase SQL Editor

---

### **Issue 4: "column 'desired_team_size' does not exist"**
**Symptom:** Error when saving team size
**Fix:** Run `ADD_DESIRED_TEAM_SIZE_COLUMN.sql` in Supabase SQL Editor

---

## 🎯 WHAT TO TELL ME

After testing, let me know:

**If Working:** 🎉
```
"Maya is working! I see:
✅ Console logs showing extraction
✅ Data in Supabase users table
✅ Data in lead_progress table
✅ Maya uses my name"
```

**If Not Working:** 🚨
```
"Maya has issues:
❌ [What's not working]
Error message: [paste error from console]"
```

---

## 🚀 READY TO TEST?

1. **Open:** http://localhost:3000
2. **Chat:** Say the test messages above
3. **Watch:** Terminal console logs
4. **Check:** Supabase tables
5. **Report:** What you found!

**GO TEST! 🧪**




