/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Adicionar para melhor performance
  images: {
    domains: [
      'images.unsplash.com',
      'localhost',
      'images.pexels.com',
      'plus.unsplash.com',
      'www.pedrazzolitours.pt', // Adicionar seu domínio
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60, // Cache de imagens por 60 segundos
  },
  // Compressão
  compress: true,
  // Headers de segurança
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
