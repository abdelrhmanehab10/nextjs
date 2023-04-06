/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["menu-tes.netlify.app"],
  },
};

module.exports = nextConfig;
