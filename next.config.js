/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  distDir: "build",
  assetPrefix: process.env.NODE_ENV === "production" ? "." : undefined,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
