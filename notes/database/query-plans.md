# Reading query plans

Compare estimates with actual row counts and identify the expensive operations.

```sql
EXPLAIN (ANALYZE, BUFFERS)
SELECT id, title FROM articles WHERE author_id = 42 ORDER BY id DESC LIMIT 20;
```

## Caveats

ANALYZE executes the statement. Use an appropriate environment, especially for statements that modify data.

## Check

Compare plans on small and representative data sets without assuming all sequential scans are bad.
