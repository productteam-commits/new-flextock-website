import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.36"],
  async redirects() {
    return [
      {
        source: "/solutions/cross-boarder-trade",
        destination: "/solutions/cross-border-trade",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
