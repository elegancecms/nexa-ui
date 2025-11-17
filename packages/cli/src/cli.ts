#!/usr/bin/env node

import { Command } from "commander";
import { addComponent } from "./commands/add";
import { init } from "./commands/init";

const program = new Command();

program
  .name("nexa")
  .description("CLI tool for @khaimerax/nexa-ui components")
  .version("0.1.0");

program
  .command("init")
  .description("Initialize @khaimerax/nexa-ui in your project")
  .action(async () => {
    await init();
  });

program
  .command("add")
  .description("Add a component to your project")
  .argument("<component>", "Component name (e.g., button, card)")
  .option("-d, --dir <dir>", "Target directory (default: auto-detect)")
  .action(async (component: string, options: { dir?: string }) => {
    // Auto-detect Laravel project
    const fs = require("fs-extra");
    const path = require("path");
    const isLaravel = await fs.pathExists(path.join(process.cwd(), "artisan")) ||
                      await fs.pathExists(path.join(process.cwd(), "app")) ||
                      await fs.pathExists(path.join(process.cwd(), "resources"));
    
    const defaultDir = options.dir || (isLaravel ? "resources/js/components/ui" : "components/ui");
    await addComponent(component, defaultDir);
  });

program.parse();

