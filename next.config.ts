/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['pt', 'en', 'es', 'fr'],
    defaultLocale: 'pt',
    localeDetection: true,
  },
};

module.exports = nextConfig;
