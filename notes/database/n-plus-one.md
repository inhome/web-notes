# Recognizing N plus one queries

Count database round trips across a whole request.

```sql
SELECT a.id, a.title, u.display_name
FROM articles AS a
JOIN users AS u ON u.id = a.author_id
WHERE a.published = TRUE;
```
