/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: {
    api: {
      // Enable API routes in edge mode
      externalResolver: true,
    },
  },
};

module.exports = nextConfig;
