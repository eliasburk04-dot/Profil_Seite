/** @type {import('next').NextConfig} */
// Static export for Cloudflare Pages; redirects and security headers live in
// public/_redirects and public/_headers because `output: 'export'` ignores them here.
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true },
};
module.exports = nextConfig;
