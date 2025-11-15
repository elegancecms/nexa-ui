import { defineConfig } from "tsup";
import * as fs from "fs-extra";
import { join } from "path";

export default defineConfig({
  entry: ["src/cli.ts"],
  format: ["cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  banner: {
    js: "#!/usr/bin/env node",
  },
  noExternal: ["fs-extra", "chalk", "commander", "inquirer", "glob"],
  onSuccess: async () => {
    // Copy templates directory to dist
    const templatesSrc = join(__dirname, "templates");
    const templatesDest = join(__dirname, "dist", "templates");
    
    if (await fs.pathExists(templatesSrc)) {
      await fs.copy(templatesSrc, templatesDest, { overwrite: true });
      console.log("✓ Templates copied to dist");
    }
  },
});

