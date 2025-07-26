const fs = require("fs/promises");
const path = require("path");

module.exports = async (args) => {
  await Promise.all(
    args.map(async (file) => {
      try {
        const data = await fs.readFile(file, "utf-8");

        // REPLACE BELOW WITH PROCESSING LOGIC
        const processedData = data.toUpperCase();
        // END

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
