// global.d.ts
import { PrismaClient } from '@prisma/client';

declare global {
  // Esto asegura que `prisma` esté disponible globalmente en desarrollo
  var prisma: PrismaClient | undefined;
}

// Esto es necesario para que TypeScript trate este archivo como un módulo y aplique las declaraciones globales
export {};
