import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs', // Output static build to /docs
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
