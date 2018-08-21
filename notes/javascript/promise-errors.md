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

## Caveats

Catching and doing nothing converts a failure into an apparently successful undefined result.

## Check

Use a rejected promise and confirm that the caller receives the rejection.
