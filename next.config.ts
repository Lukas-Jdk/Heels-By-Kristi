import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: false,

  images: { formats: ["image/avif", "image/webp"] },

  modularizeImports: {
    lodash: { transform: "lodash/{{member}}" },
    "lodash-es": { transform: "lodash-es/{{member}}" },
    "date-fns": { transform: "date-fns/{{member}}" },
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : undefined,
    reactRemoveProperties: true,
  },

  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|js|css|woff2|ttf|otf)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
