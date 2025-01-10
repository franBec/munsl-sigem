import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Info, UserCircle } from "lucide-react";
import { SigemLogoWithTitle } from "@/components/logo/sigem-logo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 space-y-12">
      <div className="w-full max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-6 w-6" />
              IMPORTANTE
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Esta página{" "}
              <strong>
                no es{" "}
                <a
                  href="https://sigem.sanluislaciudad.gob.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  SIGEM
                </a>
                .
              </strong>{" "}
              Es un <strong>MVP (Producto Mínimo Viable)</strong> de una posible
              reescritura del sistema.
            </p>
            <p className="mb-4">
              El sistema puede sentirse extremadamente lento en la primera
              petición que involucre una interacción del backend. Esto se debe a
              que el backend está hosteado en una instancia gratuita de{" "}
              <a
                href="https://dashboard.render.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                render
              </a>{" "}
              (Las instancias gratuitas dejan de funcionar por inactividad, lo
              que puede retrasar la primera solicitud después de mucho tiempo
              por algunos minutos)
              <ul className="my-2 list-disc list-inside">
                <li>David (o quien corresponda), habiliten un VPS / nube / algo, y un dominio, asi no dependo de versiones gratuitas y lentas.</li>
              </ul>
            </p>
            <p>
            Para mas información, visite{" "}
              <Link
                href="/acerca-de"
                className="text-primary hover:underline inline-flex items-center"
              >
                Acerca del proyecto
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <SigemLogoWithTitle />
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
          El Sistema Integral de Gestión Municipal (SIGEM) de la ciudad de San
          Luis es una plataforma diseñada para facilitar a los ciudadanos la
          realización de trámites de manera sencilla y eficiente.
        </p>
      </div>

      <div className="w-full max-w-2xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Trámites sin cuenta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Es posible realizar los siguientes trámites sin contar con una
              cuenta SIGEM:
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tramite-1"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  Sample Trámite 1
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  href="/tramite-2"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  Sample Trámite 2
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCircle className="h-6 w-6" />
              Trámites con cuenta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              Para realizar otros trámites y acceder a servicios adicionales, es
              necesario contar con una cuenta SIGEM. Si ya tienes una cuenta,
              inicia sesión. Si aún no tienes una cuenta, puedes crearla
              fácilmente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="default" className="w-full sm:w-auto">
                <Link href="/auth/login">Iniciar sesión</Link>
              </Button>
              <Button asChild variant="secondary" className="w-full sm:w-auto">
                <Link href="/create-account">Crear una cuenta</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
