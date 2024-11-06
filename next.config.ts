import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["xscriptor.com"],
  },
  // Otras opciones de configuración aquí
};

export default nextConfig;
