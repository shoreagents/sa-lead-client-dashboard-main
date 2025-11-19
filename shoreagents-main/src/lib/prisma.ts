import { PrismaClient } from '@prisma/client';

// Create a singleton Prisma client to avoid connection issues
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Enhanced Prisma client with better connection handling
export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
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
    await prisma.$queryRaw`SELECT 1`;
    console.log('✅ Database connection successful');
  } catch (error: any) {
    console.error('❌ Database connection failed:', error.message);
    console.error('Please check:');
    console.error('1. Is your Supabase project active (not paused)?');
    console.error('2. Is DATABASE_URL correctly set in .env or .env.local?');
    console.error('3. Is your database password correct?');
  }
}

// Test connection in development
if (process.env.NODE_ENV === 'development') {
  testConnection();
}

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;