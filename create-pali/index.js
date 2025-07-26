const fs = require("fs/promises");
const path = require("path");

// Load the conversion map from js-pali-master.json
const jsToPaliMap = require("../json/js-pali-master.json");

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

module.exports = async (args) => {
  await Promise.all(
    args.map(async (file) => {
      try {
        const data = await fs.readFile(file, "utf-8");

        // Convert the file content using the convertText function
        const processedData = convertText(data);

        const { dir, name } = path.parse(file);
        const newFileName = `${name}.paliscript`;
        const newFilePath = path.join(dir, newFileName);

        await fs.writeFile(newFilePath, processedData);

        console.log(`✅ Processed file created at: ${newFilePath}`);
      } catch (err) {
        console.error("❌ Error processing ", file, " : ", err.message);
      }
    })
  );
};