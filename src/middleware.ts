import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(
  process.env.NEXTAUTH_SECRET || "flow-ai-dev-secret-change-in-production"
);

async function getTokenFromCookie(req: NextRequest): Promise<boolean> {
  // Check both dev and production cookie names
  const token =
    req.cookies.get("authjs.session-token")?.value ||
    req.cookies.get("__Secure-authjs.session-token")?.value;

  if (!token) return false;

  try {
    // Verify the HS256 JWT using jose (Edge-compatible)
    const { payload } = await jwtVerify(token, secret);
    return !!(payload && payload.id);
  } catch {
    return false;
  }
}

export async function middleware(req: NextRequest) {
  const isLoggedIn = await getTokenFromCookie(req);

  const isAuthPage =
    req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/signup";
  const isProtectedPage =
    req.nextUrl.pathname.startsWith("/dashboard") ||
    req.nextUrl.pathname.startsWith("/automations");

  // Redirect logged-in users away from auth pages
  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Redirect unauthenticated users to login
  if (isProtectedPage && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/automations/:path*", "/login", "/signup"],
};
