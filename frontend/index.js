import http from "http";
import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import open from "open";

export default () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const webPath = path.resolve(__dirname, "converter.html");

  const server = http.createServer((req, res) => {
    fs.readFile(webPath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading file");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  });

  server.listen(3000, async () => {
    const url = `http://localhost:${3000}`;
    console.log(`🚀 Opening ${url}`);
    await open(url);
    setTimeout(() => {
      server.close();
      console.log("🛑 Server closed");
      process.exit(0);
    }, 1000);
  });
};
