# Liveness and readiness

Separate process health from the ability to accept useful work.

```text
/live: process can respond
/ready: this instance can accept the intended workload
```

## Caveats

A dependency failure should not automatically cause every process to restart. Keep probes cheap and bounded.

## Check

Simulate a temporarily unavailable dependency and inspect readiness and restart behavior.
