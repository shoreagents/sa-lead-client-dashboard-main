import { PrismaClient } from '@prisma/client';

// Create a singleton Prisma client to avoid connection issues
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Enhanced Prisma client with better connection handling
export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn', 'query'] : ['error'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  // Add connection timeout and retry settings
  __internal: {
    engine: {
      connectTimeout: 10000, // 10 seconds
    },
  },
});

// Connection pooling and retry logic
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

export async function withRetry<T>(
  fn: () => Promise<T>,
  retries = MAX_RETRIES
): Promise<T> {
  try {
    return await fn();
  } catch (error: any) {
    if (retries > 0 && (error.code === 'P1001' || error.code === 'P2024')) {
      console.log(`Database connection failed, retrying... (${retries} retries left)`);
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      return withRetry(fn, retries - 1);
    }
    throw error;
  }
}

// Test database connection on startup
async function testConnection() {
  try {
    // Check if DATABASE_URL is set
    if (!process.env.DATABASE_URL) {
      console.error('❌ DATABASE_URL is not set in environment variables');
      console.error('Please add DATABASE_URL to your .env.local file');
      return;
    }

    // Log connection string (without password) for debugging
    const dbUrl = process.env.DATABASE_URL;
    const maskedUrl = dbUrl.replace(/:[^:@]+@/, ':****@'); // Mask password
    console.log('🔌 Attempting database connection to:', maskedUrl);

    await prisma.$queryRaw`SELECT 1`;
    console.log('✅ Database connection successful');
  } catch (error: any) {
    console.error('❌ Database connection failed:', error.message);
    console.error('Error code:', error.code);
    console.error('Please check:');
    console.error('1. Is your Supabase project active (not paused)?');
    console.error('2. Is DATABASE_URL correctly set in .env or .env.local?');
    console.error('3. Is your database password correct?');
    console.error('4. Connection string format should be:');
    console.error('   postgresql://postgres:[PASSWORD]@[HOST]:5432/postgres?sslmode=require');
    console.error('   OR for pooler:');
    console.error('   postgresql://postgres:[PASSWORD]@[HOST].pooler.supabase.com:5432/postgres?pgbouncer=true&connection_limit=1');
    
    // Check for common connection issues
    if (error.message?.includes('Can\'t reach database server')) {
      console.error('\n💡 Connection troubleshooting:');
      console.error('   - Verify Supabase project is not paused');
      console.error('   - Check if you can ping the host');
      console.error('   - Try using direct connection instead of pooler');
      console.error('   - Verify firewall/network settings');
    }
  }
}

// Test connection in development
if (process.env.NODE_ENV === 'development') {
  testConnection();
}

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;