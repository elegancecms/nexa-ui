import chalk from "chalk";
import * as fs from "fs-extra";
import * as path from "path";
import { glob } from "glob";

// Get current directory (CommonJS)
const getCurrentDir = () => {
  // CommonJS - require.main.filename points to the entry script
  if (require.main && require.main.filename) {
    return path.dirname(require.main.filename);
  }
  // Fallback
  return process.cwd();
};

// Get templates directory relative to the installed package
function getTemplatesDir(): string {
  // When installed as npm package, templates are in node_modules/@ayz/nexa/templates
  // When running from source, templates are in packages/cli/templates
  
  const currentDir = getCurrentDir();
  
  const possiblePaths = [
    path.join(currentDir, "../../templates"), // From dist/commands
    path.join(currentDir, "../templates"), // From dist
    path.join(process.cwd(), "node_modules", "@khaimerax", "nexa", "templates"), // Installed
    path.join(process.cwd(), "packages", "cli", "templates"), // From monorepo source
  ];

  for (const templatePath of possiblePaths) {
    if (fs.existsSync(templatePath)) {
      return templatePath;
    }
  }

  // Fallback
  return path.join(process.cwd(), "templates");
}

const TEMPLATES_DIR = getTemplatesDir();

export async function addComponent(componentName: string, targetDir: string) {
  console.log(chalk.blue(`Adding ${componentName} component...`));

  try {
    // Check if template exists
    const templatePath = path.join(TEMPLATES_DIR, componentName);
    if (!(await fs.pathExists(templatePath))) {
      console.error(
        chalk.red(
          `Component "${componentName}" not found.\n\nAvailable components:`
        )
      );

      // List available components
      const components = await fs.readdir(TEMPLATES_DIR);
      components.forEach((comp) => {
        console.log(chalk.cyan(`  - ${comp}`));
      });

      process.exit(1);
    }

    // Create target directory
    const targetPath = path.join(process.cwd(), targetDir);
    await fs.ensureDir(targetPath);

    // Copy template files
    const templateFiles = await glob("**/*", {
      cwd: templatePath,
      dot: false,
      ignore: ["node_modules/**"],
      absolute: false,
    });

    for (const file of templateFiles) {
      const srcPath = path.join(templatePath, file);
      const destPath = path.join(targetPath, file);

      // Skip directories, they'll be created automatically
      const stat = await fs.stat(srcPath);
      if (stat.isDirectory()) {
        continue;
      }

      // Ensure parent directory exists
      await fs.ensureDir(path.dirname(destPath));

      // Read and process file content
      let content = await fs.readFile(srcPath, "utf-8");

      // Replace imports if needed (e.g., @/lib/utils -> ../../lib/utils)
      // This is a simple implementation, can be enhanced

      await fs.writeFile(destPath, content);
    }

    console.log(chalk.green(`✓ Component "${componentName}" added successfully!`));
    console.log(chalk.blue(`\nFiles created in: ${targetDir}/${componentName}`));
    console.log(
      chalk.yellow(
        "\nDon't forget to import and use the component in your code!"
      )
    );
  } catch (error) {
    console.error(chalk.red(`Error adding component "${componentName}":`), error);
    process.exit(1);
  }
}

