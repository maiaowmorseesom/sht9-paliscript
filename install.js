#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { execSync } from 'child_process';

// Get the directory name using ES module approach
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function install() {
  try {
    // Create bin directory if it doesn't exist
    const binDir = path.join(__dirname, 'bin');
    await fs.mkdir(binDir, { recursive: true });
    
    // Make the paliscript bin script executable
    const paliscriptBin = path.join(binDir, 'paliscript');
    await fs.chmod(paliscriptBin, 0o755).catch(() => {});
    
    console.log('✅ Installation completed successfully');
    console.log('');
    console.log('To run .paliscript files directly:');
    console.log('1. Add the bin directory to your PATH:');
    console.log(`   export PATH="$PATH:${binDir}"`);
    console.log('2. Make your .paliscript file executable:');
    console.log('   chmod +x your-file.paliscript');
    console.log('3. Add a shebang to the top of your .paliscript file:');
    console.log('   #!/usr/bin/env paliscript');
    console.log('');
    console.log('Or simply run: paliscript run your-file.paliscript');
  } catch (error) {
    console.error('❌ Installation failed:', error.message);
    process.exit(1);
  }
}

install(); 