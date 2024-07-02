# Boundary-focused tests

Choose tests around behavior changes rather than copying the implementation.

```text
minimum - 1
minimum
minimum + 1
maximum - 1
maximum
maximum + 1
```

## Caveats

Include invalid types and empty input when the public contract permits receiving them.

## Check

Change an inclusive comparison to exclusive and verify that a test fails.
