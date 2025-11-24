# 🚨 EMERGENCY TRACKING FIX

## THE PROBLEM:
Client-side Supabase queries are HANGING and never returning.
The `.insert()` and `.select()` calls just freeze forever.

## PROOF:
1. ✅ Server-side API works (test-user-creation creates users)
2. ❌ Client-side queries hang (ensureAnonymousUser never completes)

## ROOT CAUSE:
The client-side Supabase client (@supabase/ssr) is misconfigured or broken.

## THE FIX:
Skip the ensureAnonymousUser check entirely and let the database 
handle user creation via a trigger or stored procedure.

OR

Use a server-side API call instead of client-side Supabase.

## IMMEDIATE ACTION:
Let's modify savePageVisit to NOT call ensureAnonymousUser,
and instead rely on the database having ON CONFLICT DO NOTHING
for the user_page_visits foreign key.

