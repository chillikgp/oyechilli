/**
 * Zero-dependency Preview Server for Oye Chilli website
 * Supports clean URLs, proper MIME types, and 404 fallbacks.
 */

import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const PORT = parseInt(process.env.PORT || "3000", 10);
const DIST_DIR = path.resolve("dist");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8"
};

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  let pathname = decodeURIComponent(urlObj.pathname);

  // Normalize path
  let filePath = path.join(DIST_DIR, pathname);

  // Directory handling
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  } else if (!fs.existsSync(filePath) && !path.extname(filePath)) {
    // Clean URLs: e.g. /privacy -> /privacy/index.html or /privacy.html
    const tryDirIndex = path.join(filePath, "index.html");
    const tryHtml = `${filePath}.html`;

    if (fs.existsSync(tryDirIndex)) {
      filePath = tryDirIndex;
    } else if (fs.existsSync(tryHtml)) {
      filePath = tryHtml;
    }
  }

  // Security check to avoid directory traversal
  if (!filePath.startsWith(DIST_DIR)) {
    res.writeHead(403, { "Content-Type": "text/plain" });
    return res.end("403 Forbidden");
  }

  // Check if file exists
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    res.writeHead(200, {
      "Content-Type": contentType,
      "X-Content-Type-Options": "nosniff"
    });
    fs.createReadStream(filePath).pipe(res);
  } else {
    // 404 Fallback
    const notFoundFile = path.join(DIST_DIR, "404.html");
    if (fs.existsSync(notFoundFile)) {
      res.writeHead(404, {
        "Content-Type": "text/html; charset=utf-8",
        "X-Content-Type-Options": "nosniff"
      });
      fs.createReadStream(notFoundFile).pipe(res);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  }
});

server.listen(PORT, () => {
  console.log(`\n==========================================`);
  console.log(`  Oye Chilli Preview Server Running!`);
  console.log(`  Local URL: http://localhost:${PORT}`);
  console.log(`==========================================\n`);
});
