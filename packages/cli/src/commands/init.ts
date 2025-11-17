import chalk from "chalk";
import * as fs from "fs-extra";
import * as path from "path";

const __dirname = path.resolve();

export async function init() {
  console.log(chalk.blue("Initializing @khaimerax/nexa-ui...\n"));

  try {
    // Check if package.json exists
    const packageJsonPath = path.join(process.cwd(), "package.json");
    if (!(await fs.pathExists(packageJsonPath))) {
      console.error(chalk.red("package.json not found. Please run this command in a project directory."));
      process.exit(1);
    }

    const packageJson = await fs.readJson(packageJsonPath);

    // Detect Laravel project
    const isLaravel = await fs.pathExists(path.join(process.cwd(), "artisan")) ||
                      await fs.pathExists(path.join(process.cwd(), "app")) ||
                      await fs.pathExists(path.join(process.cwd(), "resources"));

    // Determine directories based on project type
    let componentsDir: string;
    let utilsPath: string;

    if (isLaravel) {
      // Laravel project structure
      componentsDir = path.join(process.cwd(), "resources", "js", "components", "ui");
      utilsPath = path.join(process.cwd(), "resources", "js", "lib", "utils.ts");
    } else {
      // Standard React/Next.js project structure
      componentsDir = path.join(process.cwd(), "components", "ui");
      utilsPath = path.join(process.cwd(), "lib", "utils.ts");
    }

    // Check if Tailwind CSS is installed
    const hasTailwind =
      packageJson.dependencies?.tailwindcss ||
      packageJson.devDependencies?.tailwindcss;

    if (!hasTailwind) {
      console.log(
        chalk.yellow(
          "⚠️  Tailwind CSS not found. Please install it first:\n  npm install -D tailwindcss postcss autoprefixer"
        )
      );
    }

    // Create components/ui directory
    const componentsExists = await fs.pathExists(componentsDir);
    await fs.ensureDir(componentsDir);
    if (!componentsExists) {
      console.log(chalk.green(`✓ Created ${isLaravel ? "resources/js/components/ui" : "components/ui"} directory`));
    }

    // Create utils file for cn function
    const utilsDir = path.dirname(utilsPath);
    await fs.ensureDir(utilsDir);

    const cnFunction = `export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
`;

    if (!(await fs.pathExists(utilsPath))) {
      await fs.writeFile(utilsPath, cnFunction);
      console.log(chalk.green("✓ Created lib/utils.ts"));
    } else {
      console.log(chalk.yellow("⚠ lib/utils.ts already exists, skipping..."));
    }

    // Update tailwind.config.js if exists
    const tailwindConfigPath = path.join(process.cwd(), "tailwind.config.js");
    const tailwindConfigTsPath = path.join(process.cwd(), "tailwind.config.ts");

    let tailwindConfigPathToUse: string | null = null;
    if (await fs.pathExists(tailwindConfigTsPath)) {
      tailwindConfigPathToUse = tailwindConfigTsPath;
    } else if (await fs.pathExists(tailwindConfigPath)) {
      tailwindConfigPathToUse = tailwindConfigPath;
    }

    if (tailwindConfigPathToUse) {
      console.log(chalk.green(`✓ Found Tailwind config at ${tailwindConfigPathToUse}`));
      const contentPath = isLaravel 
        ? "resources/js/components/ui/**/*.{ts,tsx}"
        : "components/ui/**/*.{ts,tsx}";
      console.log(
        chalk.yellow(
          `  Make sure your content paths include '${contentPath}'`
        )
      );
    }

    console.log(chalk.green("\n✓ @khaimerax/nexa-ui initialized successfully!"));
    console.log(chalk.blue("\nYou can now add components with:"));
    const addCommand = isLaravel
      ? `  node node_modules/@khaimerax/nexa/dist/cli.js add button --dir resources/js/components/ui`
      : "  npx @khaimerax/nexa add button";
    console.log(chalk.cyan(addCommand));
    console.log(chalk.cyan(`  npx @khaimerax/nexa add card${isLaravel ? " --dir resources/js/components/ui" : ""}`));
  } catch (error) {
    console.error(chalk.red("Error initializing @khaimerax/nexa-ui:"), error);
    process.exit(1);
  }
}

