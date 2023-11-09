/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["i.ibb.co", "jthemes.net"], // Define domains for external images
  },
};

module.exports = nextConfig;
