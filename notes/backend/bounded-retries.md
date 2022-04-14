# Bounded retries

Retry only failures that are safe and likely to be transient.

```text
attempt -> classify failure -> check deadline and retry budget -> wait with jitter -> retry
```
