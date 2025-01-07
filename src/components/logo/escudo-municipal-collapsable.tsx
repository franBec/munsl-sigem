import { useTheme } from "next-themes";
import { useSidebar } from "@/components/ui/sidebar";
import EscudoMunicipal from "@/components/logo/escudo-municipal";

const EscudoMunicipalCollapsable = () => {
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

export default EscudoMunicipalCollapsable;
