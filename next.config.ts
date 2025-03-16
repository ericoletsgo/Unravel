import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  babel: {
    plugins: [
      process.env.NODE_ENV === 'development' && [
        "@locator/babel-jsx/dist",
        { env: "development" }
      ]
    ].filter(Boolean)
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false
    };
    return config;
  }
};

export default nextConfig;