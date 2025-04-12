/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  output: 'export',
  swcMinify: true,
  basePath: '/Cross-Generation-Knowledge-Transfer-Platform',
  assetPrefix: '/Cross-Generation-Knowledge-Transfer-Platform'
};

module.exports = nextConfig; 