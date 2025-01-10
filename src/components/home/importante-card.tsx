"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ImportanteCard = () => {
  const [showImportante, setShowImportante] = useState(true);

  return (
    <>
      {showImportante && (
        <div className="w-full max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Info className="h-6 w-6" />
                  IMPORTANTE
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowImportante(false)}
                  aria-label="Cerrar mensaje importante"
                >
                  <X className="h-4 w-4" />
                </Button>
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
                Es un <strong>MVP (Producto Mínimo Viable)</strong> de una
                posible reescritura del sistema.
              </p>
              <p className="mb-4">
                El sistema puede sentirse extremadamente lento en la primera
                petición que involucre una interacción del backend. Esto se debe
                a que el backend está hosteado en una instancia gratuita de{" "}
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
                  <li>
                    David (o quien corresponda), habiliten un VPS / nube / algo,
                    y un domain, asi no dependo de versiones gratuitas y lentas.
                  </li>
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
      )}
    </>
  );
};
export default ImportanteCard;
