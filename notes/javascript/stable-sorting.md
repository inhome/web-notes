# Explicit sort comparators

Supply a comparator for numbers and a tie-breaker when order must be reproducible.

```js
const ordered = records.slice().sort((a, b) => a.rank - b.rank || a.id - b.id);
```

## Caveats

The default sort compares strings. A comparator should be consistent and should not mutate compared values.

## Check

Include equal ranks, negative numbers, and already sorted data.
