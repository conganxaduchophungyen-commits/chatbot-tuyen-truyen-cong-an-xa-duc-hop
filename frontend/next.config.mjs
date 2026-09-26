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
  // NOTE: /api/* rewrites đã được thay bằng Next.js Route Handlers (app/api/...)
  // có fallback tự động sang mockData khi backend offline.
  // Chỉ giữ rewrite cho /static/ (file tĩnh của FastAPI nếu chạy).
  async rewrites() {
    return [
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
