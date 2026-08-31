#!/usr/bin/env node

import { initProject, showHelp, showVersion } from '../src/index.js';

const args = process.argv.slice(2);

function parseArgs(args) {
  const options = {
    init: false,
    profile: 'agy',
    force: false,
    dryRun: false,
    help: false,
    version: false
  };

  for (const arg of args) {
    if (arg === '--help' || arg === '-h' || arg === 'help') {
      options.help = true;
    } else if (arg === '--version' || arg === '-v' || arg === 'version') {
      options.version = true;
    } else if (arg === '--force' || arg === '-f') {
      options.force = true;
    } else if (arg === '--dry-run') {
      options.dryRun = true;
    } else if (arg === '--init' || arg === 'init') {
      options.init = true;
    } else if (arg.startsWith('--init=')) {
      options.init = true;
      options.profile = arg.split('=')[1] || 'agy';
    }
  }

  return options;
}

const options = parseArgs(args);

if (options.help || (args.length === 0 && !options.init)) {
  showHelp();
  process.exit(0);
}

if (options.version) {
  showVersion();
  process.exit(0);
}

if (options.init) {
  initProject({
    profile: options.profile,
    force: options.force,
    dryRun: options.dryRun,
    targetDir: process.cwd()
  });
}
