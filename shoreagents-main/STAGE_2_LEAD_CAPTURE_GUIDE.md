# 📋 Stage 2 Lead Capture System - Complete Guide

## 🎯 Overview

A **separate Stage 2 form** has been implemented to capture contact information (email, first name, last name) from leads who filled out Stage 1 but haven't completed a quote.

---

## 🔄 The Complete Lead Flow

### **Scenario 1: Form-Only Path**
1. ✅ **Stage 1 Form** (45s popup) → Captures: Industry, Company, Team Size, Business Needs
2. ⏰ **Wait 3 minutes**
3. ✅ **Stage 2 Form** (auto-trigger) → Captures: Email, First Name, Last Name
4. 🎉 **Lead now in Stage 2** with full contact info

### **Scenario 2: Direct Quote Path**
1. 💰 User clicks "Get Quote" → Completes entire pricing calculator
2. ✅ **Both Stage 1 & 2 data captured** from quote
3. ❌ **No popups shown** (already have all data!)
4. 🎉 **Lead moved to Stage 2** automatically

### **Scenario 3: Abandoned Quote**
1. 💰 User starts quote → Fills some info → Stage 1 data saved
2. 🚫 **Abandons quote** at step 2 or 3
3. ⏰ **2-3 minutes later** → Stage 2 form pops up
4. ✅ **Captures contact info** → Lead now in Stage 2

### **Scenario 4: Form 1 → Quote**
1. ✅ Fills Stage 1 form
2. 💰 Starts quote → **Pre-fills** with Stage 1 data
3. ✅ Completes quote → Stage 2 data captured
4. ❌ **Stage 2 popup never shows** (got data from quote!)

---

## 🛠️ What Was Built

### **1. Database Changes**

#### **Added `notes` column to `lead_progress` table:**
```sql
ALTER TABLE public.lead_progress 
ADD COLUMN IF NOT EXISTS notes TEXT;
```

**Purpose:** Store business needs messages from Stage 1 form

**Run this SQL:** `ADD_LEAD_PROGRESS_NOTES.sql`

---

### **2. Stage 1 Form Enhanced**

#### **File:** `src/app/api/anonymous-user-inquiry/route.ts`

**What changed:**
- Now extracts `message` field from request body
- Saves message to `lead_progress.notes` when upserting to Stage 1
- Logs when business needs message is saved

**Example log output:**
```
📋 Anonymous user inquiry - Received data: {
  user_id: 'device_xxxxx',
  industry: 'Real Estate Agency',
  company: 'ABC Corp',
  employeeCount: '3',
  message: 'We need help with property management tasks...'
}
💬 Saving business needs message to lead_progress.notes
✅ Business needs message saved successfully
```

---

### **3. Stage 2 Form Component**

#### **File:** `src/components/ui/stage-2-capture-modal.tsx`

**What it captures:**
- ✅ First Name (required)
- ✅ Last Name (required)
- ✅ Email (required, validated)

**Features:**
- 🎨 Clean, modern UI with Sparkles icon
- 🔒 Trust indicator ("Your information is secure")
- 🚫 "Maybe Later" button (dismissable)
- ✨ "Get My Quote" CTA button

---

### **4. Stage 2 API Route**

#### **File:** `src/app/api/stage-2-capture/route.ts`

**What it does:**
1. Receives: `user_id`, `firstName`, `lastName`, `email`
2. Updates `users` table with contact info
3. Sets `second_lead_capture = true`
4. Updates `lead_progress` to `status = 'stage_2'`

**Example log output:**
```
📋 Stage 2 capture - Received data: {
  user_id: 'device_xxxxx',
  firstName: 'John',
  lastName: 'Smith',
  email: 'joh***'
}
💾 Updating user record with Stage 2 contact data
📊 Updating lead progress to stage_2 for user: device_xxxxx
✅ Lead progress updated to stage_2
```

---

### **5. Stage 2 Trigger Logic**

#### **File:** `src/components/ui/stage-2-capture-button.tsx`

**Trigger conditions:**
- ✅ User is **anonymous** (not logged in)
- ✅ User has filled **Stage 1** (`hasFilledForm = true`)
- ❌ User has **NOT** filled Stage 2 yet (no email/name)
- ⏰ **3 minutes** have passed since page load

**Smart logic:**
- Checks database for existing contact info
- Won't show if user already completed Stage 2
- Won't show if user hasn't done Stage 1 yet
- Countdown logs every 30 seconds

**Integrated in:** `src/app/layout.tsx` (line 76)

---

## 🧪 Testing Guide

### **Test 1: Stage 1 → Stage 2 Flow**

1. **Clear browser data** (or use Incognito)
2. **Visit:** `http://localhost:3003`
3. **Wait 45 seconds** → Stage 1 form appears
4. **Fill Stage 1:**
   - Industry: "Real Estate Agency"
   - Team Size: "3"
   - Company: "Test Company"
   - Business Needs: "We need virtual assistants for property management"
5. **Submit** → Check terminal logs for:
   ```
   📊 Updating lead progress to stage_1
   💬 Saving business needs message to lead_progress.notes
   ✅ Business needs message saved successfully
   ```
6. **Wait 3 minutes** → Stage 2 form appears
7. **Fill Stage 2:**
   - First Name: "John"
   - Last Name: "Smith"
   - Email: "john.smith@test.com"
8. **Submit** → Check terminal logs for:
   ```
   📊 Updating lead progress to stage_2
   ✅ Lead progress updated to stage_2
   ```
9. **Check Admin Dashboard** → Lead should be in "Stage 2" column

---

### **Test 2: Direct Quote Path**

1. **Clear browser data**
2. **Visit:** `http://localhost:3003`
3. **Immediately click** "Get Quote" (don't wait for popups)
4. **Complete entire quote** (all 5 steps)
5. **Result:**
   - ✅ Lead moved to Stage 2
   - ❌ No Stage 1 or Stage 2 popups shown
   - ✅ All data captured from quote

---

### **Test 3: Abandoned Quote**

1. **Clear browser data**
2. **Visit:** `http://localhost:3003`
3. **Click** "Get Quote"
4. **Fill Step 1 & 2** of pricing calculator
5. **Close the modal** (abandon it)
6. **Wait 3 minutes** → Stage 2 form should appear
7. **Fill Stage 2** → Lead moved to Stage 2

---

## 📊 Database Schema

### **lead_progress table:**
```sql
CREATE TABLE public.lead_progress (
  id UUID PRIMARY KEY,
  user_id VARCHAR(255) UNIQUE NOT NULL,
  status VARCHAR(50) NOT NULL,          -- 'stage_1', 'stage_2', 'signed_up', etc.
  previous_status VARCHAR(50),
  changed_by VARCHAR(255),
  change_reason VARCHAR(500),
  notes TEXT,                           -- ✨ NEW: Business needs message
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### **users table relevant fields:**
```sql
-- Stage 1 data:
industry_name VARCHAR(200)
company VARCHAR(200)
desired_team_size INT
first_lead_capture BOOLEAN DEFAULT FALSE

-- Stage 2 data:
first_name VARCHAR(100)
last_name VARCHAR(100)
email VARCHAR(255)
second_lead_capture BOOLEAN DEFAULT FALSE
```

---

## 🚀 Deployment Checklist

1. ✅ Run SQL migration: `ADD_LEAD_PROGRESS_NOTES.sql` in Supabase
2. ✅ Verify `lead_progress.notes` column exists
3. ✅ Run `npx prisma generate` to update Prisma client
4. ✅ Test Stage 1 form → Check notes are saved
5. ✅ Test Stage 2 form → Check contact info is saved
6. ✅ Test abandoned quote → Check Stage 2 triggers
7. ✅ Check Admin Dashboard → Verify lead statuses are correct

---

## 🐛 Troubleshooting

### **Stage 2 form not appearing?**
**Check logs:**
```
🔍 Stage2CaptureButton useEffect triggered
📊 Database check result: { hasFilledForm: true, email: null }
✅ User has filled Stage 1 but not Stage 2, starting countdown...
```

**Common issues:**
- User already has email/name in database
- User hasn't filled Stage 1 yet
- User is logged in (Stage 2 only for anonymous)

### **Business needs not saving?**
**Check logs:**
```
💬 Saving business needs message to lead_progress.notes
✅ Business needs message saved successfully
```

**If not appearing:**
- Check `message` field is in request body
- Verify `lead_progress.notes` column exists
- Check Supabase permissions for `lead_progress` table

---

## 📝 Summary

✅ **Stage 1:** Industry, Company, Team Size, Business Needs (Message)
✅ **Stage 2:** First Name, Last Name, Email
✅ **Trigger:** 3 minutes after Stage 1, only if no Stage 2 data yet
✅ **Smart:** Won't show if quote completed or user has contact info
✅ **Persistent:** All data saved to database, tied to device ID

**NO PHONE CALLS, NO CALENDAR BOOKING, CLEAN & SIMPLE!** 🎯

