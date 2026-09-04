import { readdir, stat } from 'fs/promises';
import path from 'path';

const mediaExtensions = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.webp',
  '.avif',
  '.heic',
  '.mp4',
  '.mov',
  '.webm',
]);

const videoExtensions = new Set(['.mp4', '.mov', '.webm']);

export type MediaAsset = {
  filename: string;
  path: string;
  type: 'image' | 'video';
  extension: string;
  size: number;
  updatedAt: string;
};

export async function getLocalMediaAssets(): Promise<MediaAsset[]> {
  const mediaDir = path.join(process.cwd(), 'public', 'image');
  const files = await readdir(mediaDir);

  const assets = await Promise.all(
    files.map(async (filename) => {
      const extension = path.extname(filename).toLowerCase();

      if (!mediaExtensions.has(extension)) {
        return null;
      }

      const filePath = path.join(mediaDir, filename);
      const fileStat = await stat(filePath);

      return {
        filename,
        path: `/image/${filename}`,
        type: videoExtensions.has(extension) ? 'video' : 'image',
        extension,
        size: fileStat.size,
        updatedAt: fileStat.mtime.toISOString(),
      } satisfies MediaAsset;
    })
  );

  return assets
    .filter((asset): asset is MediaAsset => Boolean(asset))
    .sort((a, b) => a.filename.localeCompare(b.filename));
}
