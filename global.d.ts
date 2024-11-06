// global.d.ts
import { PrismaClient } from '@prisma/client';

declare global {
  // Añadir `prisma` como una propiedad opcional en `globalThis`
  var prisma: PrismaClient | undefined;
}

export {};
