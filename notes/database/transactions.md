# Transactions for related writes

Keep related changes in one transaction so partial success is not visible.

```sql
BEGIN;
UPDATE inventory SET quantity = quantity - 1
WHERE id = 42 AND quantity > 0;
-- Verify the affected-row count before recording the reservation.
COMMIT;
```
