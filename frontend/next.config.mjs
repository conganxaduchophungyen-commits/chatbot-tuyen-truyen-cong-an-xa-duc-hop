/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.BACKEND_API_URL 
          ? `${process.env.BACKEND_API_URL}/api/:path*` 
          : 'http://127.0.0.1:8000/api/:path*',
      },
      {
        source: '/static/:path*',
        destination: process.env.BACKEND_API_URL 
          ? `${process.env.BACKEND_API_URL}/static/:path*` 
          : 'http://127.0.0.1:8000/static/:path*',
      },
    ];
  },
};

export default nextConfig;
