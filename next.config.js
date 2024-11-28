/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disables image optimization for static export
  },
  output: 'export', // Enables static export
  trailingSlash: true, // Adds trailing slashes to paths for GitHub Pages
};

module.exports = nextConfig;
