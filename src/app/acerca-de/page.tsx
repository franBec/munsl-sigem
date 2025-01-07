import { version as frontendVersion } from "../../../package.json";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-6">Acerca de</h1>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Proyecto</th>
            <th className="border border-gray-400 px-4 py-2">Tecnología</th>
            <th className="border border-gray-400 px-4 py-2">Versión</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">
              SIGEM (Frontend)
            </td>
            <td className="border border-gray-400 px-4 py-2">
              Next.js 14.2.16
            </td>
            <td className="border border-gray-400 px-4 py-2">
              {frontendVersion}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">
              SIGEM (Backend)
            </td>
            <td className="border border-gray-400 px-4 py-2">
              Groovy Spring Boot 3.4.0
            </td>
            <td className="border border-gray-400 px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-8 text-center text-sm text-gray-600">
        Made with love by Pollito{" "}
        <span role="img" aria-label="chick">
          🐤
        </span>
      </p>
    </div>
  );
};
export default Page;
