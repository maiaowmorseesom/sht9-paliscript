#!/usr/bin/env node

import createPali from "./create-pali/index.js";
import frontend from "./frontend/index.js";
import chant from "./chant/index.js";
import runPali from "./run-pali/index.js";
import path from "path";

const args = process.argv.slice(2);
const command = args[0];
const options = args.slice(1);

// Display help message
function showHelp() {
  console.log("================= paliscript help =================");
  console.log("paliscript                        - Launch the web frontend");
  console.log("paliscript help, -h               - Show this help message");
  console.log("paliscript create-pali [...files] - Convert JS files to sacred Pali script");
  console.log("paliscript -cp [...files]         - Convert JS files to sacred Pali script");
  console.log("paliscript chant [...files]       - Create blessed voice of enchanted code");
  console.log("paliscript -c [...files]          - Create blessed voice of enchanted code");
  console.log("paliscript run [...files.paliscript] - Run .paliscript files directly");
  console.log("paliscript -r [...files.paliscript]  - Run .paliscript files directly");
  console.log("");
  console.log("Commands:");
  console.log("  create-pali: Convert JavaScript files to sacred Pali script");
  console.log("  chant: Generate blessed voice from JS or Pali files");
  console.log("         - JS files will be converted to Pali first");
  console.log("         - Only JS and Pali files can be blessed");
  console.log("  run: Execute .paliscript files directly with Node.js");
  console.log("       - Converts Pali to JavaScript behind the scenes");
  console.log("===================================================");
}

// Check if the first argument is a .paliscript file (for direct execution)
if (args.length > 0 && args[0].endsWith('.paliscript')) {
  runPali(args);
} else {
  // Handle commands
  switch (command) {
    case "help":
    case "--help":
    case "-h":
      showHelp();
      break;
    case "-cp":
    case "create-pali": {
      createPali(options);
      break;
    }
    case "-c":
    case "chant": {
      chant(options);
      break;
    }
    case "run":
    case "-r":
      runPali(options);
      break;
    case "help":
    case "-h":
      showHelp();
      break;
    default:
      if (!command) {
        frontend();
      } else {
        console.log(`Unknown command: ${command}`);
        showHelp();
      }
  }
}
