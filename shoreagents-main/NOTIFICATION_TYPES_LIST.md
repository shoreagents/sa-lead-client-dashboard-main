# Notification Types - Current Status

## Current Implementation Status

**Status**: ✅ **Automatic notifications are now being created**

The following notifications are automatically triggered:
- ✅ New User Registered (when user signs up via `/api/save-contact-info`)
- ✅ High-Value Lead Detected (when lead calculates pricing for 20+ employees)
- ✅ New Quotation Generated (when quotation is completed in step 5)
- ✅ Your Quote is Ready (user notification when their quote is ready)
- ✅ New Interview Request (when interview request is submitted)
- ✅ Incoming Call (when video call is created)
- ✅ Video Call Invitation Sent (when video call invite is sent)

---

## Mock Data Notification Types (Previously Used)

These were the notification types shown in the old mock data (now removed):

1. **New User Registered**
   - Type: `success`
   - Message: "John Doe from Acme Corp has signed up for an account"
   - Link: `/admin-dashboard/users`

2. **High-Value Lead Detected**
   - Type: `warning`
   - Message: "A visitor calculated pricing for 25+ staff members"
   - Link: `/admin-dashboard/leads`

5. **API Rate Limit Warning**
   - Type: `warning`
   - Message: "API usage is at 85% of the monthly limit"
   - Link: `/admin-dashboard/settings`

6. **New Quotation Generated**
   - Type: `info`
   - Message: "A new pricing quotation has been created by a lead"
   - Link: `/admin-dashboard/leads/quotations`


---

## Recommended Notification Types to Implement

Based on your codebase, here are notification types you should consider implementing:

### User Management Notifications

1. **New User Registered**
   - **Trigger**: When a new user signs up (`/api/auth/signup`, `/api/save-contact-info`)
   - **Type**: `success`
   - **Target**: `admin`
   - **Link**: `/admin-dashboard/users`
   - **Email**: Optional (notify admin of new signup)

2. **User Type Changed**
   - **Trigger**: When user is promoted/demoted (`/api/admin/promote-user`)
   - **Type**: `info`
   - **Target**: `admin`
   - **Link**: `/admin-dashboard/users`

### Lead Management Notifications

3. **New Lead Created**
   - **Trigger**: When a new lead is captured
   - **Type**: `info`
   - **Target**: `admin`
   - **Link**: `/admin-dashboard/leads`

4. **High-Value Lead Detected**
   - **Trigger**: When lead calculates pricing for 20+ employees
   - **Type**: `warning`
   - **Target**: `admin`
   - **Link**: `/admin-dashboard/leads`
   - **Email**: Optional (notify admin of high-value lead)

5. **Lead Status Changed**
   - **Trigger**: When lead progress status is updated
   - **Type**: `info`
   - **Target**: `admin`
   - **Link**: `/admin-dashboard/leads`

6. **Lead Enriched**
   - **Trigger**: When lead enrichment data is added (`/api/admin/enrich-lead`)
   - **Type**: `success`
   - **Target**: `admin`
   - **Link**: `/admin-dashboard/leads`

### Quotation Notifications

7. **New Quotation Generated**
   - **Trigger**: When a new pricing quote is created (`/api/pricing-progress`)
   - **Type**: `info`
   - **Target**: `admin`
   - **Link**: `/admin-dashboard/leads/quotations`
   - **Email**: Optional (notify admin of new quote)

8. **Quotation Updated**
   - **Trigger**: When quotation is modified
   - **Type**: `info`
   - **Target**: `admin`
   - **Link**: `/admin-dashboard/leads/quotations`

9. **Incoming Call**
   - **Trigger**: When a video call is initiated/received
   - **Type**: `warning`
   - **Target**: `admin` or `user` (target_user_id)
   - **Link**: `/video-call/[meetingId]`
   - **Email**: Optional

### Interview Request Notifications

10. **New Interview Request**
   - **Trigger**: When interview request is submitted (`/api/interview-request`)
   - **Type**: `warning`
   - **Target**: `admin`
   - **Link**: `/admin-dashboard/leads`
   - **Email**: Optional (notify admin of interview request)

11. **Interview Request for User**
    - **Trigger**: When interview request is created for a specific user
    - **Type**: `info`
    - **Target**: `user` (target_user_id)
    - **Link**: `/user-dashboard`
    - **Email**: Optional (notify user of interview request)

### Video Call Notifications

12. **Video Call Invitation Sent**
    - **Trigger**: When video call invite is sent (`/api/admin/video-call/invite`)
    - **Type**: `info`
    - **Target**: `user` (target_user_id)
    - **Link**: `/video-call/[meetingId]`
    - **Email**: Yes (send_email: true)

13. **Video Call Scheduled**
    - **Trigger**: When video call is scheduled
    - **Type**: `info`
    - **Target**: `user` or `admin`
    - **Link**: `/video-call/[meetingId]`
    - **Email**: Yes (send_email: true)

### User-Facing Notifications

14. **Your Quote is Ready**
    - **Trigger**: When quotation is generated for user
    - **Type**: `success`
    - **Target**: `user` (target_user_id)
    - **Link**: `/user-dashboard/quotation`
    - **Email**: Optional (notify user their quote is ready)

15. **Candidate Recommendation**
    - **Trigger**: When candidate is recommended to user
    - **Type**: `info`
    - **Target**: `user` (target_user_id)
    - **Link**: `/user-dashboard/recommended-candidates`
    - **Email**: Optional

16. **Interview Scheduled**
    - **Trigger**: When interview is scheduled for user
    - **Type**: `success`
    - **Target**: `user` (target_user_id)
    - **Link**: `/user-dashboard`
    - **Email**: Yes (send_email: true)

### System Notifications

17. **System Error**
    - **Trigger**: When critical system error occurs
    - **Type**: `error`
    - **Target**: `admin`
    - **Link**: `/admin-dashboard/settings`
    - **Email**: Optional (notify admin of critical errors)

18. **API Rate Limit Warning**
    - **Trigger**: When API usage approaches limit
    - **Type**: `warning`
    - **Target**: `admin`
    - **Link**: `/admin-dashboard/settings`

---

## Implementation Locations

To implement these notifications, you'll need to add notification creation in these API routes:

### User Management
- `src/app/api/auth/signup/route.ts` - New user registered
- `src/app/api/auth/signup-simple/route.ts` - New user registered
- `src/app/api/save-contact-info/route.ts` - New user created
- `src/app/api/admin/promote-user/route.ts` - User type changed

### Lead Management
- `src/app/api/admin/leads/route.ts` - Lead status changes
- `src/app/api/admin/enrich-lead/route.ts` - Lead enriched
- `src/app/api/pricing-progress/route.ts` - New quotation created

### Interview Requests
- `src/app/api/interview-request/route.ts` - New interview request

### Video Calls
- `src/app/api/admin/video-call/invite/route.ts` - Video call invite sent
- `src/app/api/admin/video-call/create/route.ts` - Video call created

---

## Notification Type Enum Values

Current notification types available:
- `info` - Informational (blue)
- `success` - Success message (green)
- `warning` - Warning message (yellow/orange)
- `error` - Error message (red)

---

## Target Types

- `admin` - Admin-only notifications
- `user` - User-specific notifications (requires target_user_id)
- `broadcast` - Broadcast to all users (future use)

---

## Next Steps

1. **Review this list** and decide which notifications you want to implement
2. **Modify the list** - Add, remove, or change notification types
3. **Implement triggers** - Add notification creation code to the relevant API routes
4. **Configure email** - Decide which notifications should send emails

Would you like me to:
- Implement specific notification types?
- Create a helper function to standardize notification creation?
- Add email integration for specific notifications?

