import { defineConfig } from "tsup";
import * as fs from "fs-extra";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

export default defineConfig({
  entry: ["src/cli.ts"],
  format: ["cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  noExternal: ["fs-extra", "chalk", "commander", "inquirer", "glob"],
  onSuccess: async () => {
    // Copy templates directory to dist
    const templatesSrc = join(__dirname, "templates");
    const templatesDest = join(__dirname, "dist", "templates");
    
    if (await fs.pathExists(templatesSrc)) {
      await fs.copy(templatesSrc, templatesDest, { overwrite: true });
      console.log("✓ Templates copied to dist");
    }
    
    // Remove shebang from cli.js for Windows compatibility
    const cliPath = join(__dirname, "dist", "cli.js");
    if (await fs.pathExists(cliPath)) {
      let content = readFileSync(cliPath, "utf8");
      // Remove shebang line if present (#!/usr/bin/env node)
      content = content.replace(/^#!.*\n/, "");
      writeFileSync(cliPath, content);
    }
  },
});

