import { Pool } from 'pg';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.PG_URI) {
    console.warn('⚠️  PG_URI was not provided in environment variables.');
}

if (!process.env.MONGO_URI) {
    console.warn('⚠️  MONGO_URI was not provided in environment variables.');
}

export const pgPool = new Pool({
    connectionString: process.env.PG_URI
});

pgPool.on('error', (err: Error) => {
    console.error('Unexpected error on idle PostgreSQL client', err);
    process.exit(-1);
});

export const connectPostgres = async () => {
    await pgPool.connect();
    console.log('✅ Connected to PostgreSQL');
};

export const connectMongo = async () => {
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI is missing');
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');
}; 