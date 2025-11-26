import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Necesario para GitHub Pages
  output: "export",

  // Necesario porque GitHub Pages no soporta next/image optimizado
  images: {
    unoptimized: true,
  },

  // Importante: NO USAR headers con export
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
