import { defineConfig } from "orval";

export default defineConfig({
  munsl_sigem_backend: {
    output: {
      mode: "split",
      target:
        "src/__generated__/api/munsl_sigem_backend/munsl-sigem-backend-api.ts",
      schemas: "src/__generated__/api/munsl_sigem_backend/model",
      client: "react-query",
      mock: false,
    },
    input: {
      target: "src/openapi/munsl_sigem_backend.yaml",
    },
  },
});
