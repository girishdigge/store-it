import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '100MB',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.seadn.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cloud.appwrite.io',
        port: '',
      },
    ],
  },
};

export default nextConfig;
