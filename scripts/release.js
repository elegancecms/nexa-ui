#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function exec(command, options = {}) {
  try {
    execSync(command, { stdio: 'inherit', ...options });
    return true;
  } catch (error) {
    return false;
  }
}

function getPackageVersion(packagePath) {
  const packageJsonPath = path.join(packagePath, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  return packageJson.version;
}

function updatePackageVersion(packagePath, versionType) {
  const packageJsonPath = path.join(packagePath, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  const [major, minor, patch] = packageJson.version.split('.').map(Number);
  let newVersion;
  
  if (versionType === 'major') {
    newVersion = `${major + 1}.0.0`;
  } else if (versionType === 'minor') {
    newVersion = `${major}.${minor + 1}.0`;
  } else {
    newVersion = `${major}.${minor}.${patch + 1}`;
  }
  
  packageJson.version = newVersion;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  return newVersion;
}

function checkGitStatus() {
  log('\n📋 Checking git status...', 'blue');
  const status = execSync('git status --porcelain', { encoding: 'utf8' });
  if (status.trim()) {
    log('⚠️  You have uncommitted changes. Please commit or stash them first.', 'yellow');
    return false;
  }
  return true;
}

function main() {
  const args = process.argv.slice(2);
  const versionType = args[0] || 'patch'; // patch, minor, major
  
  if (!['patch', 'minor', 'major'].includes(versionType)) {
    log('❌ Invalid version type. Use: patch, minor, or major', 'red');
    process.exit(1);
  }
  
  log('\n🚀 Starting release process...', 'bright');
  log(`📦 Version type: ${versionType}`, 'blue');
  
  // 1. Check git status
  if (!checkGitStatus()) {
    process.exit(1);
  }
  
  // 2. Build packages
  log('\n🔨 Building packages...', 'blue');
  if (!exec('npm run build')) {
    log('❌ Build failed!', 'red');
    process.exit(1);
  }
  log('✅ Build successful!', 'green');
  
  // 3. Update version
  log('\n📝 Updating version...', 'blue');
  const cliPath = path.join(__dirname, '..', 'packages', 'cli');
  const oldVersion = getPackageVersion(cliPath);
  const newVersion = updatePackageVersion(cliPath, versionType);
  log(`✅ Version updated: ${oldVersion} → ${newVersion}`, 'green');
  
  // 4. Publish to NPM
  log('\n📤 Publishing to NPM...', 'blue');
  if (!exec('npm run publish:cli')) {
    log('❌ NPM publish failed!', 'red');
    process.exit(1);
  }
  log('✅ Published to NPM successfully!', 'green');
  
  // 5. Git commit and push
  log('\n📝 Committing changes...', 'blue');
  exec('git add packages/cli/package.json');
  
  const commitMessage = `chore: release v${newVersion}`;
  if (!exec(`git commit -m "${commitMessage}"`)) {
    log('⚠️  No changes to commit or commit failed', 'yellow');
  } else {
    log('✅ Changes committed!', 'green');
  }
  
  log('\n🚀 Pushing to GitHub...', 'blue');
  if (!exec('git push')) {
    log('❌ Git push failed!', 'red');
    process.exit(1);
  }
  log('✅ Pushed to GitHub successfully!', 'green');
  
  log('\n🎉 Release completed successfully!', 'green');
  log(`📦 Version: ${newVersion}`, 'blue');
  log(`🔗 NPM: https://www.npmjs.com/package/@khaimerax/nexa`, 'blue');
  log(`🔗 GitHub: https://github.com/elegancecms/nexa-ui`, 'blue');
}

main();

