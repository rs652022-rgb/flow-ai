import { NextRequest, NextResponse } from "next/server";

// Decode and verify a HS256 JWT using only the Web Crypto API (no dependencies)
// Works perfectly in Vercel Edge Runtime
async function verifyJWT(token: string, secretStr: string): Promise<Record<string, unknown> | null> {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;

    const [headerB64, payloadB64, signatureB64] = parts;

    // Import the secret key
    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(secretStr),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
    );

    // Verify the signature
    const data = new TextEncoder().encode(`${headerB64}.${payloadB64}`);
    const signature = Uint8Array.from(atob(signatureB64.replace(/-/g, "+").replace(/_/g, "/")), c => c.charCodeAt(0));

    const valid = await crypto.subtle.verify("HMAC", key, signature, data);
    if (!valid) return null;

    // Decode the payload
    const payload = JSON.parse(atob(payloadB64.replace(/-/g, "+").replace(/_/g, "/")));

    // Check expiration
    if (payload.exp && payload.exp < Date.now() / 1000) return null;

    return payload;
  } catch {
    return null;
  }
}

export async function middleware(req: NextRequest) {
  const secret = process.env.NEXTAUTH_SECRET || "flow-ai-dev-secret-change-in-production";

  // Get the session token from cookie
  const token =
    req.cookies.get("authjs.session-token")?.value ||
    req.cookies.get("__Secure-authjs.session-token")?.value;

  let isLoggedIn = false;
  if (token) {
    const payload = await verifyJWT(token, secret);
    isLoggedIn = !!(payload && payload.id);
  }

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
