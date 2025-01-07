"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

const SigemLogo = () => {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/sigem-blanco.png" : "/sigem-azul.png";

  return (
    <>
      <Image
        src={logoSrc}
        alt="SIGEM"
        width={250}
        height={250}
        className="mx-auto mb-8"
        style={{ height: "auto", maxWidth: "100%" }}
      />
      <h1 className="text-4xl font-bold tracking-tight mb-4">
        Sistema Integral de Gestión Municipal
      </h1>
    </>
  );
};
export default SigemLogo;
