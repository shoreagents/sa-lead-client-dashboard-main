# 🔐 Admin Access System - Complete Guide

**Created:** November 18, 2025  
**Status:** ✅ Active & Ready

---

## 🚀 Quick Start - Create Your First Admin

### Option 1: Use the Admin Signup Page (Recommended)

1. **Go to:** http://localhost:3000/admin-signup
2. **Fill in the form:**
   - First Name
   - Last Name
   - Email
   - Password (min 8 characters)
   - Confirm Password
   - **Admin Invite Code:** `SHOREAGENTS_ADMIN_2025`
3. **Click "Create Admin Account"**
4. **You'll be redirected to:** http://localhost:3000/admin-login
5. **Login with your credentials**
6. **Access admin dashboard:** http://localhost:3000/admin-dashboard

---

## 🔑 Admin Invite Code

The admin signup page requires a secret invite code to prevent unauthorized admin accounts.

### Current Invite Code:
```
SHOREAGENTS_ADMIN_2025
```

### Change the Invite Code:

**Option A: Environment Variable (Recommended)**
```bash
# Add to .env.local
NEXT_PUBLIC_ADMIN_INVITE_CODE=YOUR_SECRET_CODE_HERE
```

**Option B: Hard-coded (Quick)**
Edit `src/app/admin-signup/page.tsx` line 15:
```typescript
const ADMIN_INVITE_CODE = 'YOUR_SECRET_CODE_HERE'
```

---

## 📋 Admin Pages

### Admin Signup
- **URL:** `/admin-signup`
- **Purpose:** Create new administrator accounts
- **Requires:** Admin invite code
- **Auto-sets:** `user_type: 'Admin'`, `is_admin: true`

### Admin Login
- **URL:** `/admin-login`
- **Purpose:** Sign in to admin dashboard
- **Verifies:** User must have `user_type: 'Admin'`
- **Redirects to:** `/admin-dashboard` on success

### Admin Dashboard
- **URL:** `/admin-dashboard`
- **Protected:** Requires admin authentication
- **Features:** Full admin panel, analytics, user management

---

## 🎯 How It Works

### Signup Flow:
```
1. User visits /admin-signup
2. Enters details + admin invite code
3. System verifies invite code
4. Creates Supabase Auth user
5. Creates users table record with user_type='Admin'
6. Creates admin_users record (if table exists)
7. Redirects to /admin-login
```

### Login Flow:
```
1. User visits /admin-login
2. Enters email + password
3. Supabase authenticates credentials
4. System checks user_type === 'Admin'
5. If admin → redirect to /admin-dashboard
6. If not admin → show error & sign out
```

### Dashboard Access:
```
1. AdminGuard component checks authentication
2. Verifies user_type === 'Admin'
3. If valid → show dashboard
4. If invalid → redirect to /admin-login
```

---

## 👥 Admin Levels

The system supports 3 admin levels:

### 1. **Basic Admin**
```typescript
admin_level: 'basic'
permissions: {
  user_management: false,
  system_settings: false,
  analytics: true,
  billing: false,
  support: true,
  content_management: true
}
```

### 2. **Advanced Admin**
```typescript
admin_level: 'advanced'
permissions: {
  user_management: true,
  system_settings: true,
  analytics: true,
  billing: true,
  support: true,
  content_management: true
}
```

### 3. **Super Admin** (Default for new signups)
```typescript
admin_level: 'super'
permissions: {
  user_management: true,
  system_settings: true,
  analytics: true,
  billing: true,
  support: true,
  content_management: true
}
```

---

## 🗄️ Database Schema

### users Table:
```sql
-- Required fields for admin accounts
user_type: 'Admin'     -- REQUIRED: Must be 'Admin' for admin access
is_admin: true         -- REQUIRED: Admin flag
is_verified: true      -- Auto-verified for admin signups
auth_user_id: uuid     -- Links to Supabase Auth
first_name: string
last_name: string
email: string
created_at: timestamp
updated_at: timestamp
last_login: timestamp  -- Updated on each login
```

### admin_users Table (Optional):
```sql
-- Additional admin-specific data
user_id: uuid          -- Links to users table
admin_level: string    -- 'basic', 'advanced', or 'super'
permissions: jsonb     -- Permission flags
admin_preferences: jsonb  -- Dashboard preferences
created_at: timestamp
updated_at: timestamp
```

---

## 🔧 Configuration

### Environment Variables:
```bash
# .env.local

# Admin Invite Code (change this!)
NEXT_PUBLIC_ADMIN_INVITE_CODE=SHOREAGENTS_ADMIN_2025

# Supabase (already configured)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

---

## ✅ Testing the System

### Test Admin Signup:
```bash
# 1. Go to signup page
open http://localhost:3000/admin-signup

# 2. Fill form with:
First Name: Test
Last Name: Admin
Email: testadmin@shoreagents.com
Password: TestAdmin123!
Invite Code: SHOREAGENTS_ADMIN_2025

# 3. Should create account and redirect to login
```

### Test Admin Login:
```bash
# 1. Go to login page
open http://localhost:3000/admin-login

# 2. Login with credentials from signup

# 3. Should redirect to admin dashboard
open http://localhost:3000/admin-dashboard
```

### Verify in Database:
```sql
-- Check if admin was created properly
SELECT 
  id,
  first_name,
  last_name,
  email,
  user_type,
  is_admin,
  is_verified,
  created_at
FROM users
WHERE email = 'testadmin@shoreagents.com';

-- Should show:
-- user_type: 'Admin'
-- is_admin: true
-- is_verified: true
```

---

## 🚨 Security Notes

### ✅ Good Practices:
- Admin invite code is required for signup
- Passwords must be 8+ characters
- Admin accounts are auto-verified
- Login verifies `user_type === 'Admin'`
- Non-admin users are immediately signed out if they try to access admin pages

### ⚠️ Important:
1. **Change the default invite code** in production
2. **Use environment variables** for the invite code
3. **Don't share** the admin invite code publicly
4. **Monitor** admin account creation
5. **Use strong passwords** for admin accounts

---

## 🔄 Promoting Regular Users to Admin

If you need to upgrade an existing regular user to admin:

### Option 1: SQL Update
```sql
UPDATE users 
SET 
  user_type = 'Admin',
  is_admin = true,
  is_verified = true,
  updated_at = NOW()
WHERE email = 'user@example.com';
```

### Option 2: Admin Dashboard (Future Feature)
- Go to admin dashboard
- Navigate to User Management
- Find user
- Click "Promote to Admin"
- Select admin level

---

## 📱 Mobile Access

Both admin signup and login pages are **fully responsive** and work on:
- Desktop 💻
- Tablet 📱
- Mobile 📱

---

## 🐛 Troubleshooting

### Issue: "Invalid admin invite code"
**Solution:** Check that you're using the correct invite code. Default is `SHOREAGENTS_ADMIN_2025`

### Issue: "Access denied. This account does not have admin privileges."
**Solution:** 
1. Check database: `SELECT user_type FROM users WHERE email = 'your@email.com'`
2. Should be `'Admin'`, not `'Regular'` or `'Anonymous'`
3. Update if needed: `UPDATE users SET user_type = 'Admin', is_admin = true WHERE email = 'your@email.com'`

### Issue: "Redirecting to login but nothing happens"
**Solution:**
1. Clear browser cache
2. Check browser console for errors
3. Verify `/admin-login` page loads
4. Check network tab for API errors

### Issue: "Can't access admin dashboard after login"
**Solution:**
1. Check `AdminGuard` component
2. Verify `useAdminAuth` hook is working
3. Check browser console for auth errors
4. Try signing out and back in

---

## 🎯 Next Steps

### Recommended Enhancements:

1. **Two-Factor Authentication (2FA)**
   - Add SMS or authenticator app 2FA
   - Required for super admin accounts

2. **Admin Activity Logging**
   - Track all admin actions
   - Store in `admin_activity_logs` table
   - Show in dashboard

3. **Email Verification**
   - Send verification email on signup
   - Require email verification before admin access

4. **Password Reset**
   - Add "Forgot Password" link
   - Email reset link
   - Secure token system

5. **Admin Invitation System**
   - Generate unique invite links
   - One-time use codes
   - Expiring invitations

6. **Role-Based Access Control (RBAC)**
   - More granular permissions
   - Department-based access
   - Feature-level permissions

---

## 📞 Support

If you need help with admin access:
1. Check this guide first
2. Review browser console errors
3. Check Supabase database
4. Verify environment variables
5. Contact system administrator

---

**Last Updated:** November 18, 2025  
**Version:** 1.0  
**Status:** ✅ Production Ready

