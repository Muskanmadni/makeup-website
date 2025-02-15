
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig