/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable the Next.js development overlay/indicators
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  
  // Disable React StrictMode to prevent double rendering
  reactStrictMode: false,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'higgsvideo.s3.us-east-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Optimize image loading
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
