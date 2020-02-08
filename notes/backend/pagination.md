# Stable pagination

A unique tie-breaker makes page ordering deterministic.

```sql
SELECT id, created_at, title
FROM articles
WHERE (created_at, id) < ($1, $2)
ORDER BY created_at DESC, id DESC
LIMIT $3;
```
