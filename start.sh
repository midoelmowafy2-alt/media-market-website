#!/bin/bash

# Media Market Website - Quick Start Script
echo "================================================"
echo "مرحبا بك في مشروع ميديا ماركت"
echo "Media Market Website Quick Start"
echo "================================================"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "جاري تثبيت المتطلبات..."
    echo "Installing dependencies..."
    npm install
else
    echo "المتطلبات موجودة بالفعل"
    echo "Dependencies already installed"
fi

echo ""
echo "================================================"
echo "اختر الخيار:"
echo "Choose an option:"
echo "================================================"
echo "1) تشغيل الخادم الأمامي فقط (Frontend only)"
echo "2) تشغيل الخادم الخلفي فقط (Backend only)"
echo "3) تشغيل كلا الخادمين (Both servers)"
echo "4) بناء المشروع للإنتاج (Production build)"
echo ""
read -p "اختر (Enter choice): " choice

case $choice in
  1)
    echo "تشغيل الخادم الأمامي على http://localhost:3000"
    echo "Starting frontend server on http://localhost:3000"
    npm run dev
    ;;
  2)
    echo "تشغيل الخادم الخلفي على http://localhost:5000"
    echo "Starting backend server on http://localhost:5000"
    npm run server
    ;;
  3)
    echo "تشغيل الخادمين معاً..."
    echo "Starting both servers..."
    echo "الخادم الأمامي على http://localhost:3000"
    echo "Frontend server on http://localhost:3000"
    echo "الخادم الخلفي على http://localhost:5000"
    echo "Backend server on http://localhost:5000"
    npm run dev & npm run server
    ;;
  4)
    echo "بناء المشروع..."
    echo "Building project..."
    npm run build
    ;;
  *)
    echo "خيار غير صحيح"
    echo "Invalid choice"
    exit 1
    ;;
esac
