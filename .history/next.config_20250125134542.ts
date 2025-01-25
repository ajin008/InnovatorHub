import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: {
    ppr: "incremental", // Optional: Progressive Partial Rendering (PPR)
    after: true, // Enable the `after` experimental feature
  },
  devIndicators: {
    appIsrStatus: "true",
    buildActivity: "true",
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;