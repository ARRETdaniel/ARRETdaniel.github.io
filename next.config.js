/** @type {import('next').NextConfig} */

// Configuration for static export with custom i18n handling
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '',

  // For static export, we handle translations manually
  // Next.js built-in i18n doesn't work with static exports

  // If your repo name is different from your username, uncomment and update this:
  // assetPrefix: '/ARRETdaniel.github.io',
};

module.exports = nextConfig;
