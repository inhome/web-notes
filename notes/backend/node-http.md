# A small Node HTTP server

Start with explicit routes and response types before introducing a framework.

```js
var http = require("http");
http.createServer(function (req, res) {
  if (req.method !== "GET" || req.url !== "/health") {
    res.writeHead(404); return res.end();
  }
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("ok\n");
}).listen(3000, "127.0.0.1");
```
