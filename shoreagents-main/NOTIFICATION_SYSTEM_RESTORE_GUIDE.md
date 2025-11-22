# 🔔 Notification System - Restoration Guide

**Status:** Removed from `stephen-cleanup-migration` branch  
**Original Location:** `main` branch  
**Date Documented:** November 18, 2025

---

## 📋 Overview

The notification system was a **real-time alert system** built with **Socket.io** for admin dashboard notifications. It was working on the `main` branch but was removed during cleanup/refactoring.

### Purpose:
- Real-time admin alerts for important events
- User-specific notifications
- WebSocket-based live updates
- Toast notifications for new alerts
- Bell icon with unread count badge

---

## 🏗️ System Architecture

### Backend Components:

#### 1. Socket.io Server (`src/lib/socket-server.ts`)
- Initializes Socket.io server on HTTP server
- Manages connection rooms:
  - `admin-notifications` - Admin-wide notifications
  - `user-{userId}` - User-specific notifications
- Events: `join-admin-room`, `join-user-room`, `leave-user-room`

#### 2. Notification Emitter (`src/lib/emit-notification.ts`)
- Helper functions to emit notifications:
  - `emitNotification()` - Send new notification
  - `emitNotificationUpdate()` - Update existing notification
  - `emitNotificationDelete()` - Delete notification
- Accesses global `io` instance from Socket.io server

#### 3. API Routes:
- **GET** `/api/admin/notifications` - Fetch all notifications (paginated, filter by unread)
- **POST** `/api/admin/notifications` - Create new notification
- **POST** `/api/admin/notifications/[id]/read` - Mark notification as read
- **POST** `/api/admin/notifications/read-all` - Mark all as read
- **DELETE** `/api/admin/notifications/[id]` - Delete notification

**Note:** Currently uses **MOCK DATA** (no database table yet)

---

### Frontend Components:

#### 1. Notification Dropdown (`src/components/ui/notification-dropdown.tsx`)
- Bell icon button with unread count badge
- Popover dropdown with scrollable notification list
- Real-time updates via Socket.io `useSocket()` hook
- Toast notifications (`sonner`) for new alerts
- Actions: Mark as read, Mark all as read
- Color-coded by notification type:
  - 🔵 Info - blue
  - 🟢 Success - green
  - 🟡 Warning - yellow
  - 🔴 Error - red

#### 2. Admin Notifications Center (`src/components/admin/NotificationsCenter.tsx`)
- Full-page notification management component
- Includes delete functionality
- Same real-time features as dropdown
- Polling fallback (30s interval) if Socket.io unavailable

#### 3. Socket.io Client Hook (`src/lib/socket-client.ts`)
- `useSocket()` hook for React components
- Auto-reconnection logic (5 attempts, 1s delay)
- WebSocket + polling fallback
- Connection status tracking

---

## 📦 Dependencies Required

```json
{
  "dependencies": {
    "socket.io": "^4.8.1",
    "socket.io-client": "^4.8.1"
  }
}
```

**Status:** ❌ Currently NOT installed in `package.json`

---

## 🗄️ Database Schema (Not Yet Created)

Recommended Prisma schema for `notifications` table:

```prisma
model Notification {
  id         String   @id @default(uuid())
  title      String
  message    String
  type       String   @default("info") // 'info', 'success', 'warning', 'error'
  read       Boolean  @default(false)
  link       String?  // Optional link to related page
  user_id    String?  // Null = admin notification, otherwise user-specific
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt

  @@index([user_id])
  @@index([read])
  @@map("notifications")
}
```

**Status:** ❌ Not in current `schema.prisma`

---

## 🔌 Integration Points

### Where It Was Used (Main Branch):

#### 1. `src/components/layout/Navbar.tsx`
```typescript
import { NotificationDropdown } from '@/components/ui/notification-dropdown'

// Desktop navbar - right side
<NotificationDropdown />

// Mobile navbar - right side
<NotificationDropdown />
```

**Status:** ❌ Removed in current branch

#### 2. Admin Dashboard
- Notifications Center component was available
- Real-time alerts for:
  - New user registrations
  - High-value leads (25+ staff calculations)
  - New quotations generated
  - Payment notifications
  - System updates & backups
  - API rate limit warnings
  - User activity spikes

---

## 🚀 How It Worked

### Flow:

1. **Server-Side Event** (e.g., new user signs up)
   ```typescript
   // In API route:
   const notification = {
     id: uuid(),
     title: 'New User Registered',
     message: 'John Doe has signed up',
     type: 'success',
     read: false,
     created_at: new Date().toISOString(),
     link: '/admin-dashboard/users'
   }
   
   emitNotification(notification, 'admin')
   ```

2. **Socket.io Emits** to `admin-notifications` room

3. **Frontend Receives** via `useSocket()` hook
   ```typescript
   socket.on('new-notification', (notification) => {
     // Add to state
     setNotifications([notification, ...prev])
     // Show toast
     toast.info(notification.title)
   })
   ```

4. **UI Updates** in real-time (bell icon badge, dropdown list)

---

## ✅ Restoration Steps

### Step 1: Install Dependencies
```bash
npm install socket.io socket.io-client
```

### Step 2: Add Database Schema
Add `Notification` model to `prisma/schema.prisma` (see schema above)
```bash
npx prisma migrate dev --name add_notifications
```

### Step 3: Update API Routes
Modify `/api/admin/notifications/route.ts` to use Prisma instead of mock data:
```typescript
// Replace mock data with:
const notifications = await prisma.notification.findMany({
  where: where,
  orderBy: { created_at: 'desc' },
  skip: skip,
  take: limit,
})
```

### Step 4: Initialize Socket.io Server
Create `server.js` or update Next.js custom server to call:
```typescript
import { initSocketIO } from '@/lib/socket-server'

const server = app.listen(port)
initSocketIO(server)
```

### Step 5: Restore Navbar Component
Add to `src/components/layout/Navbar.tsx`:
```typescript
import { NotificationDropdown } from '@/components/ui/notification-dropdown'

// In desktop navbar (right side):
<NotificationDropdown />

// In mobile navbar (right side):
<NotificationDropdown />
```

### Step 6: Test
- Run dev server
- Open admin dashboard
- Check browser console for Socket.io connection
- Create test notification via API:
  ```bash
  curl -X POST http://localhost:3000/api/admin/notifications \
    -H "Content-Type: application/json" \
    -d '{
      "title": "Test Notification",
      "message": "Testing real-time notifications",
      "type": "info"
    }'
  ```
- Verify bell icon shows unread count
- Verify toast appears
- Verify dropdown shows notification

---

## 🎯 Use Cases

### Admin Notifications:
- ✅ New user registrations
- ✅ High-value leads detected (>25 staff)
- ✅ New quotations generated
- ✅ Payment received
- ✅ System updates available
- ✅ Database backups completed
- ✅ API rate limits approaching
- ✅ User activity spikes
- ✅ Error alerts

### User Notifications (Future):
- Quote status updates
- New candidate matches
- Interview reminders
- Payment confirmations
- Team member updates

---

## 🐛 Known Issues (From Main Branch)

1. **No Database Persistence** - Was using mock data only
2. **No Notification History** - Notifications lost on page refresh
3. **No User-Specific Notifications** - Only admin notifications implemented
4. **Socket.io Requires Custom Server** - Next.js API routes don't support WebSocket natively

---

## 🔧 Recommended Improvements (When Restoring)

### 1. Add Database Persistence
- Create Prisma schema (see above)
- Migrate from mock data to real DB queries
- Add notification history/archive

### 2. Implement User Notifications
- User-specific notification rooms
- User notification preferences
- Email digest option

### 3. Add Notification Categories
- Filter by category (payments, leads, system, etc.)
- Category-based preferences
- Mute/unmute categories

### 4. Add Notification Actions
- Quick actions in dropdown (e.g., "View Lead", "Approve")
- Bulk actions (delete all read)
- Snooze notifications

### 5. Improve Performance
- Pagination for large notification lists
- Virtual scrolling for performance
- Notification archiving after 30 days

### 6. Add Analytics
- Track notification engagement
- Click-through rates
- Most effective notification types

---

## 📁 File Locations

All notification system files are **ALREADY IN THE CODEBASE** but not integrated:

```
shoreagents-main/
├── src/
│   ├── lib/
│   │   ├── socket-server.ts          ✅ Exists
│   │   ├── socket-client.ts          ✅ Exists
│   │   └── emit-notification.ts      ✅ Exists
│   ├── components/
│   │   ├── ui/
│   │   │   └── notification-dropdown.tsx  ✅ Exists
│   │   └── admin/
│   │       └── NotificationsCenter.tsx    ✅ Exists
│   └── app/
│       └── api/
│           └── admin/
│               └── notifications/
│                   ├── route.ts              ✅ Exists
│                   ├── read-all/route.ts    ✅ Exists
│                   └── [id]/
│                       ├── route.ts         ✅ Exists
│                       └── read/route.ts    ✅ Exists
```

---

## 🚫 Why It Was Removed

During the `stephen-cleanup-migration` branch cleanup:
- Socket.io dependencies removed from `package.json`
- `NotificationDropdown` removed from `Navbar.tsx`
- System left dormant but intact
- Decision: Restore later when needed

---

## 💡 Quick Start (Copy-Paste When Ready)

### 1. Install
```bash
npm install socket.io socket.io-client
```

### 2. Add to Navbar
```typescript
// src/components/layout/Navbar.tsx
import { NotificationDropdown } from '@/components/ui/notification-dropdown'

// Add before AuthButtons:
<NotificationDropdown />
```

### 3. Start Dev Server
```bash
npm run dev
```

### 4. Test Notification
```bash
curl -X POST http://localhost:3000/api/admin/notifications \
  -H "Content-Type: application/json" \
  -d '{"title":"Test","message":"It works!","type":"success"}'
```

---

## 📞 Support

If issues arise during restoration:
1. Check Socket.io connection in browser console
2. Verify Socket.io packages installed
3. Ensure custom server initialized (if using)
4. Check API route responses
5. Verify Prisma schema migrated (if using DB)

---

**Last Updated:** November 18, 2025  
**Branch:** `stephen-cleanup-migration`  
**Status:** Ready to restore when needed 🚀

