import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/__generated__/api/munsl_sigem_backend/munsl-sigem-backend-api";
import jwt from "jsonwebtoken";
import { AxiosError } from "axios";
import { UNAUTHORIZED_ERROR_MESSAGE } from "../../../../next-auth-session-user";

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
          throw new Error("Missing credentials record");
        }

        const secretKey = process.env.JWT_SECRET;
        if (!secretKey) {
          throw new Error("Missing ENV variable JWT_SECRET");
        }

        let loginResponse;
        try {
          loginResponse = await login(credentials, {
            baseURL: process.env.NEXT_PUBLIC_API_MUNSL_SIGEM_BACKEND_URL,
            headers: {
              "Content-Type": "application/json",
            },
          });
        } catch (error) {
          const axiosError = error as AxiosError;
          if (axiosError.status === 401) {
            throw new Error(UNAUTHORIZED_ERROR_MESSAGE);
          }
          throw new Error(JSON.stringify(axiosError, null, 2));
        }

        const permisos = loginResponse.data;
        if (!permisos) {
          throw new Error("Login response body did not have body");
        }

        const token = loginResponse.headers?.["authorization"];
        if (!token) {
          throw new Error("Login response did not have Authorization header");
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
    signIn: "/auth/login",
  },
});
