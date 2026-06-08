import { Client } from 'pg';

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const connect = async () => {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

export const query = async (text: string, params?: any[]) => {
  const res = await client.query(text, params);
  return res;
};

export const disconnect = async () => {
  await client.end();
  console.log('Disconnected from PostgreSQL database');
};