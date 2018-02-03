# SQL parameter binding

Pass data separately from SQL syntax.

```sql
SELECT id, title
FROM articles
WHERE author_id = $1
ORDER BY id DESC
LIMIT $2;
```
