"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSidebar } from "@/components/ui/sidebar";

export const EscudoMunicipalCollapsable = () => {
  const { theme } = useTheme();
  const { state } = useSidebar();

  const imageSrc =
    theme === "dark"
      ? state === "expanded"
        ? "/escudo-municipal-blanco-2x.png"
        : "/escudo-municipal-blanco-2x-square.png"
      : state === "expanded"
        ? "/escudo-municipal-azul-2x.png"
        : "/escudo-municipal-azul-2x-square.png";

  return <EscudoMunicipal imageSrc={imageSrc} />;
};

export const EscudoMunicipal = ({ imageSrc }: { imageSrc?: string }) => {
  const { theme } = useTheme();

  const fallbackImageSrc =
    theme === "dark"
      ? "/escudo-municipal-blanco-2x.png"
      : "/escudo-municipal-azul-2x.png";

  return (
    <Link href="/">
      <Image
        src={imageSrc || fallbackImageSrc}
        alt="Escudo Municipal"
        width={173}
        height={173}
        style={{ height: "auto", maxWidth: "100%" }}
      />
    </Link>
  );
};
