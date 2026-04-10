// DATABASE CONNECTION DISABLED FOR DEPLOYMENT
// Uncomment when ready to connect database

/*
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const createPrismaClient = () => {
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    return null as any;
  }
  
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production' && prisma) {
  globalForPrisma.prisma = prisma;
}
*/

// Temporary mock export
export const prisma = null as any;
