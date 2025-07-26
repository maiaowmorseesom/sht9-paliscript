import http from "http";
import fs from "fs";
import path from "path";
import open from "open";

export default () => {
  const absPath = path.resolve("converter.html");

  const server = http.createServer((req, res) => {
    fs.readFile(absPath, (err, data) => {
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

    // Wait briefly before shutting down
    setTimeout(() => {
      server.close(() => {
        console.log("🛑 Server closed");
      });
    }, 1000); // 1 second delay to allow the browser to fetch the file
  });
};
