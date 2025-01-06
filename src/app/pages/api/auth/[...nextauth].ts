import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/__generated__/api/munsl_sigem_backend/munsl-sigem-backend-api";
import jwt from "jsonwebtoken";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { type: "text" },
        password: { type: "password" },
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error("Missing credentials");
        }

        const secretKey = process.env.JWT_SECRET;
        if (!secretKey) {
          throw new Error("Missing signing credentials");
        }

        const { username, password } = credentials;

        const response = await login(
          { username, password },
          {
            baseURL: process.env.NEXT_PUBLIC_API_MUNSL_SIGEM_BACKEND_URL,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const permisos = response.data;
        if (!permisos) {
          throw new Error("Missing login response body");
        }

        const token = response.headers?.["Authorization"];
        if (!token) {
          throw new Error("Authorization header is missing");
        }

        const user = jwt.verify(
          token.replace("Bearer ", ""),
          Buffer.from(secretKey, "base64")
        ) as jwt.JwtPayload;
        user.accessToken = token;
        user.permisos = permisos;

        return user as never;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async session({ session, token, user }) {
      session.user = token as never;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
});
