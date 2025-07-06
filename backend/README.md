# Backend Template

This directory contains a production-ready Node.js backend scaffold that works alongside the Next.js frontend.

## Features

- **TypeScript** for type-safe development
- **Express** HTTP server
- **PostgreSQL** connection via `pg`
- **MongoDB** connection via `mongoose`
- Environment variables loading via `dotenv`
- Security middlewares: `helmet`, `cors`
- Request logging with `morgan`
- Centralised error handling
- Nodemon + ts-node for development reloads
- ESLint with TypeScript support

## Getting Started

1. `cd backend`
2. Copy `env.example` to `.env` and adjust values.
   ```bash
   cp env.example .env
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start PostgreSQL and MongoDB locally or via Docker (see below).
5. Start the development server:
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:4000` by default.

### Build for Production

```bash
npm run build
npm start
```

### Docker Compose (optional)

Create a `docker-compose.yml` similar to the following if you want to spin up databases quickly:

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: database
    ports:
      - '5432:5432'
    volumes:
      - pgdata:/var/lib/postgresql/data

  mongo:
    image: mongo:6
    ports:
      - '27017:27017'
    volumes:
      - mongodata:/data/db

volumes:
  pgdata:
  mongodata:
```

Then run `docker compose up -d`. 