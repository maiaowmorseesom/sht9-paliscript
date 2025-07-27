#!/usr/bin/env node

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { spawnSync } from 'child_process';

// Get the directory name using ES module approach
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get the path to the main paliscript CLI
const mainCliPath = resolve(__dirname, '..', 'index.js');

// Get the script file path (the file being executed)
const scriptPath = process.argv[2];

if (!scriptPath) {
  console.error('No script file provided');
  process.exit(1);
}

// Run the paliscript CLI with the script file
const result = spawnSync('node', [mainCliPath, scriptPath, ...process.argv.slice(3)], {
  stdio: 'inherit'
});

// Forward the exit code
process.exit(result.status); 