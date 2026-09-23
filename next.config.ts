import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root. A stray lockfile in C:\Users\gibran otherwise makes
  // Turbopack treat the home directory as the root and scan it.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
