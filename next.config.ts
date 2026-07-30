import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: false,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  modularizeImports: {
    lodash: {
      transform: "lodash/{{member}}",
    },
    "lodash-es": {
      transform: "lodash-es/{{member}}",
    },
    "date-fns": {
      transform: "date-fns/{{member}}",
    },
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : undefined,
    reactRemoveProperties: true,
  },
};

export default nextConfig;