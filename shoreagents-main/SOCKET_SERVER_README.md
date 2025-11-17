# Socket.io Server Setup

This project uses a separate Socket.io server running on port 3001 for real-time communication.

## Running the Servers

### Option 1: Run Both Servers Together (Recommended)

First, install `concurrently` if you haven't already:
```bash
npm install --save-dev concurrently
```

Then run both servers:
```bash
npm run dev:all
```

This will start:
- Next.js app on `http://localhost:3000`
- Socket.io server on `http://localhost:3001`

### Option 2: Run Servers Separately

**Terminal 1 - Next.js App:**
```bash
npm run dev
```

**Terminal 2 - Socket.io Server:**
```bash
npm run dev:socket
```

## Environment Variables

Add to your `.env.local`:

```env
# Socket.io Server URL (for API routes to emit events)
SOCKET_SERVER_URL=http://localhost:3001

# Socket.io Client URL (for frontend to connect)
NEXT_PUBLIC_SOCKET_URL=http://localhost:3001
```

## Socket.io Server Endpoints

The Socket.io server exposes HTTP endpoints for API routes to emit events:

- `POST /emit/notification` - Emit a new notification
- `POST /emit/notification-update` - Emit a notification update
- `POST /emit/notification-delete` - Emit a notification delete
- `POST /emit/incoming-call` - Emit an incoming call event
- `GET /health` - Health check
- `GET /online-users` - Get list of online users

## Socket.io Client Connection

The frontend connects to the Socket.io server using:
- URL: `http://localhost:3001` (or `NEXT_PUBLIC_SOCKET_URL`)
- Path: `/socket.io`

## Production

For production, run both servers:
```bash
npm run start:all
```

Or use a process manager like PM2:
```bash
pm2 start socket-server.js --name socket-server
pm2 start server.js --name nextjs-app
```

