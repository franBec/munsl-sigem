"use client";
import packageJson from "../../../../package.json";
import { SigemLogoWithTitle } from "@/components/logo/sigem-logo";
import { useGetActuatorInfo } from "@/__generated__/api/munsl_sigem_backend/munsl-sigem-backend-api";
import { ErrorDetails } from "@/components/layout/error-boundary";

const SystemInfo = () => {
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
    <div className="flex flex-col items-center justify-center space-y-12">
      <div>
        <SigemLogoWithTitle />
      </div>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-foreground px-4 py-2">Proyecto</th>
            <th className="border border-foreground px-4 py-2">Rol</th>
            <th className="border border-foreground px-4 py-2">Tecnología</th>
            <th className="border border-foreground px-4 py-2">Versión</th>
            <th className="border border-foreground px-4 py-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-foreground px-4 py-2">
              <a
                href="https://github.com/franBec/munsl_sigem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                munsl_sigem
              </a>
            </td>
            <td className="border border-foreground px-4 py-2">Frontend</td>
            <td className="border border-foreground px-4 py-2">
              Next.js 14.2.16
            </td>
            <td className="border border-foreground px-4 py-2">
              {packageJson.version}
            </td>
            <td className="border border-foreground px-4 py-2">OK</td>
          </tr>
          <tr>
            <td className="border border-foreground px-4 py-2">
              <a
                href="https://github.com/franBec/munsl_sigem_backend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                munsl_sigem_backend
              </a>
            </td>
            <td className="border border-foreground px-4 py-2">Backend</td>
            <td className="border border-foreground px-4 py-2">
              Groovy Spring Boot 3.4.0
            </td>
            <td className="border border-foreground px-4 py-2">
              {isPending ? (
                <span className="animate-pulse bg-gray-300 rounded w-16 h-4 inline-block"></span>
              ) : (
                backendVersion
              )}
            </td>
            <td className="border border-foreground px-4 py-2">
              {isPending ? (
                <span className="animate-pulse bg-gray-300 rounded w-8 h-4 inline-block"></span>
              ) : (
                backendStatus
              )}
            </td>
          </tr>
        </tbody>
      </table>
      {error && (
        <div className="max-w-xl w-full mx-auto">
          <ErrorDetails error={error} />
        </div>
      )}
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Made with love by{" "}
        <a
          href="https://pollito.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Pollito{" "}
          <span role="img" aria-label="chick">
            🐤
          </span>
        </a>
      </p>
    </div>
  );
};

export default SystemInfo;
