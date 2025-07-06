import 'dotenv/config';

import app from './app';
import { connectPostgres, connectMongo } from './config/db';

const PORT = process.env.PORT || 4000;

const start = async () => {
    try {
        await connectPostgres();
        await connectMongo();

        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error('❌ Failed to start server', err);
        process.exit(1);
    }
};

start(); 