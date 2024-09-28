/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'alokverma.vercel.app',
      },
    ],
  },
};

export default nextConfig;
