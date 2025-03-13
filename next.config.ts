import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      rules: {
        "*.gql": {
          loaders: ["raw-loader"],
          as: "text",
        },
      },
    },
  },
};

export default nextConfig;
