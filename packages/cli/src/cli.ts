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
  .option("-d, --dir <dir>", "Target directory", "components/ui")
  .action(async (component: string, options: { dir?: string }) => {
    await addComponent(component, options.dir || "components/ui");
  });

program.parse();

