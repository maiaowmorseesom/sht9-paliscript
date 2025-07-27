import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { execSync } from "child_process";
import { createRequire } from "module";
import os from "os";

// Get the directory name using ES module approach
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

// Load the JSON mapping for conversion
let paliToJsMap = {};

/**
 * Escapes special characters in a string for use in a regular expression
 * @param {string} string The string to escape
 * @returns {string} The escaped string
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Converts text from Pali to JavaScript
 * @param {string} text The text to convert
 * @returns {string} The converted text
 */
function convertPaliToJs(text) {
  const sortedKeys = Object.keys(paliToJsMap).sort((a, b) => b.length - a.length);
  const regex = new RegExp(
    sortedKeys.map((key) => escapeRegExp(key)).join("|"),
    "g"
  );
  return text.replace(regex, (matched) => paliToJsMap[matched]);
}

/**
 * Runs a .pali file by converting it to JavaScript and executing with Node.js
 * @param {string} filePath Path to the .pali file
 */
async function runPaliScript(filePath) {
  try {
    // Load the JSON file if not already loaded
    if (Object.keys(paliToJsMap).length === 0) {
      const jsonPath = path.join(dirname(__dirname), 'json', 'th-pali-js-key.json');
      const jsonData = await fs.readFile(jsonPath, 'utf-8');
      const jsonObj = JSON.parse(jsonData);
      
      // Build the conversion map
      for (const key in jsonObj) {
        if (jsonObj.hasOwnProperty(key)) {
          paliToJsMap[key] = jsonObj[key].js;
        }
      }
    }

    // Read the .pali file
    const paliContent = await fs.readFile(filePath, "utf-8");
    
    // Convert Pali to JavaScript
    const jsContent = convertPaliToJs(paliContent);
    
    // Create a temporary JS file
    const tempDir = os.tmpdir();
    const tempFilePath = path.join(tempDir, `${path.basename(filePath, '.pali')}_temp.js`);
    
    await fs.writeFile(tempFilePath, jsContent);
    
    // Execute the JS file with Node.js
    try {
      // Pass any arguments from the original command
      const args = process.argv.slice(3).join(' ');
      execSync(`node ${tempFilePath} ${args}`, { stdio: 'inherit' });
    } finally {
      // Clean up the temporary file
      await fs.unlink(tempFilePath).catch(() => {});
    }
  } catch (error) {
    console.error(`Error running .pali file: ${error.message}`);
    process.exit(1);
  }
}

export default async (args) => {
  if (!args || args.length === 0) {
    console.error("Please provide a .pali file to run");
    process.exit(1);
  }
  
  const filePath = args[0];
  if (!filePath.endsWith('.pali')) {
    console.error("File must have .pali extension");
    process.exit(1);
  }
  
  await runPaliScript(filePath);
}; 