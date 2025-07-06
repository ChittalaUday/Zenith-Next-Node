import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* You can keep other config options here */
  eslint: {
    // Allow production builds to successfully complete even if
    // there are ESLint errors. This lets us fix issues incrementally
    // without blocking CI or `next build`.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
