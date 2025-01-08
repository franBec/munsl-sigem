import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const GENERATED_FILE_PATH = path.resolve(
  "src/__generated__/api/munsl_sigem_backend/munsl-sigem-backend-zod-client.ts"
);

try {
  console.log("Running orval build...");
  execSync("pnpm run orval-build", { stdio: "inherit" });

  console.log("Running openapi-zod-client...");
  execSync("pnpm run openapi-zod-client", { stdio: "inherit" });

  console.log("Replacing zod import in generated file...");
  if (fs.existsSync(GENERATED_FILE_PATH)) {
    let fileContent = fs.readFileSync(GENERATED_FILE_PATH, "utf8");
    fileContent = fileContent.replace(
      'import { z } from "zod";',
      'import { z } from "@/lib/zod-es";'
    );
    fs.writeFileSync(GENERATED_FILE_PATH, fileContent, "utf8");
    console.log("Import replaced successfully.");
  } else {
    console.error(`File not found: ${GENERATED_FILE_PATH}`);
  }

  console.log("Prebuild tasks completed successfully.");
} catch (error) {
  console.error("An error occurred during the prebuild process:", error);
  process.exit(1);
}
