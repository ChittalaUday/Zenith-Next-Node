
// Load environment variables as early as possible
import 'dotenv/config';

import app from './app';
import { connectPostgres, connectMongo } from './config/db';

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost';

// Global error handlers for unhandled promise rejections and uncaught exceptions
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

export const start = async () => {
  try {
    await connectPostgres();
    await connectMongo();

    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://${HOST}:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to start server', err);
    process.exit(1);
  }
};

// Only start if not in test environment
if (process.env.NODE_ENV !== 'test') {
  start();
}