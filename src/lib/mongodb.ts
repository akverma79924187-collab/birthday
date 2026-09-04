import { MongoClient, type Db } from 'mongodb';

const uri = process.env.MONGODB_URI || process.env.MONGO_URI;
const dbName = process.env.MONGODB_DB || 'birthday';

let clientPromise: Promise<MongoClient> | undefined;

declare global {
  var __birthdayMongoClientPromise: Promise<MongoClient> | undefined;
}

function getClientPromise() {
  if (!uri) {
    throw new Error('MONGODB_URI is not set');
  }

  if (process.env.NODE_ENV === 'development') {
    global.__birthdayMongoClientPromise ??= new MongoClient(uri).connect();
    return global.__birthdayMongoClientPromise;
  }

  clientPromise ??= new MongoClient(uri).connect();
  return clientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await getClientPromise();
  return client.db(dbName);
}

export function hasMongoConfig() {
  return Boolean(uri);
}
