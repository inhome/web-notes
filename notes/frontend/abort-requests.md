# Canceling obsolete requests

Cancel an obsolete fetch when the component no longer needs its result.

```js
const controller = new AbortController();
fetch("/api/articles", { signal: controller.signal })
  .catch(error => { if (error.name !== "AbortError") throw error; });
// On disposal:
controller.abort();
```
