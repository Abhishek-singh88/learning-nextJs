import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // @ts-ignore - Turbopack is experimental and not in official types
    turbopack: false,
  },
};

export default nextConfig;