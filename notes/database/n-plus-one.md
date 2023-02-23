# Recognizing N plus one queries

Count database round trips across a whole request.

```sql
SELECT a.id, a.title, u.display_name
FROM articles AS a
JOIN users AS u ON u.id = a.author_id
WHERE a.published = TRUE;
```

## Caveats

A join is not always the right replacement; batching may fit the data model better. Watch row multiplication.

## Check

Compare query count for one row and for fifty rows.
