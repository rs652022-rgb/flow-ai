import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

// Instagram as a generic OAuth2 provider
function InstagramProvider() {
  return {
    id: "instagram",
    name: "Instagram",
    type: "oauth" as const,
    authorization: {
      url: "https://www.facebook.com/v19.0/dialog/oauth",
      params: {
        scope: "instagram_basic,instagram_manage_messages,pages_show_list",
      },
    },
    token: {
      url: "https://graph.facebook.com/v19.0/oauth/access_token",
    },
    userinfo: {
      url: "https://graph.facebook.com/v19.0/me?fields=id,name,email",
    },
    clientId: process.env.INSTAGRAM_CLIENT_ID || "",
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET || "",
    profile(profile: { id: string; name: string; email?: string }) {
      return {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        image: null,
      };
    },
  };
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    InstagramProvider(),
    Credentials({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Dynamic import to avoid Edge Runtime issues
        const { verifyPassword } = await import("@/lib/users");

        const user = await verifyPassword(
          credentials.email as string,
          credentials.password as string
        );

        if (!user) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
