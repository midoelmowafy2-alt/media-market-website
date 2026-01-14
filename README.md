# 🎨 Media Market - Integrated Website

> Complete integrated website for Media Market company with Frontend, Backend, Admin Dashboard, and Client Portal

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Deployment](#deployment)

## ✨ Features

### Frontend
- 🏠 **Landing Page** - Professional homepage with services showcase
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🔐 **Client Portal** - Login and project dashboard
- 📊 **Analytics** - Client project statistics and metrics
- 🛒 **Service Gallery** - Browse and request services

### Backend & API
- 🔑 **Authentication** - JWT-based secure authentication
- 👥 **User Management** - Role-based access control
- 📋 **Project Management** - Full CRUD operations
- 💾 **Database** - MongoDB with Mongoose ODM
- 📧 **Email Notifications** - Automated email system

### Admin Dashboard
- 📈 **Statistics** - Business metrics and analytics
- 👨‍💼 **Client Management** - Manage clients and projects
- 💳 **Invoicing** - Generate and manage invoices
- 🎨 **Service Management** - Add/edit services
- 📞 **Contact Requests** - Handle customer inquiries

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **Axios** - HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### Deployment
- **Vercel** - Frontend hosting
- **Railway/Heroku** - Backend hosting
- **MongoDB Atlas** - Cloud database

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn
- MongoDB (local or Atlas)

### Installation

```bash
# Clone repository
git clone https://github.com/midoelmowafy2-alt/media-market-website.git
cd media-market-website

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Run development server
npm run dev

# Start backend server
npm run server
```

## 📁 Project Structure

```
media-market-website/
├── app/                    # Next.js app directory
│   ├── components/        # React components
│   ├── pages/            # Page routes
│   └── layout.tsx        # Global layout
├── api/                   # Backend API
│   ├── server.js         # Express server
│   ├── routes/           # API routes
│   ├── models/           # Database models
│   ├── middleware/       # Express middleware
│   └── controllers/      # Route controllers
├── public/               # Static assets
├── styles/              # Global styles
├── .env.example         # Environment variables template
├── package.json         # Dependencies
└── README.md           # This file
```

## ⚙️ Setup Instructions

### Environment Variables

Create `.env.local` in root directory:

```env
# Frontend
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Backend
PORT=5000
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/media-market
JWT_SECRET=your-secret-key-here
NODE_ENV=development

# Email (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-password
```

### Running the Project

**Development:**
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run server
```

**Production Build:**
```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy Frontend (Vercel)

1. Connect GitHub repository to Vercel
2. Set environment variables
3. Deploy automatically on push

### Deploy Backend (Railway)

1. Push code to GitHub
2. Connect Railway to GitHub
3. Set environment variables
4. Deploy

### MongoDB Atlas Setup

1. Create cluster at mongodb.com
2. Get connection string
3. Add to `.env`
4. Done!

## 📚 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run server    # Start backend API
npm run lint      # Run linter
```

## 🔐 Security

- ✅ Password hashing with bcryptjs
- ✅ JWT token authentication
- ✅ Input validation & sanitization
- ✅ CORS enabled
- ✅ Environment variables for secrets

## 📞 Support

For questions or issues:
1. Check existing issues
2. Create new issue with details
3. Email: support@mediamarket.com

## 📄 License

MIT License - feel free to use in your projects

---

**Made with ❤️ by Media Market**
