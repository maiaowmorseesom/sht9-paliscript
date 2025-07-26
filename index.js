#!/usr/bin/env node

const args = process.argv.slice(2);
const command = args[0];
const options = args.slice(1);

// On no arg
if (args.length === 0) {
  console.log('Welcome to paliscript, use "paliscript help" to see all available commands.');
} 
// on args
else {
    switch (command) {
        case 'help':
            console.log('================= paliscript help =================');
            console.log('help\t\t\t- Show this help message');
            console.log('create-pali [...files]\t- Create a new paliscript');
            console.log('chant [...files]\t- Chant paliscript files');
            console.log('===================================================');
            break;
        case 'create-pali': {
           require('./create-pali/index.js')(options);;
            break;
        }
        case 'chant': {
            require('./chant/index.js')(options);
            break;
        }
        default:
            console.log(`Unknown command: "${command}"`);
            console.log('Try running: paliscript help');
    }
}