import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import 'express-async-errors';

import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';
import { limiter } from './middlewares/rateLimiter';
import type { Request, Response } from 'express';

const app = express();

// Security headers
app.use(helmet());
// Allow CORS
app.use(cors());
// JSON parsing
app.use(express.json());

// Logging
app.use(morgan('combined'));

// Mount routes
app.use('/api',limiter, routes);

// Default route with rate Limitter
app.get('/', (_req: Request, res: Response) => {
    res.json({ message: 'API is up and running' });
});

// Error handling middleware (must be after routes)
app.use(errorHandler);

export default app; 