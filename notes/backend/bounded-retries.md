# Bounded retries

Retry only failures that are safe and likely to be transient.

```text
attempt -> classify failure -> check deadline and retry budget -> wait with jitter -> retry
```

## Caveats

Retrying a non-idempotent operation can duplicate its effect. Respect cancellation and server retry guidance.

## Check

Test a permanent validation failure, a transient failure, and an exhausted deadline.
