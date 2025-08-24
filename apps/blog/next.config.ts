import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/blog",
  transpilePackages: ["@repo/ui", "@repo/tailwind-config"],
};

export default nextConfig;
