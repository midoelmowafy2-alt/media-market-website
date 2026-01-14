# Getting Started - ابدأ الآن

## Quick Start Guide

هذا دليل سريع لتشغيل مشروع Media Market Website على جهازك المحلي.

## المتطلبات / Requirements

- **Node.js** (v16 أو أحدث)
- **npm** أو yarn
- **MongoDB** (محلي أو MongoDB Atlas)

## خطوات التثبيت / Installation Steps

### 1. استنساخ المستودع / Clone the Repository

```bash
git clone https://github.com/midoelmowafy2-alt/media-market-website.git
cd media-market-website
```

### 2. تثبيت المتطلبات / Install Dependencies

```bash
npm install
```

### 3. إعداد متغيرات البيئة / Setup Environment Variables

إنشاء ملف `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
MONGODB_URI=mongodb://localhost:27017/media-market
JWT_SECRET=your-secret-key-here
PORT=5000
```

## التشغيل السريع / Quick Start

### Windows Users - مستخدمي Windows

1. **الطريقة الأولى:** تشغيل الملف الـ Batch
```cmd
start.bat
```

2. **الطريقة اليدوية:**
```cmd
REM Terminal 1 - Frontend
npm run dev

REM Terminal 2 - Backend
npm run server
```

### Unix/Linux/Mac Users

1. **الطريقة الأولى:** تشغيل السكريبت
```bash
bash start.sh
```

2. **الطريقة اليدوية:**
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run server
```

## Access Points - نقاط الوصول

بعد التشغيل، يمكنك الوصول إلى:

### Frontend
- **Main Website:** http://localhost:3000
- **Home Page:** http://localhost:3000
- **Admin Dashboard:** http://localhost:3000/admin
- **Client Portal:** http://localhost:3000/client

### Backend API
- **API Base:** http://localhost:5000/api
- **Health Check:** http://localhost:5000/health
- **Contact Endpoint:** POST http://localhost:5000/api/contact
- **Get Contacts:** GET http://localhost:5000/api/contacts

## Available Commands - الأوامر المتاحة

```bash
# Frontend Development
npm run dev          # Start development server
npm run build        # Build for production
npm start           # Start production server

# Backend
npm run server      # Start backend API

# Utilities
npm run lint        # Run ESLint
```

## Folder Structure - هيكل المشروع

```
media-market-website/
├── app/                 # Frontend (Next.js)
│   ├── admin/          # Admin Dashboard
│   ├── client/         # Client Portal
│   ├── api/            # API Routes
│   ├── components/     # React Components
│   ├── page.jsx        # Home Page
│   ├── layout.jsx      # Root Layout
│   └── globals.css     # Global Styles
├── components/         # Reusable Components
│   ├── Header.jsx
│   └── Footer.jsx
├── lib/               # Utilities
│   └── api.js        # API Helper Functions
├── api/              # Backend
│   └── server.js     # Express Server
├── public/           # Static Assets
├── package.json      # Dependencies
├── start.sh         # Linux/Mac Start Script
├── start.bat        # Windows Start Script
└── README.md        # Full Documentation
```

## Features - الميزات

✅ **Frontend**
- Landing Page with Services Showcase
- Contact Form Integration
- Admin Dashboard
- Client Portal with Project Tracking
- Responsive Design
- Arabic Language Support

✅ **Backend**
- RESTful API
- MongoDB Integration
- Contact Management
- Health Check Endpoint
- Error Handling

✅ **Additional**
- Docker Support
- Environment Configuration
- Deployment Ready (Vercel + Railway)

## Troubleshooting - استكشاف الأخطاء

### Port Already in Use
```bash
# Change port in your code or use:
PORT=3001 npm run dev
PORT=5001 npm run server
```

### MongoDB Connection Error
```bash
# Make sure MongoDB is running
# Or use MongoDB Atlas connection string in .env.local
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/media-market
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Next Steps - الخطوات التالية

1. إعداد قاعدة البيانات / Setup Database
2. تخصيص الألوان والتصميم / Customize Branding
3. إضافة المنتجات والخدمات / Add Products/Services
4. نشر المشروع / Deploy Project

## Support - الدعم

للمزيد من المعلومات، راجع:
- [README.md](./README.md) - الوثائق الكاملة
- [GitHub Issues](https://github.com/midoelmowafy2-alt/media-market-website/issues)

## Happy Coding! 🚀

تم إنشاؤه بواسطة / Created by: Midoelmowafy

---

**Arabic:** مرحبا بك في مشروع ميديا ماركت! نتمنى لك تجربة ممتعة في التطوير.
**English:** Welcome to Media Market Project! Enjoy your development experience.
