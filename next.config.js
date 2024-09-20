/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: "./",
};

module.exports = nextConfig;

module.exports = {
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'puppetscoin.com',
      },
    ],
  }
}
