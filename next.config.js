/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Give each page up to 3 minutes to generate during build,
  // instead of the default 60 seconds. Fixes "static page
  // generation timeout" errors on pages with heavy content.
  staticPageGenerationTimeout: 180,
}
module.exports = nextConfig
