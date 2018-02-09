# SQL parameter binding

Pass data separately from SQL syntax.

```sql
SELECT id, title
FROM articles
WHERE author_id = $1
ORDER BY id DESC
LIMIT $2;
```

## Caveats

Placeholder syntax depends on the database driver. Parameters bind values, not table or column identifiers.

## Check

Use an apostrophe in a bound string and verify it remains data.
