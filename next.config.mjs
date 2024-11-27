/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'dist',
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.slipe.fun',
          },
        ],
      },
};

export default nextConfig;
