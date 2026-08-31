import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const SHARED_AGY_DIR = path.join(ROOT_DIR, 'shared', 'templates', 'agy');
const SHARED_RULES_DIR = path.join(SHARED_AGY_DIR, 'rules');
const SHARED_AGENTS_MD = path.join(SHARED_AGY_DIR, 'AGENTS.md');

const TARGETS = [
  // 1. Workspace root .agents & AGENTS.md
  {
    rulesDir: path.join(ROOT_DIR, '.agents', 'rules'),
    agentsMd: path.join(ROOT_DIR, 'AGENTS.md'),
    label: 'Workspace (.agents)'
  },
  // 2. Extension templates
  {
    rulesDir: path.join(ROOT_DIR, 'extension', 'templates', 'agy', 'rules'),
    agentsMd: path.join(ROOT_DIR, 'extension', 'templates', 'agy', 'AGENTS.md'),
    label: 'Extension (extension/templates/agy)'
  },
  // 3. CLI templates
  {
    rulesDir: path.join(ROOT_DIR, 'cli', 'templates', 'agy', 'rules'),
    agentsMd: path.join(ROOT_DIR, 'cli', 'templates', 'agy', 'AGENTS.md'),
    label: 'CLI (cli/templates/agy)'
  },
  // 4. Antigravity global configuration
  {
    rulesDir: path.join(os.homedir(), '.gemini', 'config', 'rules'),
    agentsMd: path.join(os.homedir(), '.gemini', 'config', 'AGENTS.md'),
    extraAgentsMd: path.join(os.homedir(), '.gemini', 'config', 'GEMINI.md'),
    label: 'Global Antigravity (~/.gemini/config)'
  }
];

console.log('🔄 Syncing rules from shared/templates/agy across all destinations...\n');

if (!fs.existsSync(SHARED_AGY_DIR)) {
  console.error('❌ Shared templates directory not found at', SHARED_AGY_DIR);
  process.exit(1);
}

for (const target of TARGETS) {
  try {
    // 1. Ensure rules directory exists
    if (!fs.existsSync(target.rulesDir)) {
      fs.mkdirSync(target.rulesDir, { recursive: true });
    }

    // 2. Copy all rules from shared rules directory
    if (fs.existsSync(SHARED_RULES_DIR)) {
      const files = fs.readdirSync(SHARED_RULES_DIR);
      for (const file of files) {
        if (file.endsWith('.md')) {
          const src = path.join(SHARED_RULES_DIR, file);
          const dest = path.join(target.rulesDir, file);
          fs.copyFileSync(src, dest);
        }
      }
    }

    // 3. Copy master AGENTS.md
    if (fs.existsSync(SHARED_AGENTS_MD) && target.agentsMd) {
      const agentsMdDir = path.dirname(target.agentsMd);
      if (!fs.existsSync(agentsMdDir)) {
        fs.mkdirSync(agentsMdDir, { recursive: true });
      }
      fs.copyFileSync(SHARED_AGENTS_MD, target.agentsMd);
      if (target.extraAgentsMd) {
        fs.copyFileSync(SHARED_AGENTS_MD, target.extraAgentsMd);
      }
    }

    console.log(`  ✔ Successfully synced to ${target.label}`);
  } catch (err) {
    console.warn(`  ⚠ Warning: Could not sync to ${target.label}: ${err.message}`);
  }
}

console.log('\n✨ All rules and templates are in complete sync!\n');
