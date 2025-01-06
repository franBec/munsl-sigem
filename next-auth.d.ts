import { type DefaultSession } from "next-auth";
import { NextAuthSessionUser } from "./next-auth-session-user";

export type ExtendedUser = DefaultSession["user"] & NextAuthSessionUser;

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
