import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token =
    req.cookies.get("authToken") || req.headers.get("Authorization");
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
