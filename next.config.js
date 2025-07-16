/** @type {import('next').NextConfig} */
// We can't use built-in i18n with export, so we'll use next-i18next directly
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '',
  // If your repo name is different from your username, uncomment and update this:
  // assetPrefix: '/ARRETdaniel.github.io',
};

module.exports = nextConfig;
