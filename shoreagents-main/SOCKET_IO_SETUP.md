# Socket.io Real-Time Notifications Setup

This project now uses Socket.io for real-time notifications instead of Supabase Realtime.

## Setup Instructions

### 1. Installation
All required packages are already installed:
- `socket.io` - Server-side Socket.io
- `socket.io-client` - Client-side Socket.io
- `express` - HTTP server framework
- `cors` - CORS middleware

### 2. Running the Server

The project now uses a custom server (`server.js`) that runs both Next.js and Socket.io.

**Development:**
```bash
npm run dev
```

**Production:**
```bash
npm run build
npm start
```

### 3. How It Works

#### Server Side (`server.js`)
- Creates an Express HTTP server
- Initializes Socket.io on the same server
- Handles Socket.io connections and room management
- Makes Socket.io instance available globally via `global.io`

#### Client Side (`src/lib/socket-client.ts`)
- Provides `useSocket()` hook for React components
- Manages Socket.io client connection
- Handles reconnection automatically

#### Notification System
- **NotificationsCenter** component uses Socket.io instead of Supabase
- Joins `admin-notifications` room when mounted
- Listens for `new-notification`, `notification-updated`, and `notification-deleted` events
- Falls back to polling if Socket.io is unavailable

#### API Routes
- Notification API routes emit Socket.io events when notifications are created/updated/deleted
- Uses `emitNotification()`, `emitNotificationUpdate()`, and `emitNotificationDelete()` helpers

### 4. Socket.io Events

#### Client → Server Events:
- `join-admin-room` - Join admin notifications room
- `join-user-room` - Join user-specific room (with userId)
- `leave-user-room` - Leave user-specific room

#### Server → Client Events:
- `new-notification` - New notification created
- `notification-updated` - Notification updated (e.g., marked as read)
- `notification-deleted` - Notification deleted

### 5. Environment Variables

Optional environment variables:
- `NEXT_PUBLIC_SOCKET_URL` - Custom Socket.io server URL (defaults to current origin)
- `NEXT_PUBLIC_APP_URL` - App URL for CORS configuration
- `PORT` - Server port (default: 3000)
- `HOSTNAME` - Server hostname (default: localhost)

### 6. Testing

To test real-time notifications:

1. Start the server: `npm run dev`
2. Open the admin dashboard
3. Create a notification via API:
```bash
curl -X POST http://localhost:3000/api/admin/notifications \
  -H "Content-Type: application/json" \
  -d '{"title":"Test","message":"This is a test notification","type":"info"}'
```

The notification should appear in real-time in the NotificationsCenter component!

### 7. Notes

- Socket.io connection path: `/api/socket`
- Admin notifications room: `admin-notifications`
- User-specific rooms: `user-{userId}`
- Falls back to polling every 5 seconds if Socket.io is unavailable

