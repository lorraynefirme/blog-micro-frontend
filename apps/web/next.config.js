/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "@repo/tailwind-config"],
  async rewrites() {
    return [
      {
        source: "/blog/:path*",
        destination: "http://localhost:3101/blog/:path*",
      },
      {
        source: "/admin-panel/:path*",
        destination: "http://localhost:3102/admin-panel/:path*",
      },
      {
        source: "/blog/_next/:path*",
        destination: "http://localhost:3101/_next/:path*",
      },
      {
        source: "/blog/_next/image",
        destination: "http://localhost:3101/_next/image",
      },
      {
        source: "/blog/_next/webpack-hmr",
        destination: "http://localhost:3101/_next/webpack-hmr",
      },
      {
        source: "/blog/__turbopack/:path*",
        destination: "http://localhost:3101/__turbopack/:path*",
      },
      {
        source: "/blog/__nextjs_original-stack-frame",
        destination: "http://localhost:3101/__nextjs_original-stack-frame",
      },
      {
        source: "/admin-panel/_next/:path*",
        destination: "http://localhost:3102/_next/:path*",
      },
      {
        source: "/admin-panel/_next/image",
        destination: "http://localhost:3102/_next/image",
      },
      {
        source: "/admin-panel/_next/webpack-hmr",
        destination: "http://localhost:3102/_next/webpack-hmr",
      },
      {
        source: "/admin-panel/__turbopack/:path*",
        destination: "http://localhost:3102/__turbopack/:path*",
      },
      {
        source: "/admin-panel/__nextjs_original-stack-frame",
        destination: "http://localhost:3102/__nextjs_original-stack-frame",
      },
    ];
  },
};

export default nextConfig;
