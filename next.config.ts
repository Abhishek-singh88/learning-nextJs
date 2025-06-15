import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // @ts-ignore - Turbopack is experimental and not in official types
    turbopack: true,
  },
};

export default nextConfig;