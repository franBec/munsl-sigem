import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/components/layout/layout";
import { ReactNode } from "react";
import { ErrorBoundary } from "@/components/layout/error-boundary";
import ClientProvider from "@/components/react-query/client-provider";
import { metadata as libMetadata } from "@/lib/metadata";
import NextAuthSessionProvider from "@/components/next-auth/next-auth-session-provider";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata = libMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ClientProvider>
      <html lang="es">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ErrorBoundary>
            <NextAuthSessionProvider>
              <Layout>{children}</Layout>
            </NextAuthSessionProvider>
          </ErrorBoundary>
        </body>
      </html>
    </ClientProvider>
  );
}
