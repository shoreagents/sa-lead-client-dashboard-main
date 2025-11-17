# Notification Database Schema

## Overview
This schema is designed to support a comprehensive notification system for both admin and user-specific notifications with real-time updates via Socket.io.

## Prisma Schema

```prisma
model Notification {
  id                    String                  @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  title                 String                  @db.VarChar(255)
  message               String                  @db.Text
  type                  NotificationType         @default(info) @map("type")
  read                  Boolean                  @default(false)
  target_type           NotificationTargetType   @default(admin) @map("target_type")
  target_user_id        String?                  @map("target_user_id") @db.VarChar(255) // Foreign key to users.user_id
  link                  String?                  @db.VarChar(500)
  metadata              Json?                    // For storing additional data (e.g., related entity IDs, custom data)
  
  // Email integration fields
  send_email            Boolean                  @default(false) @map("send_email") // Whether to send email notification
  recipient_email       String?                  @map("recipient_email") @db.VarChar(255) // Fallback email (only when user doesn't exist or override needed)
  email_sent            Boolean                  @default(false) @map("email_sent") // Whether email was sent
  email_sent_at         DateTime?                @map("email_sent_at") @db.Timestamptz(6) // When email was sent
  email_delivery_status EmailDeliveryStatus?     @map("email_delivery_status") // Delivery status from email service
  email_provider_id     String?                  @map("email_provider_id") @db.VarChar(255) // ID from email service (Resend, SendGrid, etc.)
  email_error           String?                  @map("email_error") @db.Text // Error message if email failed
  email_subject         String?                  @map("email_subject") @db.VarChar(255) // Custom email subject (defaults to title)
  email_template        String?                  @map("email_template") @db.VarChar(100) // Email template name (optional)
  
  // Timestamps
  created_at            DateTime                 @default(now()) @map("created_at") @db.Timestamptz(6)
  updated_at            DateTime                 @default(now()) @map("updated_at") @db.Timestamptz(6)
  read_at               DateTime?                @map("read_at") @db.Timestamptz(6)
  deleted_at            DateTime?                @map("deleted_at") @db.Timestamptz(6) // Soft delete

  // Relations
  user                  User?                   @relation("UserNotifications", fields: [target_user_id], references: [user_id], onDelete: Cascade, onUpdate: NoAction)

  @@index([target_type, target_user_id, read], map: "idx_notifications_target_read")
  @@index([target_type, target_user_id, created_at], map: "idx_notifications_target_created")
  @@index([target_user_id], map: "idx_notifications_target_user_id")
  @@index([read], map: "idx_notifications_read")
  @@index([type], map: "idx_notifications_type")
  @@index([created_at], map: "idx_notifications_created_at")
  @@index([deleted_at], map: "idx_notifications_deleted_at")
  @@index([email_sent], map: "idx_notifications_email_sent")
  @@index([email_delivery_status], map: "idx_notifications_email_delivery_status")
  @@index([recipient_email], map: "idx_notifications_recipient_email")
  @@map("notifications")
  @@schema("public")
}

enum NotificationType {
  info
  success
  warning
  error

  @@map("notification_type_enum")
  @@schema("public")
}

enum NotificationTargetType {
  admin      // For admin-only notifications
  user       // For user-specific notifications
  broadcast  // For broadcast notifications to all users (future use)

  @@map("notification_target_type_enum")
  @@schema("public")
}

enum EmailDeliveryStatus {
  pending   // Email queued but not yet sent
  sent      // Email sent successfully
  delivered // Email delivered to recipient
  failed    // Email failed to send
  bounced   // Email bounced back
  opened    // Email was opened by recipient (if tracking enabled)
  clicked   // Link in email was clicked (if tracking enabled)

  @@map("email_delivery_status_enum")
  @@schema("public")
}
```

## Schema Explanation

### Fields

1. **id** (UUID, Primary Key)
   - Unique identifier for each notification
   - Auto-generated UUID

2. **title** (String, 255 chars)
   - Short title/summary of the notification
   - Required field

3. **message** (Text)
   - Full notification message/content
   - Required field

4. **type** (Enum: info, success, warning, error)
   - Notification type for UI styling
   - Default: 'info'

5. **read** (Boolean)
   - Read/unread status
   - Default: false

6. **target_type** (Enum: admin, user, broadcast)
   - Determines who receives the notification
   - 'admin' = admin-only notifications
   - 'user' = user-specific notifications
   - 'broadcast' = all users (for future use)

7. **target_user_id** (String, nullable)
   - **PRIMARY CONNECTION**: Foreign key to `users.user_id`
   - User ID when target_type is 'user'
   - Null for admin notifications or external contacts
   - **Email is retrieved from User.email when this is set**
   - Creates proper relationship for data integrity

8. **link** (String, nullable, 500 chars)
   - Optional URL for navigation when notification is clicked
   - Example: '/admin-dashboard/leads/123'

9. **metadata** (JSON, nullable)
   - Flexible storage for additional data
   - Examples:
     - `{ "lead_id": "123", "quote_id": "456" }`
     - `{ "action": "video_call", "meeting_id": "meeting-123" }`

10. **created_at** (Timestamp)
    - When notification was created
    - Auto-set on creation

11. **updated_at** (Timestamp)
    - Last update time
    - Auto-updated on changes

12. **read_at** (Timestamp, nullable)
    - When notification was marked as read
    - Null if unread

13. **send_email** (Boolean)
    - Whether to send email notification
    - Default: false
    - Set to true to trigger email sending

14. **recipient_email** (String, nullable, 255 chars)
   - **FALLBACK EMAIL**: Only used when:
     - User doesn't exist in system (anonymous leads, external contacts)
     - Admin notifications where specific admin email is needed
     - Override scenario (different email than user's primary email)
   - **Primary email source**: When `target_user_id` exists, get email from `User.email`
   - This field is optional and serves as a fallback

15. **email_sent** (Boolean)
    - Whether email was successfully sent
    - Default: false
    - Updated by email service integration

16. **email_sent_at** (Timestamp, nullable)
    - When email was sent
    - Null if email not sent yet

17. **email_delivery_status** (Enum: pending, sent, delivered, failed, bounced, opened, clicked)
    - Delivery status from email service
    - Tracks email lifecycle
    - Can be updated via webhook from email service

18. **email_provider_id** (String, nullable, 255 chars)
    - ID from email service (Resend, SendGrid, etc.)
    - Used for tracking and webhook callbacks
    - Example: "msg_abc123" from Resend API

19. **email_error** (Text, nullable)
    - Error message if email failed to send
    - Stores error details for debugging

20. **email_subject** (String, nullable, 255 chars)
    - Custom email subject line
    - Defaults to notification title if not provided
    - Allows customization for email vs in-app notification

21. **email_template** (String, nullable, 100 chars)
    - Email template name (optional)
    - For using pre-defined email templates
    - Example: "video_call_invite", "quote_ready", etc.

22. **deleted_at** (Timestamp, nullable)
    - Soft delete timestamp
    - Allows recovery of deleted notifications
    - Null if not deleted

### Indexes

1. **idx_notifications_target_read**
   - Composite index for efficient queries by target + read status
   - Used for: "Get unread notifications for admin/user"

2. **idx_notifications_target_created**
   - Composite index for sorting by creation date
   - Used for: "Get latest notifications for admin/user"

3. **idx_notifications_target_user_id**
   - Index for user-specific queries
   - Used for: "Get all notifications for a specific user"

4. **idx_notifications_read**
   - Index for read status filtering
   - Used for: "Count unread notifications"

5. **idx_notifications_type**
   - Index for filtering by notification type
   - Used for: "Get all error notifications"

6. **idx_notifications_created_at**
   - Index for time-based queries
   - Used for: "Get notifications from last 24 hours"

7. **idx_notifications_deleted_at**
   - Index for soft delete filtering
   - Used for: "Exclude deleted notifications"

8. **idx_notifications_email_sent**
   - Index for email sent status
   - Used for: "Get notifications that need email sending"

9. **idx_notifications_email_delivery_status**
   - Index for email delivery status
   - Used for: "Get failed email notifications for retry"

10. **idx_notifications_recipient_email**
    - Index for recipient email
    - Used for: "Get all notifications sent to an email"

## Usage Examples

### Admin Notification
```typescript
{
  title: "New User Registered",
  message: "John Doe from Acme Corp has signed up",
  type: "success",
  target_type: "admin",
  target_user_id: null,
  link: "/admin-dashboard/users"
}
```

### User-Specific Notification
```typescript
{
  title: "Your Quote is Ready",
  message: "Your pricing quote has been generated",
  type: "info",
  target_type: "user",
  target_user_id: "user-123",
  link: "/user-dashboard/quotes/456",
  metadata: { quote_id: "456" }
}
```

### Video Call Notification with Email
```typescript
{
  title: "Video Call Invitation",
  message: "You've been invited to a video call",
  type: "info",
  target_type: "user",
  target_user_id: "user-123",
  link: "/video-call/meeting-789",
  send_email: true,
  recipient_email: "user@example.com",
  email_subject: "Video Call Invitation - ShoreAgents",
  email_template: "video_call_invite",
  metadata: {
    meeting_id: "meeting-789",
    lead_id: "lead-456",
    scheduled_at: "2025-01-15T10:00:00Z"
  }
}
```

### Notification with Email Tracking
```typescript
{
  title: "Your Quote is Ready",
  message: "Your pricing quote has been generated",
  type: "success",
  target_type: "user",
  target_user_id: "user-123",
  send_email: true,
  recipient_email: "user@example.com",
  email_sent: true,
  email_sent_at: "2025-01-15T10:00:00Z",
  email_delivery_status: "delivered",
  email_provider_id: "msg_abc123xyz",
  link: "/user-dashboard/quotes/456",
  metadata: { quote_id: "456" }
}
```

## Email Integration Workflow

### Email Resolution Logic

**Priority Order for Email Address:**
1. **If `target_user_id` exists**: Get email from `User.email` (primary source)
2. **If `target_user_id` is null**: Use `recipient_email` (fallback)
3. **If both are null**: Cannot send email (validation error)

### Workflow Steps

1. **Create Notification with Email**
   ```typescript
   // Option 1: User exists in system (RECOMMENDED)
   {
     target_user_id: "user-123",  // Get email from User.email
     send_email: true,
     email_subject: "Your Quote is Ready",
     email_template: "quote_ready"
   }
   
   // Option 2: External contact (no user account)
   {
     target_user_id: null,
     recipient_email: "external@example.com",  // Use this email
     send_email: true,
     email_subject: "Video Call Invitation"
   }
   ```

2. **Email Resolution in API**
   ```typescript
   // Pseudo-code for email resolution
   let emailToSend = null;
   
   if (notification.target_user_id) {
     // Get email from user table
     const user = await prisma.user.findUnique({
       where: { user_id: notification.target_user_id }
     });
     emailToSend = user?.email;
   } else {
     // Use fallback email
     emailToSend = notification.recipient_email;
   }
   
   if (!emailToSend) {
     throw new Error("No email address available");
   }
   ```

3. **Email Service Integration**
   - API route detects `send_email: true`
   - Resolves email address using priority logic above
   - Sends email via email service (Resend, SendGrid, etc.)
   - Updates `email_sent: true`, `email_sent_at`, `email_provider_id`
   - Sets `email_delivery_status: "sent"`

4. **Webhook Callbacks** (Optional)
   - Email service sends webhook on delivery events
   - Update `email_delivery_status` based on webhook:
     - `delivered` - Email delivered successfully
     - `bounced` - Email bounced back
     - `opened` - Email was opened (if tracking enabled)
     - `clicked` - Link clicked (if tracking enabled)

5. **Error Handling**
   - If email fails, set `email_delivery_status: "failed"`
   - Store error in `email_error` field
   - Can retry failed emails later

### Benefits of This Approach

✅ **Data Integrity**: Notifications tied to actual user records
✅ **Single Source of Truth**: Email stored in User table, not duplicated
✅ **Flexibility**: Supports both authenticated users and external contacts
✅ **Maintainability**: If user changes email, notifications still work
✅ **Query Efficiency**: Easy to get "all notifications for user X"
✅ **History Tracking**: Notification history preserved even if email changes

## Migration Notes

1. **Primary Connection via User ID**: Notifications connect to `users.user_id` via foreign key
2. **Email Resolution**: Email retrieved from `User.email` when `target_user_id` exists
3. **Fallback Support**: `recipient_email` used only for external contacts or overrides
4. **Email integration** tracks email delivery status and errors
5. Soft delete allows notification recovery
6. Metadata field provides flexibility for future features
7. Indexes are optimized for common query patterns
8. Compatible with existing Socket.io real-time system
9. Email fields are optional - notifications work without email

### Database Relationship

```
User (users table)
  ├── user_id (PK)
  ├── email
  └── ... other fields

Notification (notifications table)
  ├── target_user_id (FK → users.user_id)  ← PRIMARY CONNECTION
  ├── recipient_email (fallback only)
  └── ... email tracking fields
```

**When creating notification:**
- If user exists: Set `target_user_id`, email comes from `User.email`
- If user doesn't exist: Set `recipient_email` directly

## Next Steps

After reviewing this schema, we can:
1. Add it to `prisma/schema.prisma`
2. Run `npx prisma migrate dev --name add_notifications_table`
3. Update API routes to use the database instead of mock data
4. Update the notification components to work with persisted data

