# Stable pagination

A unique tie-breaker makes page ordering deterministic.

```sql
SELECT id, created_at, title
FROM articles
WHERE (created_at, id) < ($1, $2)
ORDER BY created_at DESC, id DESC
LIMIT $3;
```

## Caveats

The tuple comparison is PostgreSQL syntax. Cursor pagination also needs a policy for concurrent inserts and mutable ordering fields.

## Check

Create several rows with identical timestamps and ensure no row is skipped.
