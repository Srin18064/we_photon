import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",
  // GitHub Pages has no image optimization server
  images: {
    unoptimized: true,
  },
  // Emit /contact/index.html so GitHub Pages serves clean URLs
  trailingSlash: true,
};

export default nextConfig;
