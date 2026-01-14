'use client';

import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Media Market - Integrated Website',
  description: 'Complete integrated website for Media Market company',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}
