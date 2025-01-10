"use client";

import packageJson from "../../../../package.json";
import { SigemLogoWithTitle } from "@/components/logo/sigem-logo";
import { useGetActuatorInfo } from "@/__generated__/api/munsl_sigem_backend/munsl-sigem-backend-api";
import { ErrorDetails } from "@/components/layout/error-boundary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import React from "react";

const ProjectCard = ({
  title,
  role,
  technology,
  version,
  status,
  link,
}: {
  title: string;
  role: string;
  technology: string;
  version: string | React.ReactNode;
  status: string | React.ReactNode;
  link: string;
}) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        <span>{title}</span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <ExternalLink size={18} />
        </a>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <p>
          <strong>Rol:</strong> {role}
        </p>
        <p>
          <strong>Tecnología:</strong> {technology}
        </p>
        <p>
          <strong>Versión:</strong> {version}
        </p>
        {typeof status === "string" ? (
          <Badge variant={status === "OK" ? "default" : "destructive"}>
            {status}
          </Badge>
        ) : (
          status
        )}
      </div>
    </CardContent>
  </Card>
);

const SystemInfoCard: React.FC = () => {
  const {
    isPending,
    isError,
    data: response,
    error,
  } = useGetActuatorInfo({
    axios: { baseURL: process.env.NEXT_PUBLIC_API_MUNSL_SIGEM_BACKEND_URL },
  });

  const backendVersion = response?.data.build?.version || "-";
  const backendStatus = isError ? "No hay conexión" : "OK";

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Código y Licencia</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center space-y-8">
          <SigemLogoWithTitle />

          <p className="text-center max-w-2xl">
            Aún no se ha definido una licencia para este proyecto. Es de mi
            personal interés que fuera de licencia pública. Si el código
            permanece abierto, la licencia será especificada en futuras
            actualizaciones del repositorio.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <ProjectCard
              title="munsl_sigem"
              role="Frontend"
              technology="Next.js 14.2.16"
              version={packageJson.version}
              status="OK"
              link="https://github.com/franBec/munsl_sigem"
            />
            <ProjectCard
              title="munsl_sigem_backend"
              role="Backend"
              technology="Groovy Spring Boot 3.4.0"
              version={
                isPending ? (
                  <span className="animate-pulse bg-gray-300 rounded w-16 h-4 inline-block"></span>
                ) : (
                  backendVersion
                )
              }
              status={
                isPending ? (
                  <span className="animate-pulse bg-gray-300 rounded w-8 h-4 inline-block"></span>
                ) : (
                  backendStatus
                )
              }
              link="https://github.com/franBec/munsl_sigem_backend"
            />
          </div>

          {error && (
            <div className="max-w-xl w-full mx-auto">
              <ErrorDetails error={error} />
            </div>
          )}

          <p className="text-center text-sm text-muted-foreground">
            Made with love by{" "}
            <a
              href="https://pollito.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Pollito{" "}
              <span role="img" aria-label="chick">
                🐤
              </span>
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemInfoCard;
