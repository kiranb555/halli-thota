import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/halli-thota',
  assetPrefix: '/halli-thota',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
