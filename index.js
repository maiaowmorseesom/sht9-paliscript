#!/usr/bin/env node

const args = process.argv.slice(2);

// On no arg
if (args.length === 0) {
  console.log('Welcome to paliscript, use "paliscript help" to see available commands.');
} 
// on args
else {
    switch (args[0]) {
        case 'help':
            console.log('================= paliscript help =================');
            console.log('help - Show this help message');
            break;
        default:
            console.log(`Unknown command: "${args[0]}"`);
            console.log('Try running: paliscript help');
    }
}