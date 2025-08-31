const BLOG_ORIGIN = process.env.BLOG_ORIGIN || "http://localhost:3101";
const ADMIN_ORIGIN = process.env.ADMIN_ORIGIN || "http://localhost:3102";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "@repo/tailwind-config"],
  async rewrites() {
    return [
      { source: "/blog/:path*", destination: `${BLOG_ORIGIN}/blog/:path*` },
      {
        source: "/blog/_next/:path*",
        destination: `${BLOG_ORIGIN}/_next/:path*`,
      },
      {
        source: "/blog/_next/image",
        destination: `${BLOG_ORIGIN}/_next/image`,
      },
      {
        source: "/blog/_next/webpack-hmr",
        destination: `${BLOG_ORIGIN}/_next/webpack-hmr`,
      },
      {
        source: "/blog/__turbopack/:path*",
        destination: `${BLOG_ORIGIN}/__turbopack/:path*`,
      },
      {
        source: "/blog/__nextjs_original-stack-frame",
        destination: `${BLOG_ORIGIN}/__nextjs_original-stack-frame`,
      },

      {
        source: "/admin-panel/:path*",
        destination: `${ADMIN_ORIGIN}/admin-panel/:path*`,
      },
      {
        source: "/admin-panel/_next/:path*",
        destination: `${ADMIN_ORIGIN}/_next/:path*`,
      },
      {
        source: "/admin-panel/_next/image",
        destination: `${ADMIN_ORIGIN}/_next/image`,
      },
      {
        source: "/admin-panel/_next/webpack-hmr",
        destination: `${ADMIN_ORIGIN}/_next/webpack-hmr`,
      },
      {
        source: "/admin-panel/__turbopack/:path*",
        destination: `${ADMIN_ORIGIN}/__turbopack/:path*`,
      },
      {
        source: "/admin-panel/__nextjs_original-stack-frame",
        destination: `${ADMIN_ORIGIN}/__nextjs_original-stack-frame`,
      },
    ];
  },
};

export default nextConfig;
