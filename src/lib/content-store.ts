import { BIRTHDAY_DATA } from '@/data/content';
import { getDb, hasMongoConfig } from '@/lib/mongodb';
import { getLocalMediaAssets, type MediaAsset } from '@/lib/media';

const contentCollectionName =
  process.env.MONGODB_CONTENT_COLLECTION || 'birthday_content';
const mediaCollectionName = process.env.MONGODB_MEDIA_COLLECTION || 'media_assets';
const contentDocumentId = 'birthday-data';

type BirthdayContentDocument = {
  _id: string;
  data: typeof BIRTHDAY_DATA;
  createdAt?: Date;
  updatedAt?: Date;
};

type MediaAssetDocument = MediaAsset & {
  createdAt?: Date;
  seededAt?: Date;
};

export async function getBirthdayContent() {
  if (!hasMongoConfig()) {
    return {
      source: 'local',
      data: BIRTHDAY_DATA,
    };
  }

  const db = await getDb();
  const content = await db
    .collection<BirthdayContentDocument>(contentCollectionName)
    .findOne({ _id: contentDocumentId });

  return {
    source: content ? 'database' : 'local',
    data: content?.data || BIRTHDAY_DATA,
  };
}

export async function seedBirthdayContent() {
  const db = await getDb();
  const mediaAssets = await getLocalMediaAssets();

  await db.collection<BirthdayContentDocument>(contentCollectionName).updateOne(
    { _id: contentDocumentId },
    {
      $set: {
        data: BIRTHDAY_DATA,
        updatedAt: new Date(),
      },
      $setOnInsert: {
        createdAt: new Date(),
      },
    },
    { upsert: true }
  );

  const mediaCollection = db.collection<MediaAssetDocument>(mediaCollectionName);

  await Promise.all(
    mediaAssets.map((asset) =>
      mediaCollection.updateOne(
        { path: asset.path },
        {
          $set: {
            ...asset,
            seededAt: new Date(),
          },
          $setOnInsert: {
            createdAt: new Date(),
          },
        },
        { upsert: true }
      )
    )
  );

  return {
    contentCollection: contentCollectionName,
    mediaCollection: mediaCollectionName,
    mediaCount: mediaAssets.length,
    images: mediaAssets.filter((asset) => asset.type === 'image').length,
    videos: mediaAssets.filter((asset) => asset.type === 'video').length,
  };
}
