/** @type {import('next').NextConfig} */
const nextConfig = {
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
