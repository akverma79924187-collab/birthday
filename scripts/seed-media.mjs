import { existsSync, readFileSync } from 'fs';
import path from 'path';

const envPath = path.join(process.cwd(), '.env');

if (existsSync(envPath)) {
  const envFile = readFileSync(envPath, 'utf8');

  for (const line of envFile.split(/\r?\n/)) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) {
      continue;
    }

    const [key, ...valueParts] = trimmed.split('=');
    process.env[key] ??= valueParts.join('=').replace(/^"|"$/g, '');
  }
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const seedSecret = process.env.MONGODB_SEED_SECRET;

async function seed() {
  const response = await fetch(`${baseUrl}/api/seed`, {
    method: 'POST',
    headers: seedSecret
      ? {
          'x-seed-secret': seedSecret,
        }
      : undefined,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || result.error || 'Seed request failed');
  }

  console.log(result);
}

seed().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
