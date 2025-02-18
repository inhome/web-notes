# Reading query plans

Compare estimates with actual row counts and identify the expensive operations.

```sql
EXPLAIN (ANALYZE, BUFFERS)
SELECT id, title FROM articles WHERE author_id = 42 ORDER BY id DESC LIMIT 20;
```
