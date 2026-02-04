import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Using unoptimized as a safe fallback for unknown remote image domains.
    // When specific domains are known, replace with remotePatterns:
    // remotePatterns: [
    //   { protocol: "https", hostname: "api.cureway.com" },
    //   { protocol: "https", hostname: "cdn.cureway.com" },
    // ],
    unoptimized: true,
  },
};

export default nextConfig;
