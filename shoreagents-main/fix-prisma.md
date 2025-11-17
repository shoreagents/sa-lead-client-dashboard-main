# Fixing Prisma Database Connection Issues

## Issue 1: Prisma Client Generation Error (EPERM)

This error occurs when Prisma Client files are locked by another process.

### Solution:
1. **Close all running processes:**
   - Stop the dev server (`npm run dev`)
   - Close Prisma Studio if open
   - Close any other Node.js processes

2. **Regenerate Prisma Client:**
   ```bash
   npx prisma generate
   ```

3. **If still failing, try:**
   - Restart your IDE/editor
   - Restart your computer (if necessary)
   - Delete `node_modules/.prisma` folder and regenerate

## Issue 2: Database Connection Error

The error shows: `Can't reach database server at aws-1-ap-southeast-1.pooler.supabase.com:5432`

### Possible Causes:
1. **Supabase project is paused** - Free tier projects pause after inactivity
2. **Network/Firewall issue** - Connection blocked
3. **DATABASE_URL incorrect** - Check your `.env` or `.env.local` file
4. **Database credentials expired** - Password might have changed

### Solutions:

1. **Check Supabase Dashboard:**
   - Go to your Supabase project dashboard
   - Check if the project is active (not paused)
   - If paused, click "Restore" to reactivate

2. **Verify DATABASE_URL:**
   - Check `.env` or `.env.local` file
   - Ensure the connection string is correct
   - Format: `postgresql://user:password@host:port/database?sslmode=require`

3. **Test Connection:**
   ```bash
   npx prisma db pull
   ```
   This will test the connection and show any errors

4. **Check Network:**
   - Ensure you can reach Supabase servers
   - Check firewall settings
   - Try from a different network

## Quick Fix Steps:

1. **Stop all Node processes:**
   ```bash
   # Windows PowerShell
   Get-Process node | Stop-Process -Force
   ```

2. **Regenerate Prisma Client:**
   ```bash
   npx prisma generate
   ```

3. **Check database connection:**
   ```bash
   npx prisma db pull
   ```

4. **If database is accessible, restart dev server:**
   ```bash
   npm run dev
   ```

## Note:
The Socket.io setup we tested is **completely separate** from this database issue. Once the database connection is fixed, the notification system will work correctly.

