import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["xscriptor.com"],
  },
 
};

export default nextConfig;
