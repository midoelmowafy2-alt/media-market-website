/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'example.com'],
    formats: ['image/webp', 'image/avif'],
  },
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
  },
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3000',
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
      ],
    },
  ],
  rewrites: async () => ({
    beforeFiles: [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ],
  }),
};

module.exports = nextConfig;
