import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BLOG_ORIGIN = process.env.BLOG_ORIGIN || "http://localhost:3101";
const ADMIN_ORIGIN = process.env.ADMIN_ORIGIN || "http://localhost:3102";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/blog")) {
    const url = req.nextUrl.clone();

    url.href = `${BLOG_ORIGIN}${pathname}${req.nextUrl.search}`;
    return NextResponse.rewrite(url);
  }

  if (pathname.startsWith("/admin-panel")) {
    const url = req.nextUrl.clone();

    url.href = `${ADMIN_ORIGIN}${pathname}${req.nextUrl.search}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog/:path*", "/admin-panel/:path*"],
};
