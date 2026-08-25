import { NextResponse } from "next/server";

const CANONICAL_HOST = "renfraenergy.com";
const EC2_HOST = "ec2-3-7-94-78.ap-south-1.compute.amazonaws.com";
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

export function middleware(request) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const requestHost = (forwardedHost || request.nextUrl.host).split(",")[0].trim();

  if (requestHost === EC2_HOST || requestHost === `www.${CANONICAL_HOST}`) {
    const canonicalUrl = new URL(request.nextUrl.pathname, CANONICAL_ORIGIN);
    canonicalUrl.search = request.nextUrl.search;
    return NextResponse.redirect(canonicalUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|fonts|favicon.ico|robots.txt|sitemap.xml|googleeb9f24efea721f98.html).*)",
  ],
};