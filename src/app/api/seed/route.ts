import { NextResponse } from 'next/server';
import { hasMongoConfig } from '@/lib/mongodb';
import { seedBirthdayContent } from '@/lib/content-store';

export async function POST(request: Request) {
  try {
    const seedSecret = process.env.MONGODB_SEED_SECRET;
    const providedSecret = request.headers.get('x-seed-secret');

    if (
      (seedSecret && providedSecret !== seedSecret) ||
      (process.env.NODE_ENV === 'production' && !seedSecret)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Seed request is not authorized.',
        },
        { status: 401 }
      );
    }

    if (!hasMongoConfig()) {
      return NextResponse.json(
        {
          success: false,
          message: 'MONGODB_URI or MONGO_URI is not set. Add your database URL to .env first.',
        },
        { status: 400 }
      );
    }

    const result = await seedBirthdayContent();

    return NextResponse.json({
      success: true,
      message: 'Birthday content and media catalog pushed to MongoDB.',
      ...result,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to seed database',
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
