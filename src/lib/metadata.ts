import type { Metadata } from "next";

const title = "SIGEM";
const description =
  "El Sistema Integral de Gestión Municipal (SIGEM) de la ciudad de San Luis es una plataforma diseñada para facilitar a los ciudadanos la realización de trámites de manera sencilla y eficiente";

export const metadata: Metadata = {
  authors: [{ name: "Franco Becvort", url: "https://pollito.dev/" }],
  title,
  description,
  keywords: [
    title,
    "San Luis",
    "gestión municipal",
    "trámites municipales",
    "plataforma digital",
    "trámites online",
    "ciudad de San Luis",
    "servicios municipales",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title,
    description,
    siteName: title,
    locale: "es_ES",
    type: "website",
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
