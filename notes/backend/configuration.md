# Configuration at the boundary

Read and validate configuration before starting the server.

```js
const rawPort = process.env.PORT || "3000";
if (!/^\d+$/.test(rawPort)) throw new Error("Invalid PORT");
const port = Number(rawPort);
if (port < 1 || port > 65535) throw new Error("PORT out of range");
```
