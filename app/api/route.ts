// src/app/api/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


declare global {
  // Esto asegura que `prisma` esté disponible globalmente en desarrollo
  var prisma: PrismaClient | undefined;
}

// Crear una instancia única de Prisma en desarrollo para evitar múltiples conexiones
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export async function POST(request: Request) {
  console.log("API Newsletter POST endpoint was called"); // Agrega este log para verificar que el código entra a la función POST
  const { email } = await request.json();

  // Validar que el email no esté vacío y tenga un formato adecuado
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Email no válido.' }, { status: 400 });
  }

  try {
    // Verificar si el correo ya está registrado
    const existingSubscriber = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      return NextResponse.json({ error: 'El email ya está suscrito.' }, { status: 400 });
    }

    // Almacenar el correo en la base de datos
    const newSubscriber = await prisma.newsletterSubscriber.create({
      data: { email },
    });

    return NextResponse.json(
      {
        message: '¡Te has suscrito exitosamente!',
        subscriber: newSubscriber,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error en la suscripción:', error);
    return NextResponse.json({ error: 'Error en el servidor. Intenta de nuevo más tarde.' }, { status: 500 });
  }
}
