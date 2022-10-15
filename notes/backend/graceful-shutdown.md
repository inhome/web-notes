# Graceful shutdown sequence

Stop accepting work before waiting for in-flight operations to finish.

```text
mark unready -> stop accepting connections -> drain active work -> close resources -> exit
```
