# Shareable URL state

Put shareable filters in the URL with explicit defaults.

```js
const params = new URLSearchParams(location.search);
const query = params.get("q") || "";
const sort = params.get("sort") === "oldest" ? "oldest" : "newest";
```
