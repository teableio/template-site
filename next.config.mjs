/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.teable.io',
      },
    ],
  },
};

export default nextConfig;
