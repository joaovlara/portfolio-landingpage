import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: isProd ? "/joaovlara.github.io/" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true, 
};

export default nextConfig;
