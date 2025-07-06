# Zenith - Full Stack Web Application

A modern full-stack web application built with Next.js frontend and Node.js/TypeScript backend.

## 🚀 Project Structure

```
Next-js/
├── backend/                 # Node.js/TypeScript Backend API
│   ├── src/
│   │   ├── app.ts          # Express app configuration
│   │   ├── config/         # Database and configuration
│   │   ├── controllers/    # API controllers
│   │   ├── middlewares/    # Express middlewares
│   │   └── routes/         # API routes
│   └── package.json
└── zenith-next-js/         # Next.js Frontend Application
    ├── src/
    │   ├── app/           # Next.js 13+ app directory
    │   ├── components/    # React components
    │   ├── hooks/        # Custom React hooks
    │   └── lib/          # Utilities and configurations
    └── package.json
```

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: (Configured in `backend/src/config/db.ts`)
- **Environment**: Environment variables with `.env` support

### Frontend
- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **State Management**: React hooks
- **Icons**: Custom icon system

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm
- Git

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Next-js
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Copy environment variables
cp env.example .env

# Edit .env file with your configuration
# DATABASE_URL=your_database_url
# PORT=3001

# Start development server
npm run dev
```

The backend will be available at `http://localhost:3001`

### 3. Frontend Setup

```bash
cd zenith-next-js

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:3000`

## 📁 Project Features

### Backend Features
- ✅ Health check endpoints
- ✅ Error handling middleware
- ✅ Database configuration
- ✅ TypeScript support
- ✅ Environment variable management

### Frontend Features
- ✅ Modern Next.js 13+ with App Router
- ✅ Responsive dashboard interface
- ✅ Authentication system
- ✅ Service management
- ✅ Analytics dashboard
- ✅ User management
- ✅ Content management
- ✅ Settings panel
- ✅ Task management
- ✅ Testimonials system

## 🎨 Frontend Pages

### Public Pages
- **Home** (`/`) - Landing page with hero, services, testimonials
- **About** (`/about`) - Company information
- **Services** (`/services`) - Service offerings
- **Blog** (`/blog`) - Blog posts
- **Contact** (`/contact`) - Contact form
- **FAQ** (`/faq`) - Frequently asked questions
- **Pricing** (`/pricing`) - Pricing plans
- **Login** (`/login`) - Authentication

### Dashboard Pages
- **Dashboard** (`/dashboard`) - Main dashboard
- **Analytics** (`/dashboard/analytics`) - Analytics overview
- **Users** (`/dashboard/users`) - User management
- **Services** (`/dashboard/services`) - Service management
- **Content** (`/dashboard/content`) - Content management
- **Tasks** (`/dashboard/tasks`) - Task management
- **Settings** (`/dashboard/settings`) - Application settings

## 🔧 API Endpoints

The backend provides the following API endpoints:

- `GET /health` - Health check
- `GET /api/dashboard` - Dashboard data
- `GET /api/posts` - Blog posts
- `GET /api/services` - Services data
- `GET /api/testimonials` - Testimonials
- `GET /api/pricing/plans` - Pricing plans
- `GET /api/pricing/services` - Pricing services
- `GET /api/menu` - Navigation menu
- `GET /api/hero` - Hero section data
- `GET /api/how-it-works` - How it works section
- `GET /api/call-to-action` - Call to action data

## 🎯 Development Scripts

### Backend Scripts
```bash
cd backend
npm run dev          # Start development server
npm run build        # Build for production
npm start           # Start production server
npm test            # Run tests
```

### Frontend Scripts
```bash
cd zenith-next-js
npm run dev          # Start development server
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
```

## 🔒 Environment Variables

### Backend (.env)
```env
PORT=3001
DATABASE_URL=your_database_connection_string
NODE_ENV=development
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_NAME=Zenith
```

## 📦 Dependencies

### Backend Dependencies
- `express` - Web framework
- `typescript` - TypeScript support
- `@types/node` - Node.js types
- `@types/express` - Express types

### Frontend Dependencies
- `next` - React framework
- `react` - UI library
- `typescript` - TypeScript support
- `tailwindcss` - CSS framework
- `@radix-ui/*` - UI components
- `lucide-react` - Icons

## 🚀 Deployment

### Backend Deployment
1. Build the TypeScript code
2. Set production environment variables
3. Deploy to your preferred hosting service

### Frontend Deployment
1. Build the Next.js application
2. Deploy to Vercel, Netlify, or your preferred hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the existing issues
2. Create a new issue with detailed information
3. Contact the development team

## 🔄 Version History

- **v1.0.0** - Initial release with basic functionality
- **v1.1.0** - Added dashboard features
- **v1.2.0** - Enhanced UI components and responsiveness

---

**Built with ❤️ using Next.js and Node.js** 