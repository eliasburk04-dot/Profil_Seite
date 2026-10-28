/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ['image/webp'] },
  async redirects() {
    return [
      { source: '/datenschutz', destination: '/leanbulk/datenschutz', permanent: true },
      { source: '/impressum', destination: '/leanbulk/impressum', permanent: true },
      { source: '/contact', destination: '/leanbulk/support', permanent: true },
      { source: '/support', destination: '/leanbulk/support', permanent: true },
      { source: '/leanbulk', destination: '/', permanent: true },
      { source: '/about', destination: '/', permanent: true },
      { source: '/services', destination: '/', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'no-referrer' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'",
          },
        ],
      },
    ];
  },
};
module.exports = nextConfig;
