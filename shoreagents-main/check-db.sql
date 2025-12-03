-- Check what's in the users table
SELECT 
    user_id,
    first_name,
    last_name,
    email,
    user_type,
    auth_user_id,
    created_at
FROM users
ORDER BY created_at DESC
LIMIT 10;
