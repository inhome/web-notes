# Canceling obsolete requests

Cancel an obsolete fetch when the component no longer needs its result.

```js
const controller = new AbortController();
fetch("/api/articles", { signal: controller.signal })
  .catch(error => { if (error.name !== "AbortError") throw error; });
// On disposal:
controller.abort();
```

## Caveats

Cancellation is separate from result ordering. Some operations may complete before abort is observed.

## Check

Change the query rapidly and make sure an older result cannot replace the newest one.
