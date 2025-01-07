import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/components/layout/layout";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/dark-mode/theme-provider";
import NextAuthSessionProvider from "@/components/next-auth/next-auth-session-provider";
import { ErrorBoundary } from "@/components/layout/error-boundary";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const title = "SIGEM";
const description =
  "El Sistema Integral de Gestión Municipal (SIGEM) de la ciudad de San Luis es una plataforma diseñada para facilitar a los ciudadanos la realización de trámites de manera sencilla y eficiente";
const keywords = [
  title,
  "San Luis",
  "gestión municipal",
  "trámites municipales",
  "plataforma digital",
  "trámites online",
  "ciudad de San Luis",
  "eficiencia administrativa",
  "servicios municipales",
];

export const metadata: Metadata = {
  authors: [{ name: "Franco Becvort", url: "https://pollito.dev/" }],
  title,
  description,
  keywords,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: title,
    description: description,
    images: [
      {
        url: "/sigem-azul",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <NextAuthSessionProvider>
              <Layout>{children}</Layout>
            </NextAuthSessionProvider>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
