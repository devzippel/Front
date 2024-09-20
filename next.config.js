/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: "./",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'puppetscoin.com',
      },
    ],
  },
};

module.exports = nextConfig;

