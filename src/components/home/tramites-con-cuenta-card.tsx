import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const TramitesConCuentaCard = () => {
  return (
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
          necesario contar con una cuenta SIGEM. Si ya tienes una cuenta, inicia
          sesión. Si aún no tienes una cuenta, puedes crearla fácilmente.
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
  );
};
export default TramitesConCuentaCard;
