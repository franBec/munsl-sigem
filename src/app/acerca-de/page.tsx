import { version as frontendVersion } from "../../../package.json";
import { SigemLogoWithTitle } from "@/components/logo/sigem-logo";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 space-y-12">
      <div>
        <SigemLogoWithTitle/>
      </div>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-foreground px-4 py-2">Proyecto</th>
            <th className="border border-foreground px-4 py-2">Rol</th>
            <th className="border border-foreground px-4 py-2">Tecnología</th>
            <th className="border border-foreground px-4 py-2">Versión</th>
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
              {frontendVersion}
            </td>
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
            <td className="border border-foreground px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>
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
export default Page;
