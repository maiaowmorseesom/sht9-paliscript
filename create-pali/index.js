import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name using ES module approach
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// We'll load the JSON file using fs.readFile
let jsToPaliMap;

/**
 * Escapes special characters in a string for use in a regular expression.
 * @param {string} str The string to escape.
 * @returns {string} The escaped string.
 */
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Converts text from JavaScript to Pali.
 * @param {string} text The text to convert.
 * @returns {string} The converted text.
 */
function convertText(text) {
  const map = jsToPaliMap;
  const sortedKeys = Object.keys(map).sort((a, b) => b.length - a.length);
  const regex = new RegExp(
    sortedKeys.map((key) => escapeRegExp(key)).join("|"),
    "g"
  );
  return text.replace(regex, (matched) => map[matched]["th-pali"]);
}

export default async (args) => {
  // Load the JSON file if not already loaded
  if (!jsToPaliMap) {
    const jsonPath = path.join(dirname(__dirname), 'json', 'js-pali-master.json');
    const jsonData = await fs.readFile(jsonPath, 'utf-8');
    jsToPaliMap = JSON.parse(jsonData);
  }

  await Promise.all(
    args.map(async (file) => {
      try {
        const data = await fs.readFile(file, "utf-8");

        // Convert the file content using the convertText function
        const processedData = convertText(data);

        const { dir, name } = path.parse(file);
        const newFileName = `${name}.pali`;
        const newFilePath = path.join(dir, newFileName);

        await fs.writeFile(newFilePath, processedData);

        console.log(`✅ Processed file created at: ${newFilePath}`);
      } catch (err) {
        console.error("❌ Error processing ", file, " : ", err.message);
let capuchina = `

██████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███████████████████████████████
████████████████████████████████████████████████████████████████████████████████
████████████████████████████████████████████████████████████████████████████████
███████████████████████████████████████████░▓███████████████████████████████████
██████████████████████████████████████████░░▒███████████████████████████████████
████████████████████████████████████████░░█░░░██████████████████████████████████
█████████████████████████████████████▓░░░░▓░▒░▓░████████████████████████████████
▓█████████████████████████████████░░█░▒█▒▓█░█░░░█░██████████████████████████████
▓██████████████████████████████░░█░░░▓░▓▒█▓█▓▒░░▒░██████████████████████████████
▓██████████████████████████████░░▓▓▓▒██░█▓█▒▓▓░█░█░░████████████████████████████
▓██████████████████▓░░░░░░░░░░░▒█▓░█░█▓▒▓░▒░▓░░░██░█████████████████████████████
▓██████████████░░░░░░░▒███████▓░▒▒░░░░░░░▓░░░░▒░░▒▓░░░░█████████████████████████
▓███████████░░░░▒████████▓▓▓█▓████████████▓█████▓░▒▓██░░░░░░████████████████████
▓█████████░░░▒█▓▓▓▓▓▓▓▒▓▓██▓▓▓▓▒░░░░░░░░░░░░░▒▒▓████▓██████░░░░█████████████████
▓████████▓░░█▓▓▓██▓▒▓██▓░░░░░░░░▒▓█░░░▓▓░░░▒▓░░▓▓▒░░░▓▓▓██████░░░███████████████
▓████████▓░░█▒▒▓▓▒▒▓▓░░░░▒▒▓▒▓▓▓▓█░░▓█▒░░▒▓░░░█▒░▓▓▓▒▒▒░░▓▓█▓▓██░░░█████████████
▒████████▓░░░█▓██▒▓▓▒░░░▓░▓░▓▓▒▓▓░░▓▓▒░░░▓░▓▓░░░░█▒▓▓▒▒▒▒░░▒▓▓▒▓██░░████████████
▒█████████▒▓░░▒▓██▓▓▓▓░░░▒▒▒░▒░░░▒█▒░░░░▒▒░░░▓█▓░░░▓▓▒░░▒▒▒░▒▓▓▒██░░████████████
▒██████░▓█░▓█▒░░░▓██████░░░░░▒░▒▓▒░░░░▒▓▓░░▒░░░░▒██▒░░▒▒░░░░▒▓▓▓█▒░░████████████
▒██████░░█▒▒▓▓██░░░░▒███████░░░░░░░░▒▒▒░░░░░▓▓▒▒░░░░░▒░░░░▓█████░░░░████████████
▒██████░░███▒▒▒▓███▒░░░░░░▓████████▒░░░░░░░░░░░░░░░░▒▓█████▓░░░░░▒░▒████████████
▒███████▓▓▒██▒▒▓▓▓▓▓▓▓▓▓▒░░░░░░░░░▒████████▓█████████▒░░░░░░░░▒▒▒░░░████████████
▒██████░░▒█▒█▓▒▓▓▓▓▒▓▓▒▒▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒░░░█████████████
▒███████░██▒▒█▒▓▓▓▓▓▓▓▓▒░░░████████▒░░░░▒▒▒▒░░░░▒▒░░░░░░▒▒▒░░░░▒░░░█████████████
▒███████░▓▓███▒▓▓▓▓▓▓▒▒▒▓██▓░░░░░▓█████▒░▒▒░░██░░░░▒█████████▓░░░███████████████
▒████████░░▓█▓▒▓▓▓▓▒▓▒▒▓░░░░░░▒▒░░░░░░░░░▒▒▒███▒░▒▒█░░░░░░░░░▓░░░███████████████
▒████████░▓███▒▒▓▓▓▓▓▒▒▒░░░░░░░░░░░▒▒▒▒▒▒▒▒░░▓░░▒▒░░░▒░░░░░░░░░░████████████████
▒████████░█▒░█▓▒▓▓▓▓▓▓▓░▒░▓████████░░░▓▒▒▒▒▒░░░░▒▒░░░░▒██░▒░░░░░████████████████
▒████████░█░▓▓█▒▒▓▓▓▒▒▒█████░░░░█████░░▒▒▒▒▒▒▒░░▒░░█████████▓▒░█████████████████
▒████████░▒░███▓▒▓▓▒▒▒░░░░▓░░░░███████░▒▓▒▒▒▒░░▒░▒█░███░█░██░░██████████████████
▒█████████░░▓█▓▒▒▒▓▓▒▒▒▒░░▒█░░░█▓████▓▒▒▓▒▒▒░░░▒░█░░█████░░░░░██████████████████
▒██████████░░░▓▓▓░▒▓▒▒▒▒▒░░░▓█▒░████░░▒░▒▒▒▒░░▒▒▒█▒░▒███░░░░░███████████████████
▒████████████░▒▓█▒▒▓▓▓▒▒▒▒▒░░░░░░░░░░░░▒▒▒▒▒░░▒░░░░▒░░░░░░░░░███████████████████
▒█████████████░░█▓░▒▓▓▓▒▒▒▒▒▒░░░░░░░▒░░░▒▒▒▒▒▒░▒░░░░░░░░░▒▒░░██████████████████▓
▒█████████████▓▒███░▒▓▓▓▓▒▒▒▒░▒░░▒░░░░▒░▒▓░░░░░▒░░▒░▒░░░░▒▒░░███████████████████
▓█████████████░█████░░▓▓▓▒▒▒▒▒▒▒▒░░░░▒▒▒████████░▒▒▒▒▒▒▒▒▒▒░████████████████████
▓███████████▓░░░░████░░▒▓▓▓▒▒▒▒▒▒▓██░░░░░░▒▓▓░░░░▒▒▒▒▒▒▒░░▓░░██████████████████▓
▓███████████░░▓▒▒░████▓░░▒▓▓▒▒▒▒░░░░██████▓░░░░▒█▒▒▒▒▒░░░█░░████████████████████
▓███████████░░▓▒░░██████▓░░░▒▒▒▒░░░░░░▒█░░░▒███░░░░░░░░███░░███████████████████▓
▓████████████▓░░███████████▒░░▒▒▒▒░░░▓▓█▓▓▓▓▓▒░░░░░░██████▓████████████████████▓
▓█████████████░░█████████████▒▓▒▒▒▒░░░░░▒▓▓▒░░░░░███████████████████████████████
▒████████████████████████████░▓███▒▒░░░░░░░░░░██████▓██░██████████████████████░░
▒██████████████████████████▒▒░▒▒▓▓████▓▓▓▓████▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
▒██████████████████████▓░░░▒▓▒▓▓▓▓▓▓▓████▓▓▓▓▓▒░▓▒▓▒░▒▓█░▒▓░░▓█▒▒▓▓▒▓▒▒▒▓▒▒░▒▓░░
▒█████████████████░░░░░░▒▓▓▓▓█▓▒▓▓▓▓▒▒▒▒░▒█▒▓░░▓▒▒░░▓▒░░░▓░▒▒▓░▓░▒░█▓▒▒▒▒░▒▒░▓░░
▒███████████████░░░▓▓▓▓▓▓██▓██▓█▓░█▓▒▓██▓█░▒░█▓▓▓▓▓▓▒░░░█▓▓▓▒▓▒▓░▒▓░░░░▒▒░░░▒░▓░
▒█████████████▓░░▒▒▒▒▒▒▒▒▒▒░░░▓▓░▓░▓▓▒░░░░▒▓▓▓▒░▓░░▒▒░▒░░▒▓░▒░░░██▒▒▒▒▒▒▒▓▓▓▓▓▓░
▒████████████░░▓▒▓▒▒▓▓▒░░░░░▒▒▒█░▓▒█░░▓▒█▒▓░▒░░░▒▒▒░▒▒▒▓▓▓░▒▓░░██▓▓▓▓▒▒▓▓▓░░░░░░
▒███████████░░░░▒░░▒▒▒▓▓█▒▓▒░▒▒░░▓░▒░▒█▒▓░░▒▒░█▒░░░░░░░░█░▒░░░█▓░░▒▒▒▓▓█▓▓░█████
▒█████████▓░░▒▒▒░▒▒▓█▓▓█▒▒░▒▓▒▓░▒▒░▒█▓▓▓░▒▓▒▓▒░▓▓█░░▓▒█░▒▒░▒░███████████░░░████▓
▒████████░░▒▒▒░█░▒▒█▓▓▒░▒█▒█░██░▓░█░░░▒▓░▒▒▓░░░░░▒▓▓▓▒▓░▓░░██▓▓▓▓█▓▓▒▓▓█░▒░▓███▓
░▒▒▒▒▒▒▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒░░░░░░░░░░░░░░░░░█▓▓▒

`
        console.error(capuchina);
        console.error("Your code is too sinful that even Buddha can't save it.");
      }
    })
  );
};