import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "media.rawg.io",
      },
    ],
  },
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
