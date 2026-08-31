import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { colors, log } from './utils/colors.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const TEMPLATES_DIR = path.join(ROOT_DIR, 'templates');

export function showHelp() {
  console.log(`
${colors.bold}${colors.cyan}Aigent CLI${colors.reset} - AI Rules & Markdown Guidelines Initializer

${colors.bold}USAGE:${colors.reset}
  ${colors.green}aigent${colors.reset} [options]
  ${colors.green}npx aigent${colors.reset} [options]

${colors.bold}OPTIONS:${colors.reset}
  ${colors.yellow}--init${colors.reset}                 Initialize AI rule files (defaults to Antigravity format)
  ${colors.yellow}--init=agy${colors.reset}             Initialize for Google Antigravity (.agents/rules/)
  ${colors.yellow}--init=universal${colors.reset}       Initialize universal AGENTS.md and guidelines
  ${colors.yellow}-f, --force${colors.reset}            Overwrite existing rule files
  ${colors.yellow}--dry-run${colors.reset}              Show what files would be created without writing
  ${colors.yellow}-h, --help${colors.reset}             Display this help message
  ${colors.yellow}-v, --version${colors.reset}          Display version information

${colors.bold}INCLUDED RULES:${colors.reset}
  ${colors.dim}•${colors.reset} simple-english.md   Clear, concise, plain English standards
  ${colors.dim}•${colors.reset} no-pills.md         Human UI design rules (No AI slop, no generic pill spam)
  ${colors.dim}•${colors.reset} dry.md              Don't Repeat Yourself principles
  ${colors.dim}•${colors.reset} solid.md            SOLID architecture & design principles
  ${colors.dim}•${colors.reset} no-mocks.md         Pragmatic testing (real integration over fragile mocks)
  ${colors.dim}•${colors.reset} code-standards.md   Type safety, defensive error handling, verification
  ${colors.dim}•${colors.reset} AGENTS.md           Master agent guidelines file

${colors.bold}EXAMPLES:${colors.reset}
  ${colors.gray}$ aigent --init${colors.reset}
  ${colors.gray}$ aigent --init=agy --force${colors.reset}
`);
}

export function showVersion() {
  try {
    const pkgPath = path.join(ROOT_DIR, 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    console.log(`aigent v${pkg.version}`);
  } catch {
    console.log('aigent v1.0.0');
  }
}

export function initProject(options = {}) {
  const targetDir = options.targetDir || process.cwd();
  const profile = (options.profile || 'agy').toLowerCase();
  const force = !!options.force;
  const dryRun = !!options.dryRun;

  console.log(`\n${colors.bold}${colors.magenta}🚀 Initializing Aigent rules for [${profile.toUpperCase()}]...${colors.reset}\n`);

  const templateProfileDir = path.join(TEMPLATES_DIR, 'agy');

  if (!fs.existsSync(templateProfileDir)) {
    log.error(`Template profile "${profile}" not found at ${templateProfileDir}`);
    process.exit(1);
  }

  // 1. Determine destination paths
  const agentsDir = path.join(targetDir, '.agents');
  const rulesDir = path.join(agentsDir, 'rules');
  const rootAgentsMd = path.join(targetDir, 'AGENTS.md');
  const templateRulesDir = path.join(templateProfileDir, 'rules');
  const templateAgentsMd = path.join(templateProfileDir, 'AGENTS.md');

  const filesToCopy = [];

  // Rules in .agents/rules/
  if (fs.existsSync(templateRulesDir)) {
    const ruleFiles = fs.readdirSync(templateRulesDir);
    for (const file of ruleFiles) {
      if (file.endsWith('.md')) {
        filesToCopy.push({
          src: path.join(templateRulesDir, file),
          dest: path.join(rulesDir, file),
          relDest: path.join('.agents', 'rules', file)
        });
      }
    }
  }

  // Master AGENTS.md in root
  if (fs.existsSync(templateAgentsMd)) {
    filesToCopy.push({
      src: templateAgentsMd,
      dest: rootAgentsMd,
      relDest: 'AGENTS.md'
    });
  }

  if (dryRun) {
    log.info(`${colors.bold}Dry Run:${colors.reset} The following files would be created:`);
    for (const item of filesToCopy) {
      console.log(`  ${colors.cyan}+${colors.reset} ${item.relDest}`);
    }
    return;
  }

  // Create directories
  if (!fs.existsSync(rulesDir)) {
    fs.mkdirSync(rulesDir, { recursive: true });
  }

  let createdCount = 0;
  let skippedCount = 0;

  for (const item of filesToCopy) {
    const exists = fs.existsSync(item.dest);
    if (exists && !force) {
      log.warn(`Skipped (already exists): ${colors.yellow}${item.relDest}${colors.reset} (use --force to overwrite)`);
      skippedCount++;
      continue;
    }

    const content = fs.readFileSync(item.src, 'utf8');
    fs.writeFileSync(item.dest, content, 'utf8');
    log.success(`Created: ${colors.green}${item.relDest}${colors.reset}`);
    createdCount++;
  }

  console.log(`\n${colors.bold}${colors.green}Done!${colors.reset} ${createdCount} file(s) created, ${skippedCount} file(s) skipped.`);
  console.log(`${colors.dim}Your AI assistants (Antigravity, Cursor, Claude, etc.) will now adhere to these standards.${colors.reset}\n`);
}
