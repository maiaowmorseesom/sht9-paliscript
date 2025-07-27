import http from "http";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import open from "open";

export default () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const projectRoot = path.resolve(__dirname, ".."); // Go up one level to the project root

  const server = http.createServer((req, res) => {
    let filePath;
    let contentType = "text/html";

    // Route requests to the correct files
    if (req.url === "/") {
      filePath = path.join(projectRoot, "frontend", "converter.html");
    } else if (req.url.startsWith("/json/")) {
      // Serve JSON files from the json directory
      filePath = path.join(projectRoot, "json", req.url.substring(5));
      contentType = "application/json";
    } else if (req.url === "/converter.js") {
      // Serve the main JavaScript file
      filePath = path.join(projectRoot, "frontend", "converter.js");
      contentType = "application/javascript";
    } else {
      res.writeHead(404);
      res.end("File not found");
      return;
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end(`Error loading file: ${err.message}`);
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      }
    });
  });

  server.listen(3000, async () => {
    const url = `http://localhost:3000`;
    console.log(`🚀 Opening ${url}`);
    await open(url);
    // Increased timeout to 60 seconds
    setTimeout(() => {
      server.close();
      console.log("🛑 Server closed after 60 seconds");
      process.exit(0);
    }, 60000); 
  });
};