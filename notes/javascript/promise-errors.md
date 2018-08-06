# Promise error propagation

Return the promise chain so callers can observe completion and failure.

```js
function readTitle(responsePromise) {
  return responsePromise.then(function (response) {
    if (!response.ok) throw new Error("Request failed");
    return response.json();
  }).then(function (body) { return body.title; });
}
```
