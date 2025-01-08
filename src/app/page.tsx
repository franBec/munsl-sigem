import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, UserCircle } from "lucide-react";
import { SigemLogoWithTitle } from "@/components/logo/sigem-logo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 space-y-12">
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
