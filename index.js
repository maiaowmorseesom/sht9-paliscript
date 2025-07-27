#!/usr/bin/env node

import createPali from "./create-pali/index.js";
import frontend from "./frontend/index.js";
import chant from "./chant/index.js";

const args = process.argv.slice(2);
const command = args[0];
const options = args.slice(1);

// Display help message
function showHelp() {
  console.log("================= paliscript help =================");
  console.log("paliscript                        - Launch the web frontend");
  console.log("paliscript help, -h               - Show this help message");
  console.log("paliscript create-pali [...files] - Convert JS files to sacred Pali script");
  console.log("paliscript chant [...files]       - Create blessed voice of enchanted code");
  console.log("");
  console.log("Commands:");
  console.log("  create-pali: Convert JavaScript files to sacred Pali script");
  console.log("  chant: Generate blessed voice from JS or Pali files");
  console.log("         - JS files will be converted to Pali first");
  console.log("         - Only JS and Pali files can be blessed");
  console.log("===================================================");
}

// On no arg
if (args.length === 0) {
  frontend();
}
// on args
else {
  switch (command) {
    case "help":
    case "--help":
    case "-h":
      showHelp();
      break;
    case "create-pali": {
      createPali(options);
      break;
    }
    case "chant": {
      chant(options);
      break;
    }
    default:
      console.log(`Unknown command: "${command}"`);
      console.log("Try running: paliscript help");
  }
}
