import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EscudoMunicipalProps {
  imageSrc?: string;
}

const EscudoMunicipal: React.FC<EscudoMunicipalProps> = ({ imageSrc }) => {
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

export default EscudoMunicipal;
