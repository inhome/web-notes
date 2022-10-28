# Graceful shutdown sequence

Stop accepting work before waiting for in-flight operations to finish.

```text
mark unready -> stop accepting connections -> drain active work -> close resources -> exit
```

## Caveats

Keep a bounded shutdown deadline and define behavior for long-lived connections.

## Check

Send the termination signal during a slow request and observe its result.
