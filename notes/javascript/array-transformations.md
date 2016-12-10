# Array transformations

Keep transformation functions separate from side effects.

```js
var prices = [12, 25, 9];
var totals = prices.map(function (price) { return price * 2; });
var affordable = totals.filter(function (total) { return total < 40; });
```

## Caveats

map preserves array length; filter may reduce it. Neither should mutate the source items accidentally.

## Check

Try an empty array and confirm that both results remain arrays.
