import { NextResponse } from 'next/server';
import { getDb, hasMongoConfig } from '@/lib/mongodb';
import { getLocalMediaAssets } from '@/lib/media';

const mediaCollectionName = process.env.MONGODB_MEDIA_COLLECTION || 'media_assets';

export async function GET() {
  try {
    if (!hasMongoConfig()) {
      const media = await getLocalMediaAssets();

      return NextResponse.json({
        success: true,
        source: 'local',
        count: media.length,
        data: media,
      });
    }

    const db = await getDb();
    const media = await db
      .collection(mediaCollectionName)
      .find({})
      .sort({ filename: 1 })
      .toArray();

    return NextResponse.json({
      success: true,
      source: 'database',
      count: media.length,
      data: media,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch media assets',
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
