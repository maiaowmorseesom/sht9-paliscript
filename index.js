#!/usr/bin/env node

import createPali from "./create-pali/index.js";
import frontend from "./frontend/index.js";
import chant from "./chant/index.js";

const args = process.argv.slice(2);
const command = args[0];
const options = args.slice(1);

// On no arg
if (args.length === 0) {
  frontend();
}
// on args
else {
  switch (command) {
    case "help":
      console.log("================= paliscript help =================");
      console.log("help\t\t\t- Show this help message");
      console.log("create-pali [...files]\t- Create a new paliscript");
      console.log("chant [...files]\t- Chant paliscript files");
      console.log("===================================================");
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
