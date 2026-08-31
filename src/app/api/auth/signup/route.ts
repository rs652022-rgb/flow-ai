import { NextRequest, NextResponse } from "next/server";
import { encode } from "next-auth/jwt";
import { createUser } from "@/lib/users";

const SECRET = process.env.NEXTAUTH_SECRET || "flow-ai-dev-secret-change-in-production";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    // Validate fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Create user
    const user = await createUser({ name, email, password });

    // Create a JWT using NextAuth's encode function
    // This ensures the token format matches exactly what NextAuth expects
    const token = await encode({
      secret: SECRET,
      token: {
        id: user.id,
        email: user.email,
        name: user.name,
        picture: null,
        sub: user.id,
      },
      salt: "authjs.session-token",
    });

    const response = NextResponse.json(
      {
        message: "Account created successfully",
        user: { id: user.id, name: user.name, email: user.email },
      },
      { status: 201 }
    );

    // Set the session cookie using the same name NextAuth v5 uses
    response.cookies.set("authjs.session-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 30 * 24 * 60 * 60, // 30 days
    });

    // Set secure cookie for production
    if (process.env.NODE_ENV === "production") {
      response.cookies.set("__Secure-authjs.session-token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 30 * 24 * 60 * 60,
      });
    }

    return response;
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    const status = message.includes("already exists") ? 409 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
