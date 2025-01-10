import { SigemLogoWithTitle } from "@/components/logo/sigem-logo";
import { TramitesSinCuentaCard } from "@/components/home/tramites-sin-cuenta-card";
import TramitesConCuentaCard from "@/components/home/tramites-con-cuenta-card";
import ImportanteCard from "@/components/home/importante-card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 space-y-12">
      <ImportanteCard />
      <div className="text-center">
        <SigemLogoWithTitle />
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
          El Sistema Integral de Gestión Municipal (SIGEM) de la ciudad de San
          Luis es una plataforma diseñada para facilitar a los ciudadanos la
          realización de trámites de manera sencilla y eficiente.
        </p>
      </div>
      <div className="w-full max-w-2xl space-y-8">
        <TramitesSinCuentaCard />
        <TramitesConCuentaCard />
      </div>
    </div>
  );
}
