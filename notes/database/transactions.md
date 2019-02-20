# Transactions for related writes

Keep related changes in one transaction so partial success is not visible.

```sql
BEGIN;
UPDATE inventory SET quantity = quantity - 1
WHERE id = 42 AND quantity > 0;
-- Verify the affected-row count before recording the reservation.
COMMIT;
```

## Caveats

A transaction alone does not validate business rules. Check row counts and roll back on any failure.

## Check

Force the second operation to fail and confirm the first change is rolled back.
