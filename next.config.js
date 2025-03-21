/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['fonts.gstatic.com', 'fonts.googleapis.com'],
    loader: 'custom',
    loaderFile: './app/image.ts',
  },
  // Remove static export as we're using Netlify's Next.js plugin
  output: 'standalone',
  // Remove basePath as it's not needed for Netlify deployment
  trailingSlash: true,
}

module.exports = nextConfig 