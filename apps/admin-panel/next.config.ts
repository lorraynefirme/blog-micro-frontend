import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/admin-panel",
  transpilePackages: ["@repo/ui", "@repo/tailwind-config"],
};

export default nextConfig;
