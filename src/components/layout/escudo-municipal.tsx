import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useSidebar } from "@/components/ui/sidebar";

const EscudoMunicipal = () => {
  const { theme } = useTheme();
  const { state } = useSidebar();

  const logoSrc =
    theme === "dark"
      ? state === "expanded"
        ? "/escudo-municipal-blanco-2x.png"
        : "/escudo-municipal-blanco-2x-square.png"
      : state === "expanded"
        ? "/escudo-municipal-azul-2x.png"
        : "/escudo-municipal-azul-2x-square.png";

  return (
    <Link href="/" className="pl-2">
      <Image
        src={logoSrc}
        alt="Escudo Municipal"
        width={173}
        height={173}
        style={{ height: "auto", maxWidth: "100%" }}
      />
    </Link>
  );
};

export default EscudoMunicipal;
